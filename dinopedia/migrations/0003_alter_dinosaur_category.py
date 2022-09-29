# Generated by Django 4.1.1 on 2022-09-29 17:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dinopedia', '0002_alter_dinosaur_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dinosaur',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='dinopedia.category'),
        ),
    ]
