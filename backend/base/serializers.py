from django.db.models import fields
from rest_framework import serializers
from .models import Post, Category, Photo

class PostSerializer(serializers.ModelSerializer):    
    photos = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Post
        fields = "__all__"
        
    def get_photos(self,obj):
        photos = obj.photos.all()
        serializer = PhotoSerializer(photos,many=True)
        return serializer.data

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"

class MainPostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):    
    class Meta:
        model = Category
        fields = ["_id","title"]
    

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = "__all__"        