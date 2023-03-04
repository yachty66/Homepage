import requests
import os
import json
import datetime

# Replace <BUCKET_NAME> and <OBJECT_NAME> with the name of your bucket and the name of the JSON file
url = "https://www.googleapis.com/storage/v1/b/archive_homepage/o/data.json?alt=media"

# Send the request to retrieve the JSON file
response = requests.get(url)

data = response.json()

# Get a list of files in the repository
files = [f for f in os.listdir() if os.path.isfile(f)]

# Loop through the list of files
for file in files:
    # Check if the file exists in the JSON data
    found = False
    for obj in data["files"]:
        if obj["name"] == file:
            found = True
            break

    # If the file does not exist in the JSON data, add it
    if not found:
        data["files"].append({"name": file, "timestamp": str(datetime.datetime.now())})

# Replace the contents of the JSON file in the Google Cloud Storage bucket
headers = {'Content-Type': 'application/json'}
requests.put(url, headers=headers, data=json.dumps(data))
