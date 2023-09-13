// TODO Sanitation, duplicates, and errors.
let groceryList = [];

const { stdin } = require('process');
// Import the readline module for handling user input in the console
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout, // Write to standard output (console)
});

rl.once('close', () => {
  // end of input
});

function getItemFromUser() {
  return { item, quantity, price, bought };
}

async function main() {
  rl.question(
    `Here are the options
  1. Add 
  2. Delete
  3. Set Item to bought
  4. Display Grocery List
  5. Exit
  `,
    (res) => {
      switch (res) {
        case '1':
          break;
        case '2':
          break;
        case '3':
          break;
        case '4':
          break;
        case '5':
          rl.close();
      }
    }
  );

  rl.close();
}

console.log('Welcome to grocery shopping tracker!');
main();
