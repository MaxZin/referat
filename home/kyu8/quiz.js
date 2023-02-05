const quizData = [
    {
        question:"Was macht man als erstes bei der Prüfung?",
        a:"Fallschule",
        b:"Würfe",
        c:"Begrüßen",
        d:"Festhalten",
        correct:"c"
    },
    {
        question:"Was macht man danach?",
        a:"Würfe",
        b:"Fallschule",
        c:"Begrüßen",
        d:"Festhalten",
        correct:"b"
    },
    {
        question:"Welche Fallschulen muss man können?",
        a:"Vorwärts und Rückwärts",
        b:"Seitwärts und Rückwärts",
        c:"Vorwärts und Seitwärts",
        d:"Vorwärts, Rückwärts und Seitwärts",
        correct:"d"
    },
    {
        question:"Was macht man als drittes in der Prüfung?",
        a:"Würfe aus der Bewegung",
        b:"Randori",
        c:"Festhalten",
        d:"Würfe",
        correct:"d"
    },
    {
        question:"Welche Würfe muss man können?",
        a:"O-goshi und O-soto-otoshi",
        b:"Mune-gatame und Kuzure-kesa-gatame",
        c:"Osoto-gari und Harai-goshi",
        d:"Kata-gatame und Kesa-gatame",
        correct:"a"
    },
    {
        question:"Was kommt danach?",
        a:"Randori",
        b:"Würfe aus der Bewegung",
        c:"Festhalten",
        d:"Verabschieden",
        correct:"c"
    },
    {
        question:"Welche Festhalten musst du können?",
        a:"O-goshi und O-soto-otoshi",
        b:"Mune-gatame und Kuzure-kesa-gatame",
        c:"Osoto-gari und Harai-goshi",
        d:"Kata-gatame und Kesa-gatame",
        correct:"b"
    },
    {
        question:"Was kommt als fünftes?",
        a:"Verabschieden",
        b:"Würfe mit Festhalte",
        c:"Würfe aus der Bewegung",
        d:"Randori",
        correct:"c"
    },
    {
        question:"Was ist das sechste das du machst?",
        a:"Boden Randori",
        b:"Verabschieden",
        c:"Randori",
        d:"Würfe mit Festhalte",
        correct:"d"
    },
    {
        question:"Was machst du jetzt?",
        a:"Verabschieden",
        b:"Randori",
        c:"Fallschule",
        d:"Boden Randori",
        correct:"a"
    },
    {
        question:"Was kommt als letztes?",
        a:"Randori",
        b:"Boden Randori",
        c:"Verabschieden",
        d:"Würfe",
        correct:"b"
    },
    {
        question:"Aus welchem Land kommt Judo?",
        a:"China",
        b:"Korea",
        c:"Japan",
        d:"Deutschland",
        correct:"c"
    },
    {
        question:"Wer hat Judo erfunden?",
        a:"Kano",
        b:"Samura",
        c:"Kookan",
        d:"Kaichiro",
        correct:"a"
    },
    {
        question:"In welchen Jahr worde Judo erfunden?",
        a:"1900",
        b:"1882",
        c:"1750",
        d:"1956",
        correct:"b"
    },
    {
        question:"Wie hieß die erste Judoschule?",
        a:"Kodokan",
        b:"Samura",
        c:"Kaichiro",
        d:"Kano",
        correct:"a"
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