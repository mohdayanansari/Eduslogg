from django.urls import path
from . import views


urlpatterns = [
    path('',views.getRoutes, name='getroutes'),
    path('careers/',views.careerOptions, name="careers"),
    path('students/',views.students, name="students"),
    path('institutes/',views.institutes, name="institutes"),
    path('blogs/',views.blogs, name="blogs"),
    path('queryform/',views.queryForm, name="query_form"),
    path('queries/',views.query, name="queries"),
    path('career-streams/',views.category, name="categories"),
]
