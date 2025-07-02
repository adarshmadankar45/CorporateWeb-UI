from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'index.html')

def about_us(request):
    return render(request, 'about.html')

def contact_us(request):
    return render(request, 'contact.html')


def portfolio(request):
    return render(request, 'portfolio.html')

def web_development(request):
    return render(request, 'web_application.html')

def mobile_development(request):
    return render(request, 'mobile_development.html')

def software_testing(request):
    return render(request, 'software_testing.html')

def ui_ux_design(request):
    return render(request, 'ui_ux_design.html')
