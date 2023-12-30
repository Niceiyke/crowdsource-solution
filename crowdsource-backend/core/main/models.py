from django.db import models
from account.models import UserProfile
import uuid


class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Question(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_by = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        ordering = [
            "-created_at",
        ]

    def __str__(self):
        return self.title


class Solution(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    description = models.TextField()
    created_by = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = [
            "-created_at",
        ]

    def __str__(self):
        return f"Solution for {self.question.title}"

    def get_user_vote(self, user_profile):
        try:
            vote = Vote.objects.get(solution=self, voted_by=user_profile)
            return vote.value
        except Vote.DoesNotExist:
            return 0  # User has not voted on this solution


class Vote(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    solution = models.ForeignKey(Solution, on_delete=models.CASCADE)
    voted_by = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    value = models.IntegerField(
        default=0
    )  # 0 for no vote, +1 for upvote, -1 for downvote
    created_at = models.DateTimeField(auto_now_add=True)


class Comment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    description = models.CharField(max_length=200)
    solution = models.ForeignKey(
        Solution, on_delete=models.CASCADE, related_name="comments"
    )
    created_by = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    parent = models.ForeignKey("self", on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        ordering = [
            "-created_at",
        ]

    def __str__(self):
        return f"Comment by {self.created_by.user.username} on {self.solution.problem.title}"
