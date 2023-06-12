from django.urls import path
from .views import StripeCheckoutView
from django.views.decorators.csrf import csrf_exempt

urlpatterns=[
   path('create-checkout-session', StripeCheckoutView.as_view()),
    ]