$(document).ready(function() {

   // question objects
   const questionOne = {
      clue: 'This is question 1',
      choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[1];
      }
   }

   const questionTwo = {
      clue: 'This is question 2',
      choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[0];
      }
   }

   const questionThree = {
      clue: 'This is question 3',
      choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[1];
      }
   }

   const questionFour = {
      clue: 'This is question 4',
      choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[1];
      }
   }

   const questionFive = {
      clue: 'This is question 5',
      choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[1];
      }
   }

   const questionSix = {
      clue: 'This is question 6',
      choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[1];
      }
   }

   const questionSeven = {
      clue: 'This is question 7',
      choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[1];
      }
   }

   const questionEight = {
      clue: 'This is question 8',
      choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[1];
      }
   }

   const questionNine = {
      clue: 'This is question 9',
      choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[1];
      }
   }

   const questionTen = {
      clue: 'This is question 10',
      choices: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[1];
      }
   }

   const game = {
      setup() {
            $('#stat-head').text('Click to Begin!');
            $('#clue').css('display', 'none');
            $('.timer').css('display', 'none');
            $('.choice').css('display', 'none');
            $('.stats').css('display', 'none');
         },

         start() {
            clearInterval(gameTimer);
            questions[j].setup();
            $('.status').css('display', 'none');
            $('#start').css('display', 'none');
            $('#clue').css('display', 'block');
            $('.timer').css('display', 'inline-block');
            $('.choice').css('display', 'block');
            $('#timer-text').text('Time Remaining:');
            $('#timer-num').text(10)
            gameTimer = setInterval(function() {
               $("#timer-num").text(t);
               t--;
               if (t < 0) {
                  game.timeUp();
               }
            }, 1000);
            t = 9;
         },

         post() {
            clearInterval(gameTimer);
            j++;
            $('.status').css('display', 'block');
            $('#clue').css('display', 'none');
            $('.choice').css('display', 'none');
            $('#timer-num').text(5);
            if (j === 10) {
               $('#timer-text').text('See Your Scores In:');
            } else {
               $('#timer-text').text('Next Round Starts In:');
            }
            gameTimer = setInterval(function() {
               $("#timer-num").text(t);
               t--;
               if (t < 0 && j === 10) {
                  game.end();
               } else if (t < 0) {
                  game.start();
               }
            }, 1000);
            t = 4;
         },

         timeUp() {
            clearInterval(gameTimer);
            unanswered++;
            j++;
            $('.status').css('display', 'block');
            $('#clue').css('display', 'none');
            $('.choice').css('display', 'none');
            $('#stat-head').text(`Time's Up!`);
            $('#stat-p').text(`The correct answer is ${answer}`);
            $('#timer-num').text(5);
            if (j === 10) {
               $('#timer-text').text('See Your Scores In:');
            } else {
               $('#timer-text').text('Next Round Starts In:');
            }
            gameTimer = setInterval(function() {
               $("#timer-num").text(t);
               t--;
               if (t < 0 && j === 10) {
                  game.end();
               } else if (t < 0) {
                  game.start();
               }
            }, 1000);
            t = 4;
         },

         end() {
            clearInterval(gameTimer);
            $('.status').css('display', 'block');
            $('#clue').css('display', 'none');
            $('.timer').css('display', 'none');
            $('.choice').css('display', 'none');
            $('#stat-head').text('Thanks for Playing!');
            $('#stat-p').text('Your Final Score:');
            $('.stats').css('display', 'block');
            $('#wins').text(`Correct Answers: ${wins}`);
            $('#losses').text(`Incorrect Answers: ${losses}`);
            $('#unanswered').text(`Unanswered: ${unanswered}`);
         }
   };

   // question array
   let questions = [
      questionOne,
      questionTwo,
      questionThree,
      questionFour,
      questionFive,
      questionSix,
      questionSeven,
      questionEight,
      questionNine,
      questionTen
   ];

   // global variables
   let j = 0;
   let t = 0;
   let playerChoice;
   let answer;
   let wins = 0;
   let losses = 0;
   let unanswered = 0;
   let gameTimer;

   // setup game board
   game.setup();

   // click button to start
   $('#start').on('click', function() {
      game.start();
   })

   // game loop
   $('.choice').on('click', function() {
      playerChoice = $(this).text();
      if (playerChoice === answer) {
         wins++;
         game.post();
         $('#stat-head').text('Good Job!');
         $('#stat-p').text(`The correct answer is ${answer}`);
      } else {
         losses++;
         game.post();
         $('#stat-head').text('Too Bad!');
         $('#stat-p').text(`The correct answer is ${answer}`);
      }
   })

   // reset button
   $('#reset').on('click', function() {
      j = 0;
      t = 0;
      wins = 0;
      losses = 0;
      unanswered = 0;

      $('#stat-head').text('Click to Begin!');
      $('#stat-p').empty();
      $('#start').css('display', 'block');
      $('.stats').css('display', 'none');
      $('#wins').empty();
      $('#losses').empty();
      $('#unanswered').empty();
   })
});