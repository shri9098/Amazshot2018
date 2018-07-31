# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-07-21 06:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee_data', '0003_auto_20180720_0702'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee_id_list',
            name='employee_id',
            field=models.IntegerField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='employeedata',
            name='gender',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
        migrations.DeleteModel(
            name='gender',
        ),
    ]
