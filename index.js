import prompts from "prompts"
import chalk from 'chalk';

const words = ["alert", "alter", "later", "money", "birds"]

// Gets a random word from the words array.
const correctWord = words[Math.floor(Math.random() * words.length)];

/**
 * Returns word typed.
 */
async function inquiry() {
   return (await prompts({
        type: 'text',
        name: 'wordle',
        message: 'What word would you like to input?',
        validate: function(input) {
            if (!words.includes(input)) {
                return "This word is not included!"  
            }

            if (input.length == 5) {
                return true
            }


            if (input.length > 5) {
                return "This word is longer than 5 characters!"
            }

            return "This word is shorter than 5 characters!"
        }
    })).wordle
}

for (let i = 0; i < 6; i++) {
    if (await inquiry() == correctWord) {
        break; // stops for loop
    } else {
        console.log(chalk.redBright("✖ This is not the correct word!"));
    }
}

