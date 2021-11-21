from django.db.models import fields
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import *

class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

        
class CareerOptionSerializer(ModelSerializer):
    streams = serializers.StringRelatedField(many=True)
    class Meta:
        model = CareerOption
        fields = ['name','total_levels','streams']


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
    streams = serializers.StringRelatedField(many=True)
    class Meta:
        model = Course
        fields=['name','price','streams']


class CourseCategorySerializer(ModelSerializer):
    class Meta:
        model = CourseCategory
        fields='__all__'