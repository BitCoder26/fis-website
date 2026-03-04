
from django.shortcuts import render, redirect
from django.http import  HttpResponse

# Create your views here.
def map(request):
    return render(request, 'map.html', {})

