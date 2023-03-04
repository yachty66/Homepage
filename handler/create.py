import requests
import json
import os
import datetime

# Replace <BUCKET_NAME> and <OBJECT_NAME> with the name of your bucket and the name of the JSON file
url = "https://www.googleapis.com/storage/v1/b/archive_homepage/o/data.json?alt=media"

# Send the request to retrieve the JSON file
response = requests.get(url)

# Load the JSON data from the response
data = response.json()

# Get a list of files in the archive folder
files = [f for f in os.listdir("archive") if os.path.isfile(os.path.join("archive", f))]

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

# Write the updated JSON data back to the Google Cloud Storage bucket
response = requests.put(url, json=data)
response.raise_for_status()