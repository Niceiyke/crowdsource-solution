from django.contrib import admin

from .models import Problem, Solution, Vote, Category

admin.site.register(Problem),
admin.site.register(Category),
admin.site.register(Solution),
admin.site.register(Vote),
