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
from django.urls import path, include
from account.views import SendPasswordResetEmailView, UserRegistrationView, UserLoginView, UserProfileView, UserChangePasswordView, UserPasswordResetView, UserUpdateView
from autosallonApp.views.indexViews import index

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('resetpasswordemail/', SendPasswordResetEmailView.as_view(), name='resetpasswordemail'),
    path('reset/<uid>/<token>', UserPasswordResetView.as_view(), name='resetpassword'),
    path('resetpassword/<uid>/<token>', index, name='index'),
    path('update/<int:pk>/', UserUpdateView.as_view(), name='update'),

]
