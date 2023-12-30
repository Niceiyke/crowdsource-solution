from django.urls import path

from .views import (
    QuestionViews,
    QuestionDetailView,
    SolutionViews,
    UserProfileView,
    CategoryViews,
    VoteViews,
)


urlpatterns = [
    path("user/<str:pk>", UserProfileView.as_view()),
    path("category", CategoryViews.as_view()),
    path("questions", QuestionViews.as_view()),
    path("question/<str:pk>", QuestionDetailView.as_view()),
    path("solutions", SolutionViews.as_view()),
    path("vote", VoteViews.as_view()),
]
