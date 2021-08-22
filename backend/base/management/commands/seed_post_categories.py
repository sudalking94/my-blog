import random
from django.core.management.base import BaseCommand
from base.models import PostCategory, Category, Post

NAME = "post categories"

class Command(BaseCommand):
    help = f"This command creates {NAME}"

    def add_arguments(self,parser):
        parser.add_argument("--number", default=1, type=int, help=f"How many {NAME} you wnat to create?")

    def handle(self, *args, **options):
        post_cateogires = PostCategory.objects.all()
        post_cateogires.delete()
        number = options.get("number")
        categories = Category.objects.all()     
        posts = Post.objects.all()   
        
        try:
            for n in range(number):
                PostCategory.objects.create(category=random.choice(categories),post=posts[n])            
            self.stdout.write(self.style.SUCCESS(f"{number} {NAME} created!"))
        except IndexError:
            self.stdout.write(self.style.ERROR("You are trying to add post categories more then posts"))