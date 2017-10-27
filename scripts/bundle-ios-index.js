#!/usr/bin/env node

var process = require('child_process');

//如果没有bundle文件夹，先创建
process.exec('if [ ! -d "ios/bundle" ]; then\n' +
    ' mkdir ios/bundle\n' +
    'fi', function (error, stdout, stderr) {
    if (error !== null) {
        console.log('exec error: ' + error);
    }
    else {
        console.log(stdout);
    }
});

process.exec('node node_modules/react-native/local-cli/cli.js bundle ' +
    '--entry-file index.js  --platform ios --dev false --bundle-output ./ios/bundle/index.ios.jsbundle ' +
    '--assets-dest ./ios/bundle', function (error, stdout, stderr) {
    if (error !== null) {
        console.log('exec error: ' + error);
    }
    else {
        console.log(stdout);
    }
});