import uuid
from django.db import models
from account.models import UserProfile


class Point(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    earn_by =models.ForeignKey(UserProfile,on_delete =models.CASCADE,related_name ='points')
    point =models.PositiveIntegerField(default=0)
    action = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Point by {self.earn_by.user.username} for {self.action}"
