# Generated by Django 3.2.14 on 2022-10-25 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dinopedia', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='dinosaur',
            name='description',
            field=models.TextField(default='Description Here', max_length=255),
            preserve_default=False,
        ),
    ]