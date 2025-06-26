const questions = [
    {
        question: "WHEN DID VIRAT KHOLI CHANGE HIMSELF TO PRIME IN WHICH YEAR",
        answers: [
            { text: "2018", correct: true },
            { text: "2012", correct: false },
            { text: "2015", correct: false },
            { text: "2014", correct: false },
        ]
    },
    {
        question: "IN WHICH YEAR RONALDO WON 5 UCL CHAMPION TITLES",
        answers: [
            { text: "2018", correct: true },
            { text: "2012", correct: false },
            { text: "2015", correct: false },
            { text: "2014", correct: false },
        ]
    },
    {
        question: "IN WHICH YEAR DHONI WON THE FIFTH TITLE",
        answers: [
            { text: "2021", correct: true },
            { text: "2012", correct: false },
            { text: "2015", correct: false },
            { text: "2014", correct: false },
        ]
    }
];

const questionelement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;

function startquiz() {
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "NEXT";
    nextbutton.style.display = "none"; // Ensure it is hidden at the start
    showquestion();
}

function showquestion() {
    reset();
    let currentquestion = questions[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionelement.innerHTML = questionno + ". " + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer);
    });
}

function reset() {
    nextbutton.style.display = "none";
    while (answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectanswer(e) {
    const btn = e.target;
    const isCorrect = btn.dataset.correct === "true";
    if (isCorrect) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("incorrect");
    }

    Array.from(answerbuttons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true; // Disable all buttons after an answer is selected
    });
    nextbutton.style.display = "block"; // Show "Next" button after selection
}

function showscore() {
    reset();
    questionelement.innerHTML = `YOU SCORED ${score} out of ${questions.length}!`;
    nextbutton.innerHTML = "PLAY AGAIN";
    nextbutton.style.display = "block";
}

function handlenextbutton() {
    currentquestionindex++;
    if (currentquestionindex < questions.length) {
        showquestion();
    } else {
        showscore();
    }
}

nextbutton.addEventListener("click", () => {
    if (currentquestionindex < questions.length) {
        handlenextbutton();
    } else {
        startquiz();
    }
});

startquiz();
