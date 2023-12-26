# Generated by Django 5.0 on 2023-12-26 19:12

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_userprofile'),
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='problem',
            name='created_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.userprofile'),
        ),
        migrations.AlterField(
            model_name='solution',
            name='created_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.userprofile'),
        ),
        migrations.AlterField(
            model_name='vote',
            name='voted_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.userprofile'),
        ),
    ]
