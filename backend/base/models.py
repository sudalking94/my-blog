from django.db import models
from django.contrib.auth.models import User
from core.models import TimeStammpedModel

class Post(TimeStammpedModel):
    _id = models.AutoField(primary_key=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=100, null=False, blank=False)    
    content = models.TextField(null=False, blank=False)
    category = models.ForeignKey("Category",on_delete=models.CASCADE,default=1)    

    class Meta:
        ordering = ['-createdAt']
    def __str__(self):
        return self.title


class Category(TimeStammpedModel):
    _id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=10, null=False, blank=False, unique=True)    

    class Meta:
        ordering = ['title']
        
    def __str__(self):
        return self.title

class Photo(TimeStammpedModel):
    caption = models.CharField(max_length=30)
    description = models.TextField(null=False,blank=False)
    file = models.ImageField(upload_to="images")
    post = models.ForeignKey("Post",related_name="photos",on_delete=models.CASCADE)

    def __str__(self):
        return self.caption