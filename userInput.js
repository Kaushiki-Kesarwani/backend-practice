const readline = require('readline');

const rl = readline.createInterface({
input:process.stdin,
output:process.stdout,
});

rl.question("What is your name?",name=>{
    console.log(`My name is ${name}.`)
    rl.question("What course are you studying?",course=>{
        console.log(` ${course} (Bachelor's of computer applications).`)
        rl.question("How old are you?",age=>{
            console.log(`I am ${age} years.`)
            rl.question("What are the skills do you have?",skills=>{
                console.log(` I am good in these skills ${skills}.`)
                rl.question("Which is your strongest coding language?",code=>{
                    console.log(`${code}.`)
                    rl.close();
                })
            })
        })
    })
})