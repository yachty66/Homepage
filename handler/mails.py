import os
import json
import datetime
from gcloud import storage
from oauth2client.service_account import ServiceAccountCredentials

credentials_dict = {
    'type': 'service_account',
    'client_id': os.environ['BACKUP_CLIENT_ID'],
    'client_email': os.environ['BACKUP_CLIENT_EMAIL'],
    'private_key_id': os.environ['BACKUP_PRIVATE_KEY_ID'],
    'private_key': os.environ['BACKUP_PRIVATE_KEY'].replace('\\n', '\n'),
}
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

#for number of new posts send to all emails from emails.json the respective post as html like matt format. take the respective post from the folder archive/ and rendder in html



'''files = [f for f in os.listdir("archive") if os.path.isfile(os.path.join("archive", f))]

for file in files:
    found = False
    for obj in json_data["files"]:
        if obj["name"] == file:
            found = True
            break
    if not found:
        json_data["files"].append({"name": file, "timestamp": str(datetime.datetime.now())})
blob.upload_from_string(json.dumps(json_data), 'application/json')'''

