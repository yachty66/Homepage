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

files = [f for f in os.listdir("archive") if os.path.isfile(os.path.join("archive", f))]

for file in files:
    found = False
    for obj in json_data["files"]:
        if obj["name"] == file:
            found = True
            break
    if not found:
        json_data["files"].append({"name": file, "timestamp": str(datetime.datetime.now())})
blob.upload_from_string(json.dumps(json_data), 'application/json')

