$(document).ready(function(){

    // Start button begins the game
    $("#start-button").on("click", gameState.startTimer);
  
  });
  
  var gameState = {
  
    // Time starts at 60
    timeRemaining : 60,
  
    startTimer: function() {
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      setInterval(gameState.countdown, 1000);
      $("#start-page").hide();
      trivia.displayQuestions();
    },
  
    // decrements the timer until 0 
    countdown: function() {
      gameState.timeRemaining--;
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      if (gameState.timeRemaining === 0) {
        gameState.stopTimer();
        $("#timer").empty();
      }
    },

    stopTimer: function() {
      clearInterval();
      trivia.checkAnswers();
    },
  
    // hide the quetions and display the end page with results
    showEndPage: function(numCorrect, numIncorrect, numskipped) {
      $("#end-page").show();
      $("#questions-box").empty();
      $("#timer").empty();
      $("#timer").hide();
      $("#correct-answers").text("Correct answers: " + numCorrect);
      $("#incorrect-answers").text("Incorrect answers: " + numIncorrect);
      $("#skipped").text("Skipped questions: " + numskipped);
    }
  }
  
     // functions for questions and stats
  var trivia = {
    displayQuestions: function() {
      var divContainer = $("#questions-box");

      divContainer.append('<h4>Here are the questions:</h4>');
      
      // loop through choices
      for (var i = 0; i < questions.length; i++) {
  
        divContainer.append('<div id="question"><hr>' + questions[i].question + '</div>');
  
        var answer1 = questions[i].choices[0];
        var answer2 = questions[i].choices[1];
        var answer3 = questions[i].choices[2];
        var answer4 = questions[i].choices[3];
  
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');
      }
  
      // add a finished button to the end of the page and register its click handler
      var finishedButton = '<hr><button class="btn btn-info btn-lg" id="finished-button" type="submit">Finished</button>';
      divContainer.append(finishedButton);
      $("#finished-button").on("click", gameState.stopTimer);
    },
  
      // compare user input with choices
    checkAnswers: function() {
      var correctAnswer;
      var userAnswer;
      var numCorrect = 0;
      var numIncorrect = 0;
      var numskipped = 0;
  
        for (var i = 0; i < questions.length; i++) {
        correctAnswer = questions[i].answer;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();
  
        if (userAnswer === correctAnswer) {
          numCorrect++;
        } else if (userAnswer === "") {
          numskipped++;
        } else if (userAnswer !== correctAnswer) {
          {
            numIncorrect++;
          }
        }
      }
  
      // show user stats
      gameState.showEndPage(numCorrect, numIncorrect, numskipped);
    },
  }
  
  // array of random questions
  var questions =
  [
    {
      question: "What is the largest country, by area, that has only one time zone?",
      choices: ["Russia", "China", "Turkey", "Australia"],
      answer: "China"
  },
  {
      question: "How many spaces are on a standard Monopoly board??",
      choices: ["20", "80", "60", "40"],
      answer: "40"
  },
  {
      question: "What did Alfred Nobel develop?",
      choices: ["Atomic Bomb", "Gunpowder", "Dynamite", "Nobelium"],
      answer: "Dynamite"
  },
  {
      question: "What is the name for the Jewish New Year?",
      choices: ["Hanukkah", "Yom Kippur", "Kwanzaa", "Rosh Hashanah"],
      answer: "Rosh Hashanah"
  },
  {
      question: "Which truck is produced by the Ford Motor Company?",
      choices: ["F-150", "RAV4", "CR-V", "Silverado 1500"],
      answer: "F-150"
  },
  {
      question: "In which language was the book 'War and Peace' originally written?",
      choices: ["English", "Russian", "French", "German"],
      answer: "Russian"
  },
  {
      question: "Which actor does not appear in 'Saving Private Ryan'?",
      choices: ["Vin Diesel", "Tom Hanks", "Ralph Fiennes", "Giovanni Ribisi"],
      answer: "Ralph Fiennes"
  },
  {
      question: "How many blue stripes does the United States of America national flag have?",
      choices: ["7", "13", "6", "0"],
      answer: "0"
  },
  {
      question: "What is the color of Donald Duck's bowtie?",
      choices: ["Blue", "Red", "Yellow", "Green"],
      answer: "Red"
  },
  {
      question: "Which of these NBA franchises has never signed LeBron James?",
      choices: ["Celtics", "Heat", "Lakers", "Cavs"],
      answer: "Lakers"
  }
    
  ]
  