# Generated by Django 5.0 on 2023-12-30 13:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_remove_vote_is_agree_remove_vote_not_agree_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='solution',
            name='votes',
        ),
    ]