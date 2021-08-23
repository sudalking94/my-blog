from django.urls import path
from base.views import post_category_views as views

urlpatterns = [
   path("", views.getPostCategories, name="post-categories"),
]
