from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    image = models.CharField(max_length=1000)
    image_description = models.CharField(max_length=1000)
    date = models.DateTimeField('date published')
    abstract = models.CharField(max_length=1000)
    body = models.CharField(max_length=10000)

    def __str__(self):
        return self.question_text