from django.contrib import admin
from .models import Post, Category, PostComment, PostCategory

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):

    list_display = (
        "author",
        "title",
        "createdAt",
        "updatedAt",
    )

    search_fields = ("title",)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "createdAt",
        "updatedAt",
    )

@admin.register(PostComment)
class PostCommentAdmin(admin.ModelAdmin):
    list_display = (
        "post",
        "title",
        "createdAt",
        "updatedAt",
    )

@admin.register(PostCategory)
class PostCategoryAdmin(admin.ModelAdmin):
    list_display = (
        "category",
        "post",
        "createdAt",
        "updatedAt",
    )