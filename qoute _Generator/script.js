let button=document.querySelector("#MoreQoute")
let quote=document.querySelector("span")
let person=document.querySelector(".person")
const list=[{quote:"Nothing is impossible. The word itself says 'I'm possible!'",person:"Audrey Hepburn"},{quote:"There is nothing impossible to they who will try.",person:"Alexander the Great"},{quote:"The bad news is time flies. The good news is you're the pilot.",person:"Michael Altshuler"},{quote:"Life has got all those twists and turns. You've got to hold on tight and off you go.", person:"Nicole Kidman"},{ quote:"Keep your face always toward the sunshine, and shadows will fall behind you.", person: "Walt Whitman"}]
button.addEventListener('click',function(){
    let random =Math.floor(Math.random() * list.length)
    quote.innerText=list[random].quote;
    person.innerText=list[random].person;
})