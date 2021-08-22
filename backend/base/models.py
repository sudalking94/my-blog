from django.db import models
from django.contrib.auth.models import User
from core.models import TimeStammpedModel

class Post(TimeStammpedModel):
    _id = models.AutoField(primary_key=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=100, null=False, blank=False)    
    content = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.title


class PostComment(TimeStammpedModel):
    _id = models.AutoField(primary_key=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=False, blank=False)    
    content = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.title

class Category(TimeStammpedModel):
    _id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=10, null=False, blank=False, unique=True)    

    def __str__(self):
        return self.title

class PostCategory(TimeStammpedModel):
    _id = models.AutoField(primary_key=True,auto_created=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    post = models.OneToOneField(Post, on_delete=models.CASCADE)    

    def __str__(self):        
        return str(self.category)

