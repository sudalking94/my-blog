from django.contrib import admin
from .models import Post, Category, PostComment, PostCategory

admin.site.register(Post)
admin.site.register(Category)
admin.site.register(PostComment)
admin.site.register(PostCategory)
