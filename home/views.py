from django.http.response import JsonResponse

from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth import authenticate, login, logout

from django.http import HttpResponseRedirect
from django.shortcuts import render, render_to_response

# # Create your views here.
from employee_data.models import EmployeeData


def start(request):
    if request.method == "GET":
        return render(request, 'home/home.html/')
    return HttpResponseRedirect("/")


@csrf_exempt
def login_admin(request):
    if request.method == "GET":
        if request.user.is_authenticated():
            print("\n~~~~~~~~~~~ inside Admin Get Method !~~~~~~~~~~~\n")
            return render(request, 'admin/emp_details.html/')
        else:
            return render(request, 'admin/login.html')
    try:
        if request.method == "POST":
            print("\n~~~~~~~~~~~ inside Admin POST Method !~~~~~~~~~~~\n")
            username = str(request.POST.get('username'))
            password = str(request.POST.get('password'))
            print(username)
            print(password)
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                print("Authenticated")
                if request.user.is_superuser:
                    print("a super user")
                    return HttpResponseRedirect('/emp_registration/')
            else:
                print("Wrong username or password")
                return render(request, 'admin/login.html', {"invalid": True})
    except Exception as e:
        print("some thin wrong", str(e))
    return HttpResponseRedirect('/')


def logout_page(request):
    logout(request)
    return render(request, 'admin/login.html', {"invalid": True})


@csrf_exempt
def Emp_login(request):
    if request.method == "GET":
        return render(request, 'employee/emp_login.html/')
    return HttpResponseRedirect("//")


@csrf_exempt
def emp_registration(request):
    if request.user.is_authenticated() and request.method == "GET":
        return render(request, 'admin/regis_form.html/')
    return HttpResponseRedirect("/login_admin/")


@csrf_exempt
def emp_details(request):
    if request.user.is_authenticated() and request.method == "GET":
        response_json = {}
        print("\n **************************-------Inside Employee Detail GET Method --------************************")
        if request.user.is_authenticated():
            response_json['emp_details_list'] = []
            try:
                for employee in EmployeeData.objects.filter().order_by('-employee_id'):
                    temp_json = {'employee_id': str(employee.employee_id),
                                 'first_name': employee.first_name,
                                 'last_name': employee.last_name,
                                 'designation': employee.designation,
                                 'joining_date': employee.joining_date,
                                 'number': employee.number}
                    response_json['emp_details_list'].append(temp_json)
                print(response_json)

                return render(request, "admin/emp_details.html/", response_json)
                # return JsonResponse(response_json)
            except Exception as e:
                print('Exception', str(e))
            return render(request, "admin/emp_details.html/")
    return HttpResponseRedirect("/")


@csrf_exempt
def get_emp_detail(request):
    if request.user.is_authenticated() and request.method == "GET":
        print("\n **************************-------Inside Employee Detail GET Method --------************************")
        response_json = {}
        emp_id = request.GET.get('emp_id')
        print (type(emp_id))
        print (str(emp_id), '1')
        response_json['emp_details_list'] = []
        emp_instance = EmployeeData.objects.get(employee_id__employee_id=emp_id)
        print(emp_instance, '2')
        try:
            for emp_instance in EmployeeData.objects.filter(employee_id__employee_id=emp_id):
                response_json = {'employee_id': str(emp_instance.employee_id),
                                 'first_name': emp_instance.first_name,
                                 'parent_father': emp_instance.parent_father,
                                 'parent_mother': emp_instance.parent_mother,
                                 'last_name': emp_instance.last_name,
                                 'blood_group': emp_instance.blood_group,
                                 'dob': emp_instance.dob,
                                 'designation': emp_instance.designation,
                                 'joining_date': emp_instance.joining_date,
                                 'number': emp_instance.number,
                                 'email': emp_instance.email,
                                 'address': emp_instance.address,
                                 'gender': emp_instance.gender,
                                 'type': emp_instance.type,
                                 'image': str(emp_instance.image)}
                print(response_json)
            response_json['success'] = True
            return JsonResponse(response_json)
        except Exception as e:
            print('Exception', str(e))
    return HttpResponseRedirect("/")
