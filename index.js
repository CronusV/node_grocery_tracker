let groceryList = {};

// Import the readline module for handling user input in the console
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout, // Write to standard output (console)
});

// rl.on('line', (line) => {
//   console.log(line);
//   console.log('test');
// });

rl.once('close', () => {
  // end of input
});

// rl.on('pause', () => {
//   console.log('This is paused');
// });

function main() {
  let userInput = 'Yes';

  console.log('would you like to add to grocery list? Type Yes or No');
  rl.on('line', (stdin) => {
    if (stdin === 'No') {
      rl.close();
    } else if (stdin === 'Yes') {
      // Go to another function

      // Here should ask if they want to add to grocery list
      console.log('would you like to add to grocery list? Type Yes or No');
    } else {
      console.log('Invalid input, please try again');
      console.log('would you like to add to grocery list? Type Yes or No');
    }
  });
}

main();
rl.close();
