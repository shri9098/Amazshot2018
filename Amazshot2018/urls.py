"""Amazshot2018 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static

from django.conf.urls import url
from django.contrib import admin

from employee_data.views import register, signout
from home.views import start, login_admin, emp_registration, emp_details, get_emp_detail, Emp_login

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$/', start),
    url(r'^login_admin/$', login_admin),
    url(r'^Emp_login/$', Emp_login),
    url(r'^emp_registration/$', emp_registration),
    url(r'^register/$', register),
    url(r'^signout/$', signout),
    url(r'^emp_details/$', emp_details),
    url(r'^get_emp_detail/$', get_emp_detail),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += url(r'^.*$', start),
