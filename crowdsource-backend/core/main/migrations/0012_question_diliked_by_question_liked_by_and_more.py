# Generated by Django 5.0 on 2023-12-31 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0007_alter_userprofile_profile_picture'),
        ('main', '0011_rename_problem_solution_question'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='diliked_by',
            field=models.ManyToManyField(blank=True, related_name='question_dislikedby', to='account.userprofile'),
        ),
        migrations.AddField(
            model_name='question',
            name='liked_by',
            field=models.ManyToManyField(blank=True, related_name='question_likedby', to='account.userprofile'),
        ),
        migrations.AddField(
            model_name='solution',
            name='diliked_by',
            field=models.ManyToManyField(blank=True, related_name='solution_dislikedby', to='account.userprofile'),
        ),
        migrations.AddField(
            model_name='solution',
            name='liked_by',
            field=models.ManyToManyField(blank=True, related_name='solution_likedby', to='account.userprofile'),
        ),
    ]