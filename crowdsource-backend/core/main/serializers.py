from rest_framework import serializers
from .models import Category, Question, Solution, Vote, Comment
from account.models import UserProfile
from account.serializers import UserProfileSerializer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    post_liked_by = serializers.SerializerMethodField()

    class Meta:
        model = Question
        fields = "__all__"
        extra_kwargs = {
            "created_by": {"read_only": True},
            "liked_by": {"read_only": True},
            "disliked_by": {"read_only": True},
        }

    def get_user(self, obj):
        data = UserProfile.objects.filter(id=obj.created_by.id).first()
        username = data.user.username
        email = data.user.email
        bio = data.bio
        profile_picture = str(data.profile_picture)
        return {
            "username": username,
            "email": email,
            "bio": bio,
            "profile_picture": profile_picture,
        }

    def get_post_liked_by(self, obj):
        user = self.context["request"].user.userprofile.id
        print(obj.liked_by)

        user = [user for user in obj.liked_by]
        print("user", user)

        return user


class CommentSerializer(serializers.ModelSerializer):
    comment_owner = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = "__all__"

    def get_comment_owner(self, obj):
        owner = UserProfile.objects.filter(id=obj.created_by.id).first()

        serializer = UserProfileSerializer(owner)

        return serializer.data


class SolutionSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField()
    solution_owner = serializers.SerializerMethodField()

    class Meta:
        model = Solution
        fields = "__all__"
        extra_kwargs = {
            "created_by": {"read_only": True},
            "liked_by": {"read_only": True},
            "disliked_by": {"read_only": True},
        }

    def get_solution_owner(self, obj):
        owner = UserProfile.objects.filter(id=obj.created_by.id).first()

        serializer = UserProfileSerializer(owner)

        return serializer.data

    def get_comments(self, obj):
        comments = Comment.objects.filter(solution=obj.id)

        serializer = CommentSerializer(comments, many=True)

        return serializer.data

    def create(self, validated_data):
        user_profile = self.context["request"].user.userprofile
        validated_data["created_by"] = user_profile
        return super().create(validated_data)


class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ["id", "solution", "voted_by", "value", "created_at"]
