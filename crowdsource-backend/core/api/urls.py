from django.urls import path

from .views import ProblemsViews, SolutionViews, UserProfileView


urlpatterns = [
    path("user/<str:pk>", UserProfileView.as_view()),
    path("problems", ProblemsViews.as_view()),
    path("solutions", SolutionViews.as_view()),
]
