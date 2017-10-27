#!/usr/bin/env node

var process = require('child_process');

process.execSync('node scripts/bundle-ios-index');

process.execSync('node scripts/bundle-ios-common');

process.execSync('node scripts/patch-ios');

process.execSync('open ios/bundle');
