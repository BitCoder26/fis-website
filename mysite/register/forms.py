from django import forms
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class SignupForm(UserCreationForm):
    email = forms.EmailField(required=True)
    phone = forms.CharField(required=True)
    address = forms.CharField(required=True)
    postcode = forms.CharField(required=True)
    description = forms.CharField(widget=forms.Textarea, required=False)

    class Meta:
        model = User
        fields = ["username","email", "phone", "password1", "password2", "address", "postcode", "description"]

    def save(self, commit=True):
        user = super().save(commit=False)
        email = self.cleaned_data["email"].strip().lower()

        if commit:
            user.save()

        return user