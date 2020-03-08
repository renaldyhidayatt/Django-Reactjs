from django.db import models

class Notes(models.Model):
    PRIA = 'pria'
    PEREMPUAN = 'perempuan'
    GENDER_CHOICES = (
        (PRIA, 'Pria'),
        (PEREMPUAN, 'Perempuan')
    )
    title = models.CharField(max_length=255, null=False)
    description = models.CharField(max_length=255, null=False)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, default=PRIA)
    price = models.CharField(max_length=5, null=False)
    is_draft = models.BooleanField(default=True)

    def __str__(self):
        return "{} - {} - {}".format(self.title, self.description, self.price)
