from django.core.management.base import BaseCommand
from django_seed import Seed
from base.models import Category

NAME = "categories"

class Command(BaseCommand):
    help = f"This command creates {NAME}"

    def add_arguments(self,parser):
        parser.add_argument("--number", default=1, type=int, help=f"How many {NAME} you wnat to create?")

    def handle(self, *args, **options):
        number = options.get("number")
        seeder = Seed.seeder()
        seeder.add_entity(
            Category,
            number,            
        )
        seeder.execute()
        self.stdout.write(self.style.SUCCESS(f"{number} {NAME} created!"))