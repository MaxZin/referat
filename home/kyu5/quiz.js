const quizData = [
    {
        question:"Welche Fallschulen musst du zeigen?",
        a:"Vorwärts, rückwärts und seitwärts(beidseitig)",
        b:"Vorwärts(beidseitig), rückwärts und Seitwärts",
        c:"Vorwärts(beidseitig), rückwärts mit Hindernis und Seitwärts",
        d:"Vorwärts(beidseitig) mit Hindernis, rückwärts und Seitwärts(beidseitig)",
        correct:"d"
    },
    {
        question:"Was ist der erste Wurf?",
        a:"Sasae-tsuri-kumi-ashi oder Hiza-guruma",
        b:"Morote-seoi-nage",
        c:"Okuri-ashi-barai",
        d:"Harai-goshi",
        correct:"b"
    },
    {
        question:"Was ist der zweite Wurf?",
        a:"Harai-goshi",
        b:"Okuri-ashi-barai",
        c:"Sasae-tsuri-kumi-ashi oder Hiza-guruma",
        d:"Harai-goshi",
        correct:"c"
    },
    {
        question:"Was ist der dritte Wurf?",
        a:"Okuri-ashi-barai",
        b:"Morote-seoi-nage",
        c:"Osoto-gari",
        d:"Harai-goshi",
        correct:"a"
    },
    {
        question:"Was ist der vierte Wurf?",
        a:"Sasae-tsuri-kumi-ashi oder Hiza-guruma",
        b:"Harai-goshi",
        c:"Morote-seoi-nage",
        d:"Osoto-gari",
        correct:"d"
    },
    {
        question:"Was ist der fünfte Wurf?",
        a:"Osoto-gari",
        b:"Harai-goshi",
        c:"Tsuri-goshi",
        d:"Morote-seoi-nage",
        correct:"b"
    },
    {
        question:"Was ist die erste Boden Technik?",
        a:"Waki-gatame",
        b:"Ashi-garami",
        c:"Ude-garami",
        d:"Juji-gatame",
        correct:"d"
    },
    {
        question:"Was ist die zweite Boden Technik?",
        a:"Juji-gatame",
        b:"Waki-gatame",
        c:"Ude-garami",
        d:"Ashi-garami",
        correct:"c"
    },
    {
        question:"Was machst du in der Anwendung Stand als erstes?",
        a:"Konrter nach Angriff von Uke",
        b:"Kombination nach Angriff von Tori",
        c:"Konrter nach Angriff von Tori",
        d:"Kombination nach Angriff von Uke",
        correct:"a"
    },
    {
        question:"Was machst du in der Anwendung Stand als zweites?",
        a:"Kombination nach Angriff von Uke",
        b:"Kombination nach Angriff von Tori",
        c:"Konrter nach Angriff von Tori",
        d:"Konrter nach Angriff von Uke",
        correct:"b"
    },
    {
        question:"Was machst du in der Anwendung Boden als erstes?",
        a:"Juji-gatame aus der Bankstellung von Uke",
        b:"Wechsel von Festhalte zu Hebel oder Schlüssel",
        c:"Befreiung aus der Beinklammer von Uke",
        d:"Beinklammer als Verteidigung aus der Rückenlage",
        correct:"b"
    },
    {
        question:"Was machst du in der Anwendung Boden als zweites?",
        a:"Juji-gatame aus der Bankstellung von Uke",
        b:"Wechsel von Festhalte zu Hebel oder Schlüssel",
        c:"Befreiung aus der Beinklammer von Uke",
        d:"Beinklammer als Verteidigung aus der Rückenlage",
        correct:"d"
    },
    {
        question:"Was machst du in der Anwendung Boden als drittes?",
        a:"Juji-gatame aus der Bankstellung von Uke",
        b:"Wechsel von Festhalte zu Hebel oder Schlüssel",
        c:"Befreiung aus der Beinklammer von Uke",
        d:"Beinklammer als Verteidigung aus der Rückenlage",
        correct:"c"
    },
    {
        question:"Was machst du in der Anwendung Boden als viertes?",
        a:"Juji-gatame aus der Bankstellung von Uke",
        b:"Wechsel von Festhalte zu Hebel oder Schlüssel",
        c:"Befreiung aus der Beinklammer von Uke",
        d:"Beinklammer als Verteidigung aus der Rückenlage",
        correct:"b"
    },
    {
        question:"Was ist Tsukuri?",
        a:"Anriss",
        b:"Niederwurf",
        c:"Platzwechsel",
        d:"Laufen",
        correct:"c"
    },
    {
        question:"Was ist Kuzushi?",
        a:"Anriss",
        b:"Niederwurf",
        c:"Platzwechsel",
        d:"Laufen",
        correct:"a"
    },
    {
        question:"Was ist Kake?",
        a:"Anriss",
        b:"Niederwurf",
        c:"Platzwechsel",
        d:"Laufen",
        correct:"b"
    },
    {
        question:"Was sind Ashi-waza?",
        a:"Fußtechniken",
        b:"Hüfttechniken",
        c:"Hand- und Schultertechniken",
        d:"Opfertechniken in die Rückenlage",
        correct:"a"
    },
    {
        question:"Was sind Te-und Kata-waza?",
        a:"Opfertechniken in die Seitenlage",
        b:"Hüfttechniken",
        c:"Hand- und Schultertechniken",
        d:"Opfertechniken in die Rückenlage",
        correct:"c"
    },
    {
        question:"Was sind Koshi-waza?",
        a:"Opfertechniken in die Seitenlage",
        b:"Hüfttechniken",
        c:"Hand- und Schultertechniken",
        d:"Opfertechniken in die Rückenlage",
        correct:"b"
    },
    {
        question:"Was sind Ma-sutemi-waza?",
        a:"Opfertechniken in die Seitenlage",
        b:"Hüfttechniken",
        c:"Hand- und Schultertechniken",
        d:"Opfertechniken in die Rückenlage",
        correct:"d"
    },
    {
        question:"Was sind Yoko-sutemi-waza?",
        a:"Opfertechniken in die Seitenlage",
        b:"Hüfttechniken",
        c:"Hand- und Schultertechniken",
        d:"Opfertechniken in die Rückenlage",
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