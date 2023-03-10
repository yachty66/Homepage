import os
import markdown2
import json
import datetime
from gcloud import storage
from oauth2client.service_account import ServiceAccountCredentials

import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(to_address, subject, body):
    gmail_user = 'maxhager28@gmail.com'
    gmail_password ='sqvsppkatqlvwtsd'

    msg = MIMEMultipart()
    msg['From'] = gmail_user
    msg['To'] = to_address
    msg['Subject'] = subject

    # Set the body of the email to be HTML
    body = f"""
    <html>
        <head>
            <style>
                .container {{
                    width: 565px;
                    margin: 0 auto;
                }}
            </style>
        </head>
        <body>
            <div class="container">
                {body}
            </div>
        </body>
    </html>
    """
    msg.attach(MIMEText(body, 'html'))

    try:
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login(gmail_user, gmail_password)
        server.sendmail(gmail_user, to_address, msg.as_string())
        server.close()

        print(f'Email sent to {to_address}')
    except Exception as e:
        print(f'Something went wrong while sending the email: {e}')


credentials_dict = {
    'type': 'service_account',
    "client_id": "106459278291094610065",
    "client_email": "google-application-credentials@homepage-379410.iam.gserviceaccount.com",   
    "private_key_id": "699afe5cdf4af7c45942c968553f3f6d865ba970",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEmbGRkQcvBhcS\n5ha29+Sb6/33xKRLI5ah/M7FDGtpwHwEe/cWWjukMHT8qK3hQXycLif49DhVxmHc\nAUhJ8LUiI82MoaFd4MQD5zp+uX+uGGuG9QmmD9TK+S9D6kfa5PbuNK1BYh2K1FyX\n0G+Kb6LPUrCwb7WnKxEpiR3nXz6dPmlRg+u3wW01XTHXJEiNLsD04mybgJxUTE8S\noVN6Qmdj/nii/4nQuhKJxp4YSQRI77J8rGpings2u8/El4GjF11iydgny/9UsgYQ\nRoPcdXQ0feSU22xHIw/pyAfZfIEyTwzuZdmfgbH4OJsyVLz0gyjmo7Gb/JtO3XMy\nkesiDF5VAgMBAAECggEAHVm0oL6+C88k8rVW/snTX1PD/pFk1bLichyD4fcQsiEC\nYsj/Al9GOCTj0jR8gPx91fMuFIShRGzxfx7R4/gDkq01qqEWriU4Hj0PBow6+4q5\nwtQiNKB4bDT3UXRQdeVo1/cVRoWXU3qQuDlt7YTtEXaO2khTHjnXvhOyWzBk8KR1\nmZxuGd7dSNewbzYKzTWl8Tj9UA0I+Qx4VlWVvNPJMEdP3qqWEguvRCwuGADuOyXI\n5nJmt0kBabFr4rCPFdkmQuItE1yBsd7QyiUWz/X4W4Nhcbf+VF9WyzC7+EwZ0RYl\nGX3PJFiz06tnnQr7wSwRDWzqz+C7UdVqzPBkTsvxoQKBgQDp4WGd9gdpBmRVPijz\nBISGJFHFdLLoydAE7nR1SdU/vXZ4R9jbKVfi4x9fSMGh+YJwXWjlZXOH90GcVDIT\n7Ny7OR058XcgAn0+/dmaj5W3rKer3P8lnpS3xZGbytIShW4UbOpynzMa7Nu6tH+t\nUIb0+2WUIVO6M+mAVD7A2M8dXwKBgQDXMbP/uW7kX9K7WCHL7LVzXGtum4scQHPh\naEJSTKUYeRht4k71Eu3E5p2OqXU4IUVhnnHajqbU0AtS8GJznVBLm4idphFWrT9i\nJ2m/GDWMxDuc2YYIy11Hv4qXXBzgM3kx3o3OWXthV/6Yrr7aJ6co/sM8wHr0S7Sc\nxpaIthRsywKBgQDlLUf1fG84d937NaT0tVmTBKXoIflqaM9g9bTCda3z/pjHNkgG\nQdXv6vUD7oxnRtKNfsrZ9namJiBxqoNDyRdmkonUDIvZnvbRsff4H3jq+dF3dF/E\nokdCaOPM0IrXQU5jz3JRDTULzktmAZcW4tDL4EhiReIAlPvbFzJC0HDrawKBgAkq\n7OgwFjFUg73He2kcpH5NqaYEqmCBvm4T6v9mlIH+ZrQHuCVosQh6aqvxPDUv9ay6\n+068VQ8r7c+Svh7+zLTr414T/RkcOF8OHsstVNqyYXfFLJijUU4FMvpPyksi5j7h\npFjuJvt2rDoE98yDc/OjJt4ntRVDRGaJb1BTsXsRAoGAWf0GfOegS+2Y61lEXaXl\njF6UzTSvNOmBINtjnt6gvWMNQo04iF45BW/WLzI67pHfUAIjB+2S0TPANreKMski\nJRweJ7l3sndkaWrzIxYkSyyjshqOeSI+hGH0XoGPwzQ5ysOXfr0Thu7mocn69o4r\n5qT9QrFAFExsek7p345o69c=\n-----END PRIVATE KEY-----\n"
    }

'''credentials_dict = {
    'type': 'service_account',
    'client_id': os.environ['BACKUP_CLIENT_ID'],
    'client_email': os.environ['BACKUP_CLIENT_EMAIL'],
    'private_key_id': os.environ['BACKUP_PRIVATE_KEY_ID'],
    'private_key': os.environ['BACKUP_PRIVATE_KEY'].replace('\\n', '\n'),
}'''
credentials = ServiceAccountCredentials.from_json_keyfile_dict(
    credentials_dict
)

client = storage.Client(credentials=credentials, project='Homepage')
bucket = client.get_bucket('archive_homepage')

blob = bucket.blob('data_index.json')
json_data = json.loads(blob.download_as_string().decode('utf-8'))

current_time = datetime.datetime.now()
names = []
for file in json_data['files']:
    timestamp = datetime.datetime.strptime(file['timestamp'], '%Y-%m-%d %H:%M:%S.%f')
    if current_time - timestamp < datetime.timedelta(hours=24):
        names.append(file['name'])

blob = bucket.blob('emails.json')
emails_data = json.loads(blob.download_as_string().decode('utf-8'))

for name in names:
    markdown_blob = bucket.blob(f'archive/{name}')
    markdown_content = markdown_blob.download_as_string().decode('utf-8')
    html_content = markdown2.markdown(markdown_content)
    for i in emails_data.keys():
        to_address = i
        subject = 'Update: ' + name
        body = 'Here is the latest update for you.\n\n'
        send_email(to_address, subject, body + html_content)

