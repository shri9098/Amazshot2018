# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import os
from json import loads

from django.http import JsonResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt

from django.shortcuts import render

# Create your views here.
from employee_data.models import employee_id_list, EmployeeData


def signout(request):
    del request.session["access_token"]
    return HttpResponseRedirect('/')


@csrf_exempt
def register(request):
    if request.user.is_authenticated():
        if request.method == "POST":
            print("\n******************* In side Employee Registration Post method  *********************")
            data = {}

            current_user = request.user
            print(current_user)
            if request.is_ajax():
                # =========Increment and create of Employee ID  ========================
                try:
                    try:
                        emp_id = str(employee_id_list.objects.filter(employee_id__startswith='AMZ00').last())
                        print(emp_id, 'basic')
                        print(type(emp_id))

                        if str(emp_id) == 'None':
                            emp_id = 'AMZ00'
                        employee_id_digit = int(emp_id[4:])
                        print(employee_id_digit, '1')
                        print(type(employee_id_digit))
                        try:
                            if employee_id_digit < 9:
                                this_employee_id = ('AMZ00' + str(employee_id_digit + 1))
                                print (type(this_employee_id))
                                print(this_employee_id, 'Employee Id 9')
                            elif 9 <= employee_id_digit < 99:
                                this_employee_id = ('AMZ00' + str(employee_id_digit + 1))
                                print(this_employee_id, 'Employee Id 99')
                        except Exception as e:
                            print("not increament in the emp_id", e)

                        employee_id_list.objects.create(employee_id=this_employee_id)
                        # Get the instance of employee id
                        this_employee_id_instance = employee_id_list.objects.get(employee_id=this_employee_id)
                        print("Inserted employee id...will used as Foreign Key", this_employee_id_instance)
                    except Exception as e:
                        print("Exception on inserting employee id : ", e)
                    # ====================Load image into server===============================
                    try:
                        file_name = request.POST.get('img_path')
                        while True:
                            try:
                                folder = 'static/media/emp_images/' + str(this_employee_id) + '/'
                                os.mkdir(os.path.join(folder))
                                break
                            except Exception as e:
                                print("Error creating folder ", e)
                                this_employee_id = str(int(this_employee_id) + 1)
                        print("image=", file_name)
                        fout = open(folder + file_name, 'w')
                        file_content = request.FILES.get('img').read()
                        # for chunk in file_content.chunks():
                        fout.write(file_content)
                        fout.close()
                    except Exception as e:
                        image = 'image'
                        print("Image upload error :", e)
                    # ===========set the path of uploaded user image======================
                    image_path = "emp_images/" + str(this_employee_id) + "/" + str(file_name)
                    print(image_path)
                    print("---0.5---")

                    # ----------------------Receiveing data from jS-----------------------------

                    try:
                        register_data = request.POST.get('employee-data')
                        print("---DATA got----")
                    except Exception as e:
                        print("Error on DATA gettings :", e)
                    try:
                        register_data = loads(register_data)
                        print("---JSON loads done----")
                    except Exception as e:
                        print("Error on JSON loads ", e)
                    print("**********************************")
                    print("employee_id = ", str(this_employee_id_instance))
                    print("first_name = ", str(register_data['first_name']))
                    print("number = ", str(register_data['number']))
                    print("email = ", str(register_data['email']))
                    print("parent_father = ", str(register_data['father_name']))
                    print("parent_mother = ", str(register_data['mother_name']))
                    print("address = ", str(register_data['address']))
                    print("designation = ", str(register_data['designation']))
                    print("blood_group = ", str(register_data['blood_group']))
                    print("joining_date = ", str(register_data['joining_date']))
                    print("dob = ", str(register_data['dob']))
                    print("image = ", str(image_path))
                    print("type = direct",)
                    print("\n**********************************\n")
                    EmployeeData.objects.create(employee_id=this_employee_id_instance,
                                                first_name=register_data['first_name'],
                                                last_name=register_data['last_name'],
                                                number=int(register_data['number']), email=register_data['email'],
                                                parent_father=register_data['father_name'],
                                                parent_mother=register_data['mother_name'], dob=register_data['dob'],
                                                address=register_data['address'],
                                                designation=register_data['designation'],
                                                blood_group=register_data['blood_group'],
                                                gender=register_data['gender'],
                                                joining_date=register_data['joining_date'],
                                                image=image_path, type="active")
                    print("success")
                    json_data = {'response': 'success'}
                    return JsonResponse(json_data)
                except Exception as e:
                    print(e, 'something wrong')
                    json_data = {'response': 'failed'}
                    return JsonResponse(json_data)
            return render(request, 'admin/regis_form.html/')
    return HttpResponseRedirect("/")
