import prompts from "prompts"

const response = await prompts({
    type: 'text',
    name: 'wordle',
    message: 'What word would you like to input?',
    validate: function(input) {
        let length = input.length
        if (input.length == 5) {
            return true
        }

        if (input.length > 5) {
            return "This word is longer than 5 characters!"
        }
        
        return "This word is shorter than 5 characters!"
    }
});

console.log(response.wordle)