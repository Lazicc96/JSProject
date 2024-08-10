const QuizzQuestion = [
    {
    question:'Koliko ima godina Pavle ?',
    a: '23',
    b:'32',
    c:'18',
    d:'20',
    correct:'d'
    },
    {
        question:'Ko je predsednik Srbije ?',
        a:'Tomislav Nikolic',
        b: 'Ana Brnabic',
        c: 'Aleksandar lopov Vucic',
        d: 'Vojislav Seselj',
        correct:'c'
    },{
        question:'Koji je najpopularniji programski jezik ?',
        a:'JavaScript',
        b:'Python',
        c:'Java',
        d:'C#',
        correct:'a'
    },{
        question: 'Najpopularnija igrica ?',
        a:'Wow',
        b:'Lol',
        c:'CSGO',
        d:'Fortnite',
        correct:'b'
    }
];

const quiz = document.getElementById('quiz');
const pitanjaInput  = document.querySelectorAll('.pitanja');
let answer = undefined;

const question = document.querySelector('.question');

const errorMsg1= document.querySelector('.error-msg1');
const errorMsg2= document.querySelector('.error-msg2');
const errorMsg3= document.querySelector('.error-msg3');
const errorMsg4= document.querySelector('.error-msg4');

const odgovori = document.querySelectorAll('.answers');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const questionBtn = document.querySelector('.dugme')

let currentQuestion = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
 
    

    const currentQuiz = QuizzQuestion[currentQuestion];
    question.innerHTML = currentQuiz.question;
 
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;

}

const getSelected = () => {

    let answer = undefined;

    odgovori.forEach(odg => {
        if(odg.checked){
            answer = odg.id
            console.log(answer)
        }
    });
    return answer
};

const diSelect = function(){

    odgovori.forEach(odgEl =>{
        odgEl.checked = false;

    })
}

function cekiranje(){
    if (document.querySelectorAll('input[type="radio"]:checked').length === 0){
        alert("Not checked");
        currentQuestion--;
    }else alert("Checked");
}



questionBtn.addEventListener('click',function(){
    //check to see the answer
    // ovo se moze pozvati i bez answers nego se tako nazvao zbog scora funckije
    const answer = getSelected();
    

    // Ovaj kod je samo za score tako da nije toliko ni bitan
    if(answer){
        if(answer === QuizzQuestion[currentQuestion].correct){
            score++;
        }
    }


        // OVde se zove funkcija kada zavrsimo test
        cekiranje()
         currentQuestion++;
         diSelect();
         if(currentQuestion < QuizzQuestion.length){
            loadQuiz()
         }else{
            //Show results
            quiz.innerHTML = `<h2>You answered correctly ${score}/${QuizzQuestion.length}</h2>`
         }
});