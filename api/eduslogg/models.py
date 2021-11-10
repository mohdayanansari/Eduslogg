from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=50, null=True)
    email = models.CharField(max_length=100, null=True)

    def __repr__(self):
        return self.name
    
    def __str__(self):
        return self.name


class CareerOption(models.Model):
    name = models.CharField(max_length=100, null=True)
    total_levels = models.IntegerField()

    def __repr__(self):
        return self.name
    
    def __str__(self):
        return self.name

class Institute(models.Model):
    name = models.CharField(max_length=100, null=True)
    

    def __repr__(self) -> str:
        return self.name
    
    def __str__(self) -> str:
        return self.name
