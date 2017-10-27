#!/usr/bin/env node
/**用来生成bussiness.patch文件
 * 使用前提：在ios目录下，存在bundle文件夹。该文件夹下要有common.ios.jsbundle和index.ios.jsbundle两个用来生成patch的文件
 * */

var process = require('child_process');

process.exec('python scripts/patch.py ios/bundle/common.jsbundle ios/bundle/index.ios.jsbundle',function (error, stdout, stderr) {
    if (error !== null) {
        console.log('exec error: ' + error);
    }
    else {
        console.log(stdout);
    }
});

process.execSync('open ios/bundle');


