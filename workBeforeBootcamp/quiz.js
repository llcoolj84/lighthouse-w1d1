var question_1 = "what is your name?";
var question_2 = "what is your son's name?";
var question_3 = "what is the color of the sky?";
var question_4 = "What is the capital of Canada?";
var question_5 = "What is the number of pennies in a quarter?";
var counter = 0;


// ask questions and get answers
var answer_1 = prompt(question_1);
  if (answer_1.toUpperCase === "leemai") {
    alert("correct!");
    counter++;
  } else {
    alert("try the next question");
  }
var answer_2 = prompt(question_2);
  if (answer_2.toUpperCase === "kamea") {
    alert("correct!");
    counter++;
  } else {
    alert("try the next question");
  }
var answer_3 = prompt(question_3);
  if (answer_3.toUpperCase === "blue") {
    alert("correct!");
    counter++;
  } else {
    alert("try the next question");
  }
var answer_4 = prompt(question_4);
  if (answer_4.toUpperCase === "Ottowa") {
    alert("correct!");
    counter++;
  } else {
    alert("try the next question");
  }
var answer_5 = parseInt(prompt(question_5));
  if (answer_5 === "25") {
    alert("correct!");
    counter++;
  } else {
    alert("try the next question");
  }
//when the quiz is over, print out result
if (counter === 5) {
  alert("You got " + counter + "questions right! You are the gold crown winner!");
}
 else if (counter === 3 || counter === 4) {
  alert("You got " + counter + "questions right! You are the silver crown winner!");
} else if (counter === 1 || counter === 2) {
  alert("You got " + counter + "questions right! You are the bronze crown winner!");
} else {
  alert("You got " + counter + "questions right. You didn't win a crown :-(");
}



