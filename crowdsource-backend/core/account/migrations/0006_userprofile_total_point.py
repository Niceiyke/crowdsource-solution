# Generated by Django 5.0 on 2023-12-27 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_alter_userprofile_profile_picture'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='total_point',
            field=models.IntegerField(default=0),
        ),
    ]
