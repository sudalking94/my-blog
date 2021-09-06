from django.contrib import admin
from .models import Post, Category, Photo

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):

    list_display = (           
        "category",        
        "title",
        "createdAt",
        "updatedAt",
    )
    list_filter = ("category",)
    search_fields = ("title",)
    
    ordering = ("category__title","title",)
    

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "createdAt",
        "updatedAt",
    )

@admin.register(Photo)
class PhotosAdmin(admin.ModelAdmin):
    list_display = (
     "post",
     "caption",
     "createdAt",
     "updatedAt",
    )    
    search_fields = ("post__title",)