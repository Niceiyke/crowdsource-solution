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

    class Meta:
        model = Question
        fields = "__all__"

    def get_user(self, obj):
        data = UserProfile.objects.filter(id=obj.created_by.id).first()
        username = data.user.username
        email = data.user.email
        bio = data.bio
        pix = str(data.profile_picture)
        return {"username": username, "email": email, "bio": bio, "pix": pix}

    def create(self, validated_data):
        return super().create(validated_data)


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
    user_vote = serializers.SerializerMethodField()

    class Meta:
        model = Solution
        fields = "__all__"
        extra_kwargs = {"created_by": {"read_only": True}}

    def get_solution_owner(self, obj):
        owner = UserProfile.objects.filter(id=obj.created_by.id).first()

        serializer = UserProfileSerializer(owner)

        return serializer.data

    def get_comments(self, obj):
        comments = Comment.objects.filter(solution=obj.id)

        serializer = CommentSerializer(comments, many=True)

        return serializer.data

    def get_user_vote(self, obj):
        user_profile = self.context["request"].user.userprofile
        return obj.get_user_vote(user_profile)

    def create(self, validated_data):
        user_profile = self.context["request"].user.userprofile
        validated_data["created_by"] = user_profile
        return super().create(validated_data)


class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ["id", "solution", "voted_by", "value", "created_at"]
