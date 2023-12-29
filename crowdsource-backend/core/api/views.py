from django.shortcuts import render
from rest_framework import generics
from main.models import Problem, Solution, Vote, Category
from account.models import UserProfile
from account.serializers import UserProfileSerializer
from main.serializers import (
    ProblemSerializer,
    SolutionSerializer,
    CategorySerializer,
    VoteSerializer,
)

# Create your views here.

class CategoryViews(generics.ListAPIView):
    serializer_class =CategorySerializer
    queryset = Category.objects.all()

class UserProfileView(generics.RetrieveAPIView):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()


class ProblemsViews(generics.ListCreateAPIView):
    serializer_class = ProblemSerializer
    queryset = Problem.objects.all()

class SolutionViews(generics.ListCreateAPIView):
    serializer_class = SolutionSerializer
    queryset = Solution.objects.all()
