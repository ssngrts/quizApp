const questions = [
    {
        question: "Aspirinin ilk kez çıkış yılı nedir?",
        answer: [
            {text: "1899", correct: true},
            {text: "1875", correct: false},
            {text: "1869", correct: false},
            {text: "1890", correct: false},
        ]
    },
    {
        question: "Futbol maçlarında oynanan topun FİFA kurallarına göre ağırlığı ne kadar olmalıdır?",
        answer: [
            {text: "450", correct: false},
            {text: "451", correct: false},
            {text: "452", correct: true},
            {text: "453", correct: false},

        ]
    },
    {
        question: "Türk milli futbol takımının ilk golünü kim atmıştır?",
        answer: [
            {text: "Yavuz İsmet Uluğ", correct: false},
            {text: "Alpaslan Eratlı", correct: false},
            {text: "İsmail Arca", correct: false},
            {text: "Zeki Rıza Sporel", correct: true},

        ]
    },
    {
        question: "Dünya kupasında en fazla şampiyonluk yaşayan futbolcu kimdir?",
        answer: [
            {text: "Pele", correct: true},
            {text: "Maradona", correct: false},
            {text: "Johan Cruyff", correct: false},
            {text: "Michel Platini", correct: false},

        ]   
    },
    {
        question: "Aktif olarak en çok kazanan sporcu kimdir?",
        answer: [
            {text: "Lebron James", correct: false},
            {text: "Cristiano Ronaldo", correct: true},
            {text: "Lionel Messi", correct: false},
            {text: "Kylian Mbappé", correct: false},

        ]   
    },
    {
        question: "Mustafa Kemal Atatürk'ün nüfusa kayıtlı olduğu il hangisidir",
        answer: [
            {text: "Bursa", correct: false},
            {text: "Ankara", correct: false},
            {text: "İstanbul", correct: false},
            {text: "Gaziantep", correct: true},
        ]   
    },
    {
        question: "Hangi ülkenin iki tane başkenti vardır?",
        answer: [
            {text: "Güney Afrika", correct: true},
            {text: "Senegal", correct: false},
            {text: "El Salvador", correct: false},
            {text: "Kamboçya", correct: false},
        ]   
    },
    {
        question: "Aşşağıdaki ülkelerden hangisinin nüfusu daha fazladır?",
        answer: [
            {text: "İspanya", correct: false},
            {text: "Fransa", correct: false},
            {text: "Türkiye", correct: false},
            {text: "Almanya", correct: true},
        ]   
    },
    {
        question: " Hangisi bir Orta Doğu başkenti değildir?",
        answer: [
            {text: "Cidde", correct: true},
            {text: "Manama", correct: false},
            {text: "San'a", correct: false},
            {text: "Lefkoşa", correct: false},
        ]   
    },
    {
        question: "Türkiye'nin en az ilçeye sahip ili hangisidir?",
        answer: [
            {text: "Bartın", correct: false},
            {text: "Iğdır", correct: false},
            {text: "Bayburt", correct: true},
            {text: "Kilis", correct: false},
        ]   
    }
]

const question= document.getElementById("question");
const answerBtn= document.getElementById("answer-btns");
const nextBtn= document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score= 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    nextBtn.innerHTML= "İleri";
    showQuestion()
}

function showQuestion() {
    resetPrev();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNumber= currentQuestionIndex + 1;
    question.innerHTML= questionNumber + "." + currentQuestion.question

    currentQuestion.answer.forEach(answer=>{
        const button= document.createElement("button");
        button.innerHTML= answer.text
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetPrev(){
    nextBtn.style.display= "none"
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect= selectedBtn.dataset.correct==="true"
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("false");
    }
    Array.from(answerBtn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled= true;
    });

    nextBtn.style.display= "block"
}

function showScore(){
    resetPrev();
    question.innerHTML= ` Yanıtladığın sorulardan ${score} tanesi doğru!`
    nextBtn.innerHTML= "Tekrar Oyna"
    nextBtn.style.display= "block"
}

function showNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", () =>{
    if(currentQuestionIndex<questions.length){
        showNextButton()
    }else{
        startQuiz();
    }
})

startQuiz()