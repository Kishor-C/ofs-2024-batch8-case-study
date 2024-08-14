import readline from 'readline-sync';

// readline-sync provides methods like question, questionInt, questionFloat
let text = readline.question('Enter a text: ');
let number = readline.questionInt('Enter a number: ');
let display = readline.question('Display input y/n: ');
if(display.toLowerCase() == 'y') {
    console.log("Text: "+text);
    console.log("Number: "+number);
} 