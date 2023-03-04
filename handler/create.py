import os
import json
import datetime
from gcloud import storage
from oauth2client.service_account import ServiceAccountCredentials

# Load the Google Cloud Storage credentials
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

# Connect to the Google Cloud Storage bucket
client = storage.Client(credentials=credentials, project='Homepage')
bucket = client.get_bucket('archive_homepage')

# Read the JSON file from Google Cloud Storage
blob = bucket.blob('data_index.json')
json_data = json.loads(blob.download_as_string().decode('utf-8'))

# Loop through the local archive directory
files = [f for f in os.listdir("archive") if os.path.isfile(os.path.join("archive", f))]
for file in files:
    # Check if the file exists in the JSON data
    found = False
    for obj in json_data["files"]:
        if obj["name"] == file:
            found = True
            break

    # If the file does not exist in the JSON data, add it
    if not found:
        json_data["files"].append({"name": file, "timestamp": str(datetime.datetime.now())})

# Write the updated JSON data back to the Google Cloud Storage bucket
blob.upload_from_string(json.dumps(json_data), 'application/json')
