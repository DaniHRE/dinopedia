# Generated by Django 4.1.1 on 2022-09-29 16:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dinopedia', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dinosaur',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='category', to='dinopedia.category'),
        ),
    ]
