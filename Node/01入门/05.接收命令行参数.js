const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`你叫什么名字?`, name => {
    console.log(`你好 ${name}!`)
    readline.close()
})

var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
var favFood = readlineSync.question('What is your favorite food? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');

const inquirer = require('inquirer')

var questions = [
    {
        type: 'input',
        name: 'name',
        message: "你叫什么名字?"
    }
]

inquirer.prompt(questions).then(answers => {
    console.log(`你好 ${answers['name']}!`)
})