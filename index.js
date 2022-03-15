import prompts from "prompts"

const response = await prompts({
    type: 'text',
    name: 'wordle',
    message: 'What word would you like to input?'
});

console.log(response.wordle)