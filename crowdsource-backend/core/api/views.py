from django.shortcuts import render
from rest_framework import generics
from main.models import Problem, Solution, Vote, Category
from main.serializers import (
    ProblemSerializer,
    SolutionSerializer,
    CategorySerializer,
    VoteSerializer,
)

# Create your views here.


class ProblemsViews(generics.ListCreateAPIView):
    serializer_class = ProblemSerializer
    queryset = Problem.objects.all()


class SolutionViews(generics.ListCreateAPIView):
    serializer_class = SolutionSerializer
    queryset = Solution.objects.all()
