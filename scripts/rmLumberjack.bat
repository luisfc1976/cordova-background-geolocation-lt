#!/usr/bin/env node

//this hook removes cocoaLumberJack

// add your plugins to this list--either 
// the identifier, the filesystem location 
// or the URL
//var pluginlist = [
//    "https://github.com/CocoaLumberjack/CocoaLumberjack.git"
//];

//var fs = require('fs');
//var path = require('path');
//var sys = require('sys')
//var exec = require('child_process').exec;

//function puts(error, stdout, stderr) {
//    sys.puts(stdout)
//}

//pluginlist.forEach(function(plug) {
//    exec("cordova plugin rm " + plug, puts);
//});

exec("gem list --local | grep cocoapods )"
