from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    _id = models.AutoField(primary_key=True)
    authorId = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=100, null=False, blank=False)
    createdAt = models.DateField(auto_now_add=True)
    updatedAt = models.DateField(auto_now=True)
    content = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.title


class PostComment(models.Model):
    _id = models.AutoField(primary_key=True)
    postId = models.ForeignKey(Post, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=False, blank=False)
    createdAt = models.DateField(auto_now_add=True)
    content = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.title

class Category(models.Model):
    _id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=10, null=False, blank=False)

    def __str__(self):
        return self.title

class PostCategory(models.Model):
    postId = models.ForeignKey(Post, on_delete=models.CASCADE)
    categoryId = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.categoryId

