from django.urls import path
from .views import *


urlpatterns = [

    path('', index, name='index'),
    path('about-us', about_us, name='about-us'),
    path('contact',contact_us, name='contact'),
    path('portfolio',portfolio, name='portfolio'),
    path('web_development',web_development, name='web_development'),
    path('mobile_development', mobile_development, name='mobile_development'),
    path('software_testing', software_testing, name='software_testing'),
    path('ui_ux_design', ui_ux_design, name='ui_ux_design'),

    ]