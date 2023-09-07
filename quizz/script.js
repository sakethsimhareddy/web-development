let start = document.querySelector(".startbtn");
let startArea =document.getElementById('start')
let main = document.querySelector(".main");
let next =document.querySelector('#nextBtn')
let correctAns='';
let count=0;
let points=0;
let noOfQuestion= document.getElementById('noOf');
let point= document.getElementById('points');
let buttons =document.querySelectorAll(".btn");
let temp;
let qno=[]
let list = [
  {
    question: "Grand Central Terminal, Park Avenue, New York is the world",
    option: {
      o1: "largest railway station",
      o2: "highest railway station",
      o3: "longest railway station",
      o4: "None of the above",
    },
    corret: "largest railway station",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    option: {
      o1: "China",
      o2: "Japan",
      o3: "Thailand",
      o4: "South Korea",
    },
    correct: "Japan",
  },
  {
    question: "What is the chemical symbol for the element oxygen?",
    option: {
      o1: "O",
      o2: "C",
      o3: "H",
      o4: "N",
    },
    correct: "O",
  },
  {
    question: "Which is the largest ocean on Earth?",
    option: {
      o1: "Atlantic Ocean",
      o2: "Indian Ocean",
      o3: "Arctic Ocean",
      o4: "Pacific Ocean",
    },
    correct: "Pacific Ocean",
  },
  {
    question: 'Who wrote the novel "Pride and Prejudice"?',
    option: {
      o1: "Jane Austen",
      o2: "Emily Brontë",
      o3: "Virginia Woolf",
      o4: "Charlotte Brontë",
    },
    correct: "Jane Austen",
  },
  {
    question: "Which is the highest mountain in the world?",
    option: {
      o1: "Mount Kilimanjaro",
      o2: "Mount Everest",
      o3: "Mount Fuji",
      o4: "Mount McKinley",
    },
    correct: "Mount Everest",
  },{
    question: 'Entomology is the science that studies',
    option: {
      o1: 'Behavior of human beings',
      o2: 'Insects',
      o3: 'The origin and history of technical and scientific terms',
      o4: 'The formation of rocks'
    },
    correct: 'Insects'
  },
  {
    question: 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
    option: {
      o1: 'Asia',
      o2: 'Africa',
      o3: 'Europe',
      o4: 'Australia'
    },
    correct: 'Africa'
  },
  {
    question: 'Garampani sanctuary is located at',
    option: {
      o1: 'Junagarh, Gujarat',
      o2: 'Diphu, Assam',
      o3: 'Kohima, Nagaland',
      o4: 'Gangtok, Sikkim'
    },
    correct: 'Diphu, Assam'
  },
  {
    question: 'For which of the following disciplines is Nobel Prize awarded?',
    option: {
      o1: 'Physics and Chemistry',
      o2: 'Physiology or Medicine',
      o3: 'Literature, Peace and Economics',
      o4: 'All of the above'
    },
    correct: 'All of the above'
  },
  {
    question: 'The main objectives of the UN are',
    option: {
      o1: 'to maintain peace and security in the world',
      o2: 'to work together to remove poverty, disease and illiteracy and encourage respect for each other\'s rights of basic freedom.',
      o3: 'to develop friendly relations among nations',
      o4: 'All of the above'
    },
    correct: 'All of the above'
  },
  {
    question: 'The headquarter of ESCAP (Economic and Social Commission for Asia) are situated at',
    option: {
      o1: 'Bangkok',
      o2: 'Geneva',
      o3: 'Santiago (Chile)',
      o4: 'Baghdad'
    },
    correct: 'Bangkok'
  },
  {
    question: 'The industrial organization of Atomic Minerals Division, Heavy Water Board (HWB) is located at',
    option: {
      o1: 'Mumbai',
      o2: 'Kolkata',
      o3: 'Hyderabad',
      o4: 'Jadugude, Bihar'
    },
    correct: 'Hyderabad'
  },
  {
    question: 'The Indian Air Force celebrated its Golden Jubilee in',
    option: {
      o1: '1962',
      o2: '1972',
      o3: '1982',
      o4: '1992'
    },
    correct: '1982'
  },
  {
    question: 'The headquarter of OAU (Organization of African Unity) are at',
    option: {
      o1: 'Addis Ababa, Ethiopia',
      o2: 'Washington DC',
      o3: 'Paris',
      o4: 'Jakarta, Indonesia'
    },
    correct: 'Addis Ababa, Ethiopia'
  },
  {
    question: 'Which countries from the membership of CACM (Central American Common Market)?',
    option: {
      o1: 'Costa Rica, EI Salvador, Guatemala, Honduras, Nicaragua',
      o2: 'Bogota, EI Salvedor, Honduras',
      o3: 'Washington DC, Bogota, Guatemala',
      o4: 'All of the above'
    },
    correct: 'Costa Rica, EI Salvador, Guatemala, Honduras, Nicaragua'
  },
  {
    question: 'Which company manufacturers low and high power communication equipment like radius for the use of defence services and paramilitary organisations?',
    option: {
      o1: 'Bharat Electronics Limited (BEL)',
      o2: 'God Shipyard Limited (GSL)',
      o3: 'Bharat Dynamic Limited (BDL)',
      o4: 'None of the above'
    },
    correct: 'Bharat Electronics Limited (BEL)'
  },
  {
    question: 'Where is the Judicature of Orissa?',
    option: {
      o1: 'Bhubaneswar',
      o2: 'Cuttack',
      o3: 'Both',
      o4: 'None of the above'
    },
    correct: 'Both'
  },
  {
    question: 'Which of the following are the members of SAARC (South Asian Association for Regional Cooperation)?',
    option: {
      o1: 'Bhutan, Bangladesh, India and Pakistan',
      o2: 'Bhutan, Bangladesh, the Maldives, Nepal, India, Pakistan, Afghanistan and Sri Lanka',
      o3: 'Afghanistan, Pakistan, Thailand, Indonesia, Nepal and Sri Lanka',
      o4: 'None of the above'
    },
    correct: 'Bhutan, Bangladesh, the Maldives, Nepal, India, Pakistan, Afghanistan and Sri Lanka'
  },
  {
    question: 'Where is the permanent secretariat of the SAARC?',
    option: {
      o1: 'Kathmandu',
      o2: 'New Delhi',
      o3: 'Islamabad',
      o4: 'Colombo'
    },
    correct: 'Kathmandu'
  }
];
function question_gernarator() {
    let random = Math.floor(Math.random()* list.length);
    if(random in qno){
      question_gernarator()
    }
    timeLeft=10
    clearInterval(timerInterval);
    startTimer();
    qno.push(random)
    let question = document.getElementById("question");
    let ops1 =document.getElementById("ops1");
    let ops2 =document.getElementById("ops2");
    let ops3 =document.getElementById("ops3");
    let ops4 =document.getElementById("ops4");
    question.innerText=list[random].question;
    ops1.innerText=list[random].option.o1;
    ops2.innerText=list[random].option.o2;
    ops3.innerText=list[random].option.o3;
    ops4.innerText=list[random].option.o4;
    correctAns=list[random].correct;
    noOfQuestion.innerText=count.toString()+'of 5 Question'

}
start.addEventListener("click", function () {
  start.parentNode.style.display = "none";
  main.style.display = "contents";
  qno=[]
  count=1
  noOfQuestion.innerText= count.toString()+' of 5 question'
  points=0
  point.innerText='points: '+points.toString();
  startTimer();
  question_gernarator()
  
});
 Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        temp=button
       if(e.target.innerText===correctAns)
       {
        points++;
        point.innerText='points: '+points.toString();
        e.target.style.background='green'
        clearInterval(timerInterval);
       }
       else{
        e.target.style.background='red'
        clearInterval(timerInterval);
       }
       Array.from(buttons).forEach((button)=>{
        button.disabled=true}
       )
    })
 })
 next.addEventListener('click',function (){
  if (temp!='') {
    temp.style.background= null
  }
  Array.from(buttons).forEach((button)=>{
    button.disabled=false}
   )
    count++
    clearInterval(timerInterval);
    startTimer();
    temp=''
    if (count<6) {
      question_gernarator()
      
    }
    else{
      alert('game over ')
      clearInterval(timerInterval)
      startArea.style.display="contents";
      main.style.display = 'none' ;

    }
 })

 let timeLeft = 10; 
let timerInterval; 

function startTimer() {
  clearInterval(timerInterval); 
  let timerDisplay = document.querySelector('.time-left');
  timerDisplay.textContent = timeLeft + 's';
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft + 's';

    if (timeLeft === 0) {
      alert('time up');
      if (count >= 5) {
        alert('game over')
        clearInterval(timerInterval)
        startArea.style.display="contents";
        main.style.display = 'none' ;
      } else {
        count++
        question_gernarator()
      }
    }
  }, 1000);
}




