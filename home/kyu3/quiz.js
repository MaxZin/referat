const quizData = [
    {
        question:"Was ist der erste Wurf?",
        a:"Tani-otoshi",
        b:"Sumi-gaeshi",
        c:"Koshi-guruma",
        d:"Ushiro-goshi",
        correct:"c"
    },
    {
        question:"Was ist der zweite Wurf?",
        a:"Tani-otoshi",
        b:"Sumi-gaeshi",
        c:"Koshi-guruma",
        d:"Ushiro-goshi",
        correct:"d"
    },
    {
        question:"Was ist der dritte Wurf?",
        a:"Tani-otoshi",
        b:"Sumi-gaeshi",
        c:"Koshi-guruma",
        d:"Hane-goshi",
        correct:"d"
    },
    {
        question:"Was ist der vierte Wurf?",
        a:"Tani-otoshi",
        b:"Sumi-gaeshi",
        c:"Koshi-guruma",
        d:"Hane-goshi",
        correct:"b"
    },
    {
        question:"Was ist der fünfte Wurf?",
        a:"Tani-otoshi",
        b:"Sumi-gaeshi",
        c:"Koshi-guruma",
        d:"Hane-goshi",
        correct:"a"
    },
    {
        question:"Was ist die erste Boden Technik?",
        a:"Ashi-gatame",
        b:"Ashi-jime",
        c:"Ashi-garami",
        d:"Ashi-waza",
        correct:"a"
    },
    {
        question:"Was ist die zweite Boden Technik?",
        a:"Ashi-gatame",
        b:"Ashi-jime",
        c:"Ashi-garami",
        d:"Ashi-waza",
        correct:"c"
    },
    {
        question:"Was machst du in der Anwendung Stand als erstes?",
        a:"Zwei frei Wählbare Konter wenn Uke angreift",
        b:"Die fünf wurftechiken aus dem Stand",
        c:"Die fünf wurftechiken aus sinnvollen Situationen",
        d:"Zwei frei Wählbare Kombinationen wenn Uke blockt",
        correct:"c"
    },
    {
        question:"Was machst du in der Anwendung Stand als zweites?",
        a:"Zwei frei Wählbare Konter wenn Uke angreift",
        b:"Die fünf wurftechiken aus dem Stand",
        c:"Die fünf wurftechiken aus sinnvollen Situationen",
        d:"Zwei frei Wählbare Kombinationen wenn Uke blockt",
        correct:"d"
    },
    {
        question:"Was machst du in der Anwendung Boden als erstes?",
        a:"zwei unterschiedliche Techniken im Übergang Stand-Boden nach Ukes missglückten Angriff",
        b:"zwei unterschiedliche Techniken im Übergang Stand-Boden nach Toris teilweise erfolgreichen Angriff",
        c:"Die beiden Boden Techniken aus sinnvollen Situationen",
        d:"Die beiden Boden Techniken im Übergang Stand-Boden",
        correct:"a"
    },
    {
        question:"Was machst du in der Anwendung Boden als zweites?",
        a:"zwei unterschiedliche Techniken im Übergang Stand-Boden nach Ukes missglückten Angriff",
        b:"zwei unterschiedliche Techniken im Übergang Stand-Boden nach Toris teilweise erfolgreichen Angriff",
        c:"Die beiden Boden Techniken aus sinnvollen Situationen",
        d:"Die beiden Boden Techniken im Übergang Stand-Boden",
        correct:"b"
    },
    {
        question:"Es muss eine Kata vorgezeigt werden. Welcher Wurfgruppe gehört diese an?",
        a:"Ashi-waza",
        b:"Koshi-waza",
        c:"Te- und Kata-waza",
        d:"Ma-sutemi-waza",
        correct:"b"
    },
    {
        question:"Was ist der erste Wurf?",
        a:"O-goshi",
        b:"Uki-goshi",
        c:"Tsuri-komi-goshi",
        d:"Hane-goshi",
        correct:"b"
    },
    {
        question:"Was ist der zweite Wurf?",
        a:"O-goshi",
        b:"Uki-goshi",
        c:"Tsuri-komi-goshi",
        d:"Hane-goshi",
        correct:"d"
    },
    {
        question:"Was ist der dritte Wurf?",
        a:"O-goshi",
        b:"Uki-goshi",
        c:"Tsuri-komi-goshi",
        d:"Hane-goshi",
        correct:"c"
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