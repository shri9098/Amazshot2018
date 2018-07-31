# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from datetime import date

from django.db import models


# Create your models here.


class employee_id_list(models.Model):
    employee_id = models.CharField(max_length=120, blank=False, null=False)
    mock_data = models.BooleanField(default=False)

    def __unicode__(self):
        return str(self.employee_id)


class EmployeeData(models.Model):
    employee_id = models.ForeignKey(employee_id_list, on_delete=models.CASCADE, db_column='employee_id_list'
                                                                                          '.employee_id')
    first_name = models.CharField(max_length=120, blank=True, null=True)
    last_name = models.CharField(max_length=120, blank=True, null=True)
    number = models.BigIntegerField(blank=True, null=True)
    email = models.EmailField(max_length=120, blank=True, null=True)
    parent_father = models.CharField(max_length=120, blank=True, null=True)
    parent_mother = models.CharField(max_length=120, blank=True, null=True)
    designation = models.CharField(max_length=120, blank=True, null=True)
    blood_group = models.CharField(max_length=120, blank=True, null=True)
    dob = models.CharField(max_length=10, default=date.today, blank=False, null=False)
    joining_date = models.CharField(max_length=10, default=date.today, blank=False, null=False)
    address = models.CharField(max_length=120, blank=True, null=True)

    gender = models.CharField(max_length=12, blank=True, null=True)

    image = models.ImageField(upload_to='media/emp_images/', default="media/emp_images/icon.png")
    type_choices = (('active', 'active'), ('inactive', 'inactive'))
    type = models.CharField(max_length=50, blank=False, null=False, choices=type_choices, default="active")
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __unicode__(self):
        return str(self.employee_id)

    def image_(self):  # ,obj):
        return '<img src="%s" width="68" height="80" />' % (self.image.url)

    image_.allow_tags = True
    image_.short_description = 'image'
