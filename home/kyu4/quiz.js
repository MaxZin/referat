const quizData = [
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
    {
        question:"?",
        a:"",
        b:"",
        c:"",
        d:"",
        correct:""
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer') 
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitbtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEls => {
        if(answerEls.checked) {
            answer = answerEls.id
        }
    })
    return answer
}

submitbtn.addEventListener('click', ()=> {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2 style="color: white">Du hast ${score}/${quizData.length} Fragen richtig beantwortet.</h2><button onclick="location.reload()">Neuer Versuch</button><a href="../home.php" style="text-decorations: none"><button>Zurück zur Übersicht</button></a>`;
        }
    }
})