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

	// answers
	// const answerKey = {
	// 	one: questionOne.choices[1]
	// }

	// question array
	let questions = [questionOne, questionTwo];

	// global variables
	let j = 0;
	let playerChoice;
	let answer;
	let correct;
	let wrong;
	let wins = 0;
	let losses = 0;

	const game = {
		setup() {
			$('#clue').css('display', 'none');
			$('.timer').css('display', 'none');
			$('.choice').css('display', 'none');
		},

		start() {
			$('.status').css('display', 'none');
			$('#start').css('display', 'none');
			$('#clue').css('display', 'block');
			$('.timer').css('display', 'inline-block');
			$('.choice').css('display', 'block');
		},

		// FINISH TIMER AFTER QUESTIONS & GAME LOOP ARE WORKING
		// qTimer() {
		// 	setTimeout()
		// }
	}

	// setup game board
	game.setup();


	$('#start').on('click', function() {
		game.start();
		questions[j].setup();
	})


	$('.choice').on('click', function() {
		playerChoice = $(this).text();
		// console.log(playerChoice);
		if (playerChoice === answer) {
			console.log('SUCCESS');
			j++;
			wins++;
			questions[j].setup();
		} else {
			console.log('FAILURE');
			j++;
			losses++;
			questions[j].setup();
		}
	})





});