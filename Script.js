const quizDate=[
    {
        question: 'How old is sonu?',
        a: '10',
        b: '17',
        c: '26',
        d: '100',
        correct: 'c'
    },
    {
        question: 'What is the most programing language in 2021?',
        a: 'java',
        b: 'c',
        c: 'Pythan',
        d: 'javaScript',
        correct: 'd'
    },
    {
        question: "Who is he President of US?",
        a: 'Florin pop',
        b: 'Donal Trump',
        c: 'Ivan salano',
        d: 'Mijai Andri',
        correct: 'b'
    },
    {
        question: 'What does stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascadiing Style Sheet',
        c: 'Jason object Notation',
        d: 'Helicopters terinnals Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was javaScript',
        a: '1996',
        b: '2019',
        c: '2018',
        d: 'None of the above',
        correct: 'a'
    },
];
const answerEls=document.querySelectorAll(".answer");
const quiz=document.getElementById("quiz");
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit")
let currectQuiz=0;
let score=0;
let answer=undefined;
loadQuiz();
function loadQuiz()
{
    deselectAnswer();
    const currectQuizData=quizDate[currectQuiz];
    questionEl.innerText=currectQuizData.question;
    a_text.innerText=currectQuizData.a;
    b_text.innerText=currectQuizData.b;
    c_text.innerText=currectQuizData.c;
    d_text.innerText=currectQuizData.d;
}
function getSelected()
{
    let answer=undefined;
    answerEls.forEach((answerEl)=>
    {
        if(answerEl.checked)
        {
            answer=answerEl.id;
        }
    });
    return answer;
}
function deselectAnswer()
{
    answerEls.forEach((answerEl)=>
    {
         answerEl.checked=false;
    });
}
submitBtn.addEventListener("click",()=>{
    const answer= getSelected();
    console.log(answer);
    if(answer===quizDate[currectQuiz].currect)
    {
        score++;
    }
    if(answer){
        currectQuiz++;
    if(currectQuiz<quizDate.length)
    {
        loadQuiz();
    }
    else
    {
         quiz.innerHTML='<h2>You answered correctly at ${score}/${quizdate.length} question.</h2><button onclick="location.reload()">Reload</button>';
    }
}
})