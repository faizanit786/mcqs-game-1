import inquirer from "inquirer";
const questions = [
    {
        question: 'What is the capital of palistan ?',
        choices: ['Islamabad', 'Karachi', 'Berlin', 'kpk'],
        answerIndex: 0,
    },
    {
        question: 'Which planet is known as the Red Planet?',
        choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        answerIndex: 1,
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        choices: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
        answerIndex: 0,
    },
];
let score = 0;
async function startGame() {
    for (const question of questions) {
        const answer = await inquirer.prompt({
            type: 'list',
            name: 'answer',
            message: question.question,
            choices: question.choices,
        });
        if (answer.answer === question.choices[question.answerIndex]) {
            console.log('Correct!');
            score++;
        }
        else {
            console.log('Incorrect!');
        }
    }
    console.log(`Game over! Your score is ${score}/${questions.length}`);
}
startGame();
