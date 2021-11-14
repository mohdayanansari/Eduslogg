from django.urls import path
from . import views


urlpatterns = [
    # testing urls ......
    path('queries/',views.query, name="queries"),
    path('career-streams/',views.category, name="categories"),
    path('course_category/',views.courseCategory, name="course_cats"),
    path('',views.getRoutes, name='getroutes'),
    # end testing urls ...
    path('careers/',views.careerOptions, name="careers"),
    path('students/',views.students, name="students"),
    path('institutes/',views.institutes, name="institutes"),
    path('blogs/',views.blogs, name="blogs"),
    path('queryform/',views.queryForm, name="query_form"),
    path('courses/',views.course, name="courses"),
]
