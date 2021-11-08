from django.urls import path
from . import views


urlpatterns = [
    path('',views.getRoutes, name='getroutes'),
    path('careers/',views.careerOptions, name="careers"),
    path('students/',views.students, name="students"),
]
