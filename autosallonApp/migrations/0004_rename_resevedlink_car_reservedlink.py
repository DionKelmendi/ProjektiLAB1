# Generated by Django 4.2.1 on 2023-06-13 09:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('autosallonApp', '0003_car_resevedlink'),
    ]

    operations = [
        migrations.RenameField(
            model_name='car',
            old_name='resevedlink',
            new_name='reservedlink',
        ),
    ]