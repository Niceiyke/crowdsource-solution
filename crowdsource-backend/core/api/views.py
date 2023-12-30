from django.shortcuts import render
from rest_framework import generics
from main.models import Question, Solution, Vote, Category
from account.models import UserProfile
from account.serializers import UserProfileSerializer
from main.serializers import (
    QuestionSerializer,
    SolutionSerializer,
    CategorySerializer,
    VoteSerializer,
)

# Create your views here.


class CategoryViews(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class UserProfileView(generics.RetrieveAPIView):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()


class QuestionViews(generics.ListCreateAPIView):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


class QuestionDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


class SolutionViews(generics.ListCreateAPIView):
    serializer_class = SolutionSerializer
    queryset = Solution.objects.all()


class VoteViews(generics.CreateAPIView):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()
