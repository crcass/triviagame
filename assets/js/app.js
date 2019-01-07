$(document).ready(function() {

   // question objects
   const questionOne = {
      clue: 'Who holds the record for most career passing yards?',
      choices: ['Landry Jones', 'Case Keenum', 'Graham Harrell', 'Timmy Chang'],

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
      clue: 'Which coach has the most wins, all-time?',
      choices: ['Joe Paterno', 'Bear Bryant', 'Bobby Bowden', 'Nick Saban'],

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
      clue: 'Three of these schools have 7 Heisman Trophies. Which only has 6?',
      choices: ['Ohio State', 'Notre Dame', 'USC', 'Oklahoma'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[2];
      }
   }

   const questionFour = {
      clue: 'Which player has the most single season touchdown receptions?',
      choices: ['Michael Crabtree', 'Randy Moss', 'Stedman Bailey', 'Troy Edwards'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[3];
      }
   }

   const questionFive = {
      clue: 'Which player holds the career rushing record?',
      choices: ['Tony Dorsett', 'Bo Jackson', 'Barry Sanders', 'Ron Dayne'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[3];
      }
   }

   const questionSix = {
      clue: 'Who won the 1992 Heisman Trophy?',
      choices: ['Gino Torretta', 'Marshall Faulk', 'Garrison Hearst', 'Drew Bledsoe'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[0];
      }
   }

   const questionSeven = {
      clue: 'Which active coach has the most bowl game appearances?',
      choices: ['Bill Snyder', 'Kirk Ferentz', 'Nick Saban', 'Gary Patterson'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[2];
      }
   }

   const questionEight = {
      clue: 'Which player holds the single season rushing record?',
      choices: ['Marcus Allen', 'Barry Sanders', 'Ron Dayne', 'Tony Dorsett'],

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
      clue: 'Who has the most touchdown receptions in a single game?',
      choices: ['Rashaun Woods', 'Corey Davis', 'Jarett Dillard', 'Ryan Broyles'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[0];
      }
   }

   const questionTen = {
      clue: 'Who holds the single game rushing record?',
      choices: ['Ricky Williams', 'Melvin Gordon', 'Samaje Perine', 'LaDanian Tomlinson'],

      setup() {
         $('#clue').text(this.clue);
         $('#c1').text(this.choices[0]);
         $('#c2').text(this.choices[1]);
         $('#c3').text(this.choices[2]);
         $('#c4').text(this.choices[3]);
         answer = this.choices[2];
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
            $('#timer-num').text(13)
            gameTimer = setInterval(function() {
               $("#timer-num").text(t);
               t--;
               if (t < 0) {
                  game.timeUp();
               }
            }, 1000);
            t = 12;
         },

         post() {
            clearInterval(gameTimer);
            j++;
            $('.status').css('display', 'block');
            $('#clue').css('display', 'none');
            $('.choice').css('display', 'none');
            $('#timer-num').text(7);
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
            t = 6;
         },

         timeUp() {
            clearInterval(gameTimer);
            unanswered++;
            j++;
            $('.status').css('display', 'block');
            $('#clue').css('display', 'none');
            $('.choice').css('display', 'none');
            $('#stat-head').text(`Time's Up!`);
            $('#stat-head').css('color', '#fff');
            $('#stat-p').text(`The correct answer is ${answer}`);
            $('#timer-num').text(7);
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
            t = 6;
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
         $('#stat-head').css('color', '#90ee90');
         $('#stat-p').text(`The correct answer is ${answer}`);
      } else {
         losses++;
         game.post();
         $('#stat-head').text('Too Bad!');
         $('#stat-head').css('color', '#dc143c')
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
      $('#start').css('display', 'inline-block');
      $('.stats').css('display', 'none');
      $('#wins').empty();
      $('#losses').empty();
      $('#unanswered').empty();
   })
});