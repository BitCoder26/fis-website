from django.shortcuts import render, redirect
from .forms import SignupForm
from main.models import Business

# Create your views here.

#Submiting the sign up data to the database
def signup(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            latitude = request.POST.get("latitude")
            longitude = request.POST.get("longitude")
            latitude = float(latitude) if latitude else None
            longitude = float(longitude) if longitude else None
            user = form.save()
            #Creating submitting the business data to the database, lat and lon have been fetched via the js function
            Business.objects.create(
                user=user,
                email=form.cleaned_data["email"],
                phone_number=form.cleaned_data["phone"],
                address=form.cleaned_data["address"],
                postcode=form.cleaned_data["postcode"],
                description=form.cleaned_data.get("description", ""),
                latitude=latitude,
                longitude=longitude,
            )
            #send the user back to the main menu/map
            return redirect("map")
    else:
        form = SignupForm()



    return render(request, "sign-up.html", {"form": form})
