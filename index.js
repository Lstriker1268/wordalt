import prompts from "prompts"
const words = ["alert", "alter", "later", "money"]

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
        break;
    }
}

