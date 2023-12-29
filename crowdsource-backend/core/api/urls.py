from django.urls import path

from .views import ProblemsViews, SolutionViews, UserProfileView,CategoryViews


urlpatterns = [
    path("user/<str:pk>", UserProfileView.as_view()),
    path("category", CategoryViews.as_view()),
    path("problems", ProblemsViews.as_view()),
    path("solutions", SolutionViews.as_view()),
]
