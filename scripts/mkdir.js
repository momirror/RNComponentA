#!/usr/bin/env node

var process = require('child_process');

process.exec('if [ ! -d "ios/bundle" ]; then\n' +
    ' mkdir ios/bundle\n' +
    'fi',function (error, stdout, stderr) {
    if (error !== null) {
        console.log('exec error: ' + error);
    }
    else {
        console.log(stdout);
    }
});
