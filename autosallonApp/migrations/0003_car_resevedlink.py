# Generated by Django 4.2.1 on 2023-06-13 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autosallonApp', '0002_alter_contactinfo_address_alter_contactinfo_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='resevedlink',
            field=models.URLField(blank=True, null=True),
        ),
    ]
