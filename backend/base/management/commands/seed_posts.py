import random
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from django_seed import Seed
from base.models import Post

NAME = "posts"

class Command(BaseCommand):
    help = f"This command creates {NAME}"

    def add_arguments(self,parser):
        parser.add_argument("--number", default=1, type=int, help=f"How many {NAME} you wnat to create?")

    def handle(self, *args, **options):
        number = options.get("number")
        useres = User.objects.all()
        seeder = Seed.seeder()
        seeder.add_entity(
            Post,
            number,
            {
                "author": lambda x: random.choice(useres)
            }
        )
        seeder.execute()
        self.stdout.write(self.style.SUCCESS(f"{number} {NAME} created!"))