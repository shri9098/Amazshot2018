# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-07-20 06:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee_data', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee_id_list',
            name='employee_id',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
