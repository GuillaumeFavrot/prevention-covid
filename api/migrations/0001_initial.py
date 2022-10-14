# Generated by Django 4.0.6 on 2022-10-14 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('image', models.CharField(max_length=1000)),
                ('image_description', models.CharField(max_length=1000)),
                ('date', models.DateTimeField(verbose_name='date published')),
                ('abstract', models.CharField(max_length=1000)),
                ('boby', models.CharField(max_length=10000)),
            ],
        ),
    ]