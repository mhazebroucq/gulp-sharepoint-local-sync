v1.2  - Maxime  
Fork from https://github.com/jeffangama/gulpsynchLocalToRemote  
   
# Objective : 
Work on SharePoint 2013 files in VSCode.  
Using gulp task you can download, upload and watch files.  

You can clone this repo or integrate the synch tools by getting the installation files in InstallationFiles folder.  
You can install in into an existing project bu using procedure below.

# Contents
* [Installation](#Installation (if you want to install it in your existing project))
* [Usage](#Usage)


# Installation 

If you clone the repo, do not follow the below procedure :

## Step 0
Create a folder to store your solution.

## Step 1
Install gulp-sharepoint-local-sync npm package
```javascript
npm i gulp-sharepoint-local-sync
```

## Step 2
Open et update config.js file.  
This file allow you to define many profiles and select the one you want to activate by exporting the wanted config name.
```javascript
module.exports = {
    dev: {        
        "site": "http://test-site-url", // full ulr of the SharePoint on-premises site
        "skipInstall": false,
        "verbose": "false",
        "config":"Dev",
        "remoteFoldersToGet":["SiteAssets","_catalogs/masterpage"],// folders for which you want to retrieve content in the populate task
        "location":"src"// location where files will be downloaded, uploaded and watched
    },
    preprod: {        
        "site": "http://preprod-site-url", // full ulr of the SharePoint on-premises site
        "skipInstall": false,
        "verbose": "false",
        "config":"Preprod",
        "remoteFoldersToGet":["SiteAssets","_catalogs/masterpage"],// folders for which you want to retrieve content in the populate task
        "location":"src"// location where files will be downloaded, uploaded and watched
    },
    prod: {        
        "site": "http://prod-site-url", // full ulr of the SharePoint on-premises site
        "skipInstall": false,
        "verbose": "false",
        "config":"Prod",
        "remoteFoldersToGet":["SiteAssets","_catalogs/masterpage"],  // folders for which you want to retrieve content in the populate task
        "location":"src" // location where files will be downloaded, uploaded and watched
    }
}.dev;
```

## Step 2
Create a creds.js file in the parent folder.  
This file is outside of the solution folder to avoid to upload it to git.

```javascript
module.exports = {
    dev: {        
    "username": "user@domain.com",
    "password": "password"
    }
}.dev;
```

# Usage

* A) Push the files to SharePoint immediately. It will need a confirm and then it will create the folder by it self.  
Only the updated files since last push will be pushed. If it is the first push, all files will be pushed.  
```bash
gulp 
```
* B) Watch changes and push immediately each file you update
```bash
gulp watch
* C) Publish all files to SharePoint regardless of the modification dates
```bash
gulp publish-all
```    
* D) If you want to retrieve all items from the folders defined in "remoteFoldersToGet" :
```bash
gulp populate
```
