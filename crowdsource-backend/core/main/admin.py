from django.contrib import admin

from .models import Problem, Solution, Vote, Category,Comment

admin.site.register(Problem),
admin.site.register(Category),
admin.site.register(Solution),
admin.site.register(Vote),
admin.site.register(Comment)
