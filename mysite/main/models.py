from django.db import models
from django.contrib.auth.models import User

# Create your models here.

#Table for storing businesses to be added to the map, this table functions for log in and when calling data for the map
class Business(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField()
    phone_number = models.CharField(max_length=11)
    address = models.CharField(max_length=100)
    postcode = models.CharField(max_length=100)
    description = models.TextField()
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    def __str__(self):
        return self.email

#Events are made by admins and used for public events
class Event(models.Model):
    email = models.EmailField()
    phone_number = models.CharField(max_length=11)
    address = models.CharField(max_length=100)
    postcode = models.CharField(max_length=100)
    description = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    def __str__(self):
        return self.email