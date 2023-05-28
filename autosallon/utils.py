from django.conf import settings
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
import os
from email.mime.image import MIMEImage

class Util:
  @staticmethod
  def send_email(data):

    body = render_to_string("email.html", {"link":data['body']})
    email = EmailMessage(
      subject=data['subject'],
      body=body,
      from_email=os.environ.get('EMAIL_FROM'),
      to=[data['to_email']]
    )
    email.content_subtype = 'html'

    imgPath = 'autosallonApp/static/autosallonLogo.png'

    # Sends image to email body
    img_data = open(imgPath, 'rb').read()
    img = MIMEImage(img_data, 'png')
    img.add_header('Content-Id', '<myimage>')  # angle brackets are important
    img.add_header("Content-Disposition", "inline", filename="myimage") # David Hess recommended this edit
    email.attach(img)

    # Sends image as an attachment
    # email.attach_file(imgPath)

    email.send()