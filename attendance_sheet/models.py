# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
from employee_data.models import employee_id_list


class AttendanceSheetData(models.Model):
    attend_emp_id = models.ForeignKey(employee_id_list)
    working_days = models.CharField(max_length=10, blank=True, null=True)
    present = models.CharField(max_length=10, blank=True, null=True)
    absent = models.CharField(max_length=10, blank=True, null=True)
    half_day = models.CharField(max_length=10, blank=True, null=True)
    leave = models.CharField(max_length=10, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __unicode__(self):
        return str(self.attend_emp_id)
