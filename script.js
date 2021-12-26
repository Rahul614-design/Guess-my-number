'use strict';

let secretNumber = Math.trunc(Math.random()*20+1);
let guess = document.querySelector('.guess'); //button 
let text = document.querySelector('.text');
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);
document.querySelector('.score').textContent=score;

// on click event

guess.addEventListener('click', function(){
    let inputNumber = Number(document.querySelector('.input').value);
    
    
    if(inputNumber=== secretNumber){
        document.querySelector('.secret').style.width = "200px"
        document.querySelector('.secret').style.backgroundColor = "lightgreen";
        document.querySelector('.input').style.backgroundColor = "lightgreen";
        document.querySelector('.secret').style.color = "black";
        document.querySelector('.input').style.color = "black";
        document.querySelector('.secret').textContent = secretNumber;
        text.textContent = "🎉You won!" 
   document.querySelector('body').style.backgroundColor = "green";
   document.querySelector('body').style.color = "black";
   if(score>highscore){
       highscore = score;
   }
   document.querySelector('.highscore').textContent = highscore;
 }
 else if(inputNumber>secretNumber){
     text.textContent = "📈Too High";
     score=score-1;
     document.querySelector('.score').textContent=score;
    }
    else if(inputNumber<secretNumber){
        text.textContent = "📉Too Low";
        score=score-1;
        document.querySelector('.score').textContent=score;
    }
    if(score<1){
        text.textContent = "🤦‍♂️You Lose!" 
        document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('.secret').style.backgroundColor = "pink";
        document.querySelector('.input').style.backgroundColor = "pink";
    }
    
});
let again = document.querySelector('.again');
again.addEventListener('click', function(){
    document.querySelector('.secret').textContent ="?"
    document.querySelector('.score').textContent= 20;
    document.querySelector('.secret').style.backgroundColor = "rgb(68, 68, 55)";
        document.querySelector('.input').style.backgroundColor = "rgb(68, 68, 55)";
        document.querySelector('.secret').style.color = "white";
        document.querySelector('.input').style.color = "white";
        document.querySelector('body').style.color = "white";
    score = 20;
    secretNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('body').style.backgroundColor = "#222";
})