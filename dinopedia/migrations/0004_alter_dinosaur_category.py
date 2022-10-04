# Generated by Django 4.1.1 on 2022-10-04 22:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dinopedia', '0003_alter_dinosaur_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dinosaur',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='category', to='dinopedia.category'),
        ),
    ]
