enterButton = document.getElementById("enter-button");
answerInput = document.getElementById("answer-input");
question = document.getElementById("question");

jsonData = [];
questions = [];
index = 0;

answeredCorrectly = false;

$(function() {
  $.getJSON('pestof6.json', function(data){
    jsonData = data;

    numberOfQuestions = data.questions.length;

    for(i = 0; i < numberOfQuestions; i++){
      questions.push(i);
    }

    shuffle(questions);

    question.innerHTML = data.questions[questions[0]].question;
  });
});

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

enterButton.onclick = function(){

  if(!answeredCorrectly){
      answer = answerInput.value.toLowerCase();

      if (answer == jsonData.questions[questions[index]].answer){
        question.innerHTML = jsonData.questions[questions[index]].question + " <br><font color=\"green\"><span class=\"octicon octicon-check\"></span>  Correct!</font></p>";
        answeredCorrectly = true;
        enterButton.innerHTML = "Next Question"

      }
      else{
          question.innerHTML = jsonData.questions[questions[index]].question + " <br><font color=\"red\"><span class=\"octicon octicon-x\"></span>  Incorrect!</font></p>";
      }
  }
  else{
    index++;
    answeredCorrectly = false;
    enterButton.innerHTML = "Submit"

    question.innerHTML = jsonData.questions[questions[index]].question;
  }
};