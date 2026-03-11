
from django.shortcuts import render, redirect
from django.http import  HttpResponse
from json import dumps
from main.models import Business
from main.models import Event

# Create your views here.
def map(request):
    businesses = Business.objects.all()
    b_data = []
    for business in businesses:
        b_data.append({
            "email" : business.user.email,
            "phone" : business.phone_number,
            "address" : business.address,
            "postcode" : business.postcode,
            "description" : business.description,
            "latitude" : business.latitude,
            "longitude" : business.longitude,
            "type" : "business",
        })
    return render(request, 'map.html', {"bdata" : dumps(b_data)})