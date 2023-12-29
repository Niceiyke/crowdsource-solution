from rest_framework import serializers
from .models import Category, Problem, Solution, Vote, Comment
from account.models import UserProfile
from account.serializers import UserProfileSerializer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class ProblemSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    class Meta:
        model = Problem
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
    upvote = serializers.SerializerMethodField()
    downvote = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()
    solution_owner = serializers.SerializerMethodField()

    class Meta:
        model = Solution
        fields = "__all__"

    def get_solution_owner(self, obj):
        owner = UserProfile.objects.filter(id=obj.created_by.id).first()

        serializer = UserProfileSerializer(owner)

        return serializer.data

    def get_upvote(self, obj):
        upvote = Vote.objects.filter(solution=obj.id).filter(is_agree=True).count()

        return upvote

    def get_downvote(self, obj):
        downvote = Vote.objects.filter(solution=obj.id).filter(not_agree=True).count()

        return downvote

    def get_comments(self, obj):
        comments = Comment.objects.filter(solution=obj.id)

        serializer = CommentSerializer(comments, many=True)

        return serializer.data


class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = "__all__"
