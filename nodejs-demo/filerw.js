// importing the fs & realine-sync module
import fs from 'fs';
import readline from 'readline-sync';
let text = readline.question("Enter some text: ");
// writing the text to the file without append mode
fs.writeFileSync("demo.txt", text+"\n", {flag:"a+"});
console.log("Done file writing...");
// readFileSync returns buffer data that must be converted to JSON
let fileData = fs.readFileSync('demo.txt');
console.log('.... content of file .....');
console.log(fileData.toString());