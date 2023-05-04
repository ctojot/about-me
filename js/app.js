'use strict';

console.log('hello world!');

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! I'm gonna ask you some random questions about me, please answer yes/no or y/n`);

let questionOne = prompt('Do you think I play video games?').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes') {
  alert('Hey you got it!');
} else if (questionOne === 'n' || questionOne === 'no') {
  alert('Sorry, that\'s wrong.');
} else {
  alert('Hmmm, Let\'s try that again. Answer with yes/no Or y/n');
}

let questionTwo = prompt('Do you think I have any pets?').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes') {
  alert('Yes! I have two little furry babies, Chibi and Lulu. They\'re cats.');
} else if (questionTwo === 'n' || questionTwo === 'no') {
  alert('Incorret! I have two cats, Chibi and Lulu.');
} else {
  alert('Hmmm, Let\'s try that again. Answer with yes/no Or y/n');
}

let questionThree = prompt('Am I an extrovert?').toLowerCase();

if (questionThree === 'y' || questionThree === 'yes') {
  alert('Ooo. Sorry to say, but I\'m an introvert!');
} else if (questionThree === 'n' || questionThree === 'no') {
  alert('You guessed right!');
} else {
  alert('Hmmm, Let\'s try that again. Answer with yes/no Or y/n');
}

let questionFour = prompt('Am I Filipino?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes') {
  alert('That\'s right! I am truly Pinoy at heart.');
} else if (questionFour === 'n' || questionFour === 'no') {
  alert('Ah man. You got it wrong!');
} else {
  alert('Hmmm, Let\'s try that again. Answer with yes/no Or y/n');
}

let questionFive = prompt('Do you think I\'m lazy?').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes') {
  alert('Darn! That\'s wrong.');
} else if (questionFive === 'n' || questionFive === 'no') {
  alert(`You guessed it! I'm proud to say that I'm a hardworker. Well I'm glad you're here ${userName} and I hope you enjoy your visit!`);
} else {
  alert('Hmmm, Let\'s try that again. Answer with yes/no Or y/n');
}

let myLuckyNum = 12;
let correctNum = false;
let questionAttempts = 4;
let questionSix;

while (correctNum === false && questionAttempts > 0) {
  if (questionAttempts === 4) {
    questionSix = parseInt(prompt('What\'s my lucky number?'));
  }
  else if (questionSix < myLuckyNum) {
    questionSix = parseInt(prompt('That\'s a little too low. Try again. What\'s my lucky number?'));
  }
  else if (questionSix > myLuckyNum) {
    questionSix = parseInt(prompt('Oops. Too high. Try again. What\'s my lucky number?'));
  }
  else if (questionSix === myLuckyNum) {
    alert('Nice! You got it right!');
    correctNum = true;
  }
  questionAttempts--;
}

if (correctNum === false) {
  alert('Sorry. My Lucky number is 12!');
}

let arraySub = ['science', 'math'];
let correctSub = false;
let questionAttempts2 = 6;
let questionSeven;
let i = 0;

while (correctSub === false && questionAttempts2 > 0) {
  if (questionAttempts2 === 6) {
    questionSeven = prompt('Sweet. Last one. What\'ss one of my best subject?').toLowerCase();
  }
  else {
    questionSeven = prompt('Ooh. Not quite. Try agian. What\'s one of my best subject?').toLowerCase();
  }
  for(i = 0; i < arraySub.length; i++){
    if (questionSeven === arraySub[i]){
      alert('Nice! You got it.');
      correctSub = true;
      break;
    }
  }
  if(correctSub){
    break;
  }
  if(!correctSub && questionAttempts2 === 1) {
    alert('Sorry. My best subject is Math and Science!');
    break;
  }
  questionAttempts2--;
}
