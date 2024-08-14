// we need to load the os module
// let os = require("os");
import os from 'os';
console.log("-- Most of the JS Frameworks display OS details ---")
console.log("Platform: "+os.platform());
console.log("Architecture: "+os.arch());
console.log("Version: "+os.version());
// these modules are mostly used by node technologies like ojet, angular-cli, react toolkit
