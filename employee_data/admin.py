# -*- coding: utf-8 -*-
# from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from employee_data.models import EmployeeData, employee_id_list


class EmployeeDataAdmin(admin.ModelAdmin):
    readonly_fields = ['image_']
    list_display = ["id", "image_", "employee_id", "first_name", "last_name", "number", "email", "parent_father",
                    "parent_mother", "dob", "joining_date", "designation", "blood_group", "address", "gender", "type",
                    "created_at", "updated_at"]


admin.site.register(EmployeeData, EmployeeDataAdmin)


class employee_id_listAdmin(admin.ModelAdmin):
    list_display = ["id", "employee_id"]


admin.site.register(employee_id_list, employee_id_listAdmin)
