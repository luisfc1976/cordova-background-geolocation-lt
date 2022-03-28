#!/usr/bin/env node

// This hook copies resource files to appropriate platform specific locations
// recommended to be used with the 'after_platform_add' hook
// based off devgirl's original script from her sample hooks.
// http://www.mooreds.com/sample-hooks.tar.gz

// these resource paths need to exist in the root of your Codova project
var configAndroidPath = 'platforms/android/';

// configure all the files to copy from each of the resource paths.
// key of object is the source file, value is the destination location.
// the directory/file structure used closely mirrors how the resources
// are stored in each platform
var androidFilesToCopy = {
  // android icons
  "src/android/BackgroundGeolocationHeadlessTask.java": "app/src/main/java/com/transistorsoft/cordova/bggeo/BackgroundGeolocationHeadlessTask.java",
};

// required node modules
var fs = require('fs');
var path = require('path');
var rootdir = process.argv[2];

// android platform resource path
var platformAndroidPath = 'platforms/android/res/';

// determine platform to copy to
var cmdLine = process.env.CORDOVA_CMDLINE;
if(cmdLine.indexOf('android') > -1) {
  console.log('Android: copy resource files');
  filesToCopy(androidFilesToCopy, 'android');
}

// function that copies resource files to choosen platform
function filesToCopy(obj, platform) {
  var srcFile, destFile, destDir;

  Object.keys(obj).forEach(function(key) {
    if(platform === 'android') {
      srcFile = path.join(rootdir, configAndroidPath, key);
      destFile = path.join(rootdir, platformAndroidPath, obj[key]);
    }
    console.log('copying ' + srcFile + ' to ' + destFile);
    destDir = path.dirname(destFile);
    if (fs.existsSync(srcFile) && fs.existsSync(destDir)) {
      fs.createReadStream(srcFile).pipe(fs.createWriteStream(destFile));
    }
  });
}
