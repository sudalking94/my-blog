from django.db import models
from django.contrib.auth.models import User
from core.models import TimeStammpedModel

class Post(TimeStammpedModel):
    _id = models.AutoField(primary_key=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=100, null=False, blank=False)    
    content = models.TextField(null=False, blank=False)
    category = models.ForeignKey("Category",on_delete=models.CASCADE,default=1)
    commentsCtn = models.IntegerField()

    class Meta:
        ordering = ['-createdAt']
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

    class Meta:
        ordering = ['title']
        
    def __str__(self):
        return self.title


