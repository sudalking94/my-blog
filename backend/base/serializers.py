from django.db.models import fields
from rest_framework import serializers
from .models import Post, Category, PostCategory, PostComment

class PostSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Post
        fields = "__all__"
    
    def get_comments(self,obj):
        comments= obj.postcomment_set.all()        
        serializer = CommentSerializer(comments, many=True)
        return serializer.data


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class PostCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostCategory
        fields = "__all__"        

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComment
        fields = "__all__"        