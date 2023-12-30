from django.contrib import admin

from .models import Question, Solution, Vote, Category, Comment

admin.site.register(Question),
admin.site.register(Category),
admin.site.register(Solution),
admin.site.register(Vote),
admin.site.register(Comment)
