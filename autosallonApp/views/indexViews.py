from django.shortcuts import render

# Create your views here.

def index(request, uid=None, token=None):
  return render(request, 'index.html')

def email(request):
  return render(request, 'email.html')