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
        fields = ["email", "phone", "password1", "password2", "address", "postcode", "description"]

    def clean(self):
        cleaned_data = super().clean()
        email = self.cleaned_data.get("email", "").strip().lower()

        if User.objects.filter(username=email).exists():
            raise forms.ValidationError("An account with this email already exists.")

        return cleaned_data

    def save(self, commit=True):
        user = super().save(commit=False)
        email = self.cleaned_data["email"].strip().lower()
        user.email = email
        user.username = email

        if commit:
            user.save()

        return user