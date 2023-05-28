"""autosallon URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from autosallonApp.views.indexViews import index, email
from django.conf.urls.i18n import i18n_patterns

urlpatterns = [
    path("i18n/", include("django.conf.urls.i18n")),
    path('prova/', include('autosallonApp.urls')),
    path('chatGPT/', include('chatgpt_app.urls')),
    path('account/', include('account.urls')),
    
    path('', index, name='index'),
    path('cars/', index, name='index'),
    path('vehicle/', index, name='index'),
    path('signIn/', index, name='index'),
    path('register/', index, name='index'),

    path('email/', email, name='email'),

]
urlpatterns += i18n_patterns(path("admin/", admin.site.urls))
