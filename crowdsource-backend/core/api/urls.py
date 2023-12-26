from django.urls import path

from .views import ProblemsViews, SolutionViews

urlpatterns = [
    path("problems", ProblemsViews.as_view()),
    path("solutions", SolutionViews.as_view()),
]
