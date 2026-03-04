from django.contrib import admin
from .models import Business, Event

# Register your models here.
#Adding business and event tables
admin.site.register(Business)
admin.site.register(Event)