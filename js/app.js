'use strict';

console.log ('hello world!');

let userName = prompt ('What is your name?');

alert(`Welcome to my site ${userName}! I'm gonna ask you some random questions about me, please answer yes/no OR y/n`);

let questionOne = prompt('Do you think I play video games?').toLowerCase();

if(questionOne === 'y' || questionOne === 'yes'){
  alert('Hey you got it!');
} else if (questionOne === 'n' || questionOne === 'no'){
  alert('Sorry, that\'s wrong.');
}

let questionTwo = prompt('Do you think I have any pets?').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes'){
  alert('Yes! I have two little furry babies, Chibi and Lulu. They\'re cats.');
} else if (questionTwo === 'n' || questionTwo === 'no'){
  alert('Incorret! I have two cats, Chibi and Lulu.');
}

let questionThree = prompt('Am I an extrovert?').toLowerCase();

if(questionThree === 'y' || questionThree === 'yes'){
  alert('Ooo. Sorry to say, but I\'m an introvert!');
} else if (questionThree === 'n' || questionThree === 'no'){
  alert('You guessed right!');
}

let questionFour = prompt('Am I Filipino?').toLowerCase();

if(questionFour === 'y' || questionFour === 'yes'){
  alert('That\'s right! I am truly Pinoy at heart.');
} else if (questionFour === 'n' || questionFour === 'no'){
  alert('Ah man. You got it wrong!');
}

let questionFive = prompt('Do you think I\'m lazy?').toLowerCase();

if(questionFive === 'y' || questionFive === 'yes'){
  alert('Darn! That\'s wrong.');
} else if (questionFive === 'n' || questionFive === 'no'){
  alert(`You guessed it! I'm proud to say that I'm a hardworker. Well I'm glad you're here ${userName} and I hope you enjoy your visit!`);
}
