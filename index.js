import prompts from "prompts"

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

for(let i = 0; i < 6; i++) {
    console.log(await inquiry())
}
var correctword = ["alert", "alter", "later", "money"]
