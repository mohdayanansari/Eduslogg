from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import *

class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

        
class CareerOptionSerializer(ModelSerializer):
    class Meta:
        model = CareerOption
        fields = '__all__'


class InstituteSerializer(ModelSerializer):
    class Meta:
        model = Institute
        fields = '__all__'


class BlogSerializer(ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'


class QuerySerialzer(ModelSerializer):
    class Meta:
        model = Query
        fields = '__all__'

class CategorySerializer(ModelSerializer):
    class Meta:
        model = CareerCategory
        fields='__all__'


class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields='__all__'


class CourseCategorySerializer(ModelSerializer):
    class Meta:
        model = CourseCategory
        fields='__all__'