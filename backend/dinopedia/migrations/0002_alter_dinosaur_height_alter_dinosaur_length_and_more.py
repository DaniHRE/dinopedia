# Generated by Django 4.1.2 on 2022-11-02 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dinopedia', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dinosaur',
            name='height',
            field=models.FloatField(max_length=255),
        ),
        migrations.AlterField(
            model_name='dinosaur',
            name='length',
            field=models.FloatField(max_length=255),
        ),
        migrations.AlterField(
            model_name='dinosaur',
            name='weight',
            field=models.FloatField(max_length=255),
        ),
    ]
