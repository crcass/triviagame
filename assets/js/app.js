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
			$('#clue').css('display', 'none');
			$('.timer').css('display', 'none');
			$('.choice').css('display', 'none');
		},

		start() {
			questions[j].setup();
			$('.status').css('display', 'none');
			$('#start').css('display', 'none');
			$('#clue').css('display', 'block');
			$('.timer').css('display', 'inline-block');
			$('.choice').css('display', 'block');
			$('#timer-text').text('Time Remaining:');
			$('#timer-num').text(10)
			gameTimer = setTimeout(game.timeUp, 10000);
			t = 10;
			displayTimer;
		},

		post() {
			j++;
			console.log(j);
			$('.status').css('display', 'block');
			$('#clue').css('display', 'none');
			$('.choice').css('display', 'none');
			$('#timer-text').text('Next Round Starts In:');
			$('#timer-num').text(5);
			setTimeout(game.start, 5000);
			t = 5;
			displayTimer;
		},

		timeUp() {
			j++;
			console.log(j);
			$('.status').css('display', 'block');
			$('#clue').css('display', 'none');
			$('.choice').css('display', 'none');
			$('#stat-head').text('Time\'s Up!');
			$('#stat-p').text(`The correct answer is ${answer}`);
			$('#timer-text').text('Next Round Starts In:');
			$('#timer-num').text(5);
			setTimeout(game.start, 5000);
			t = 5;
			displayTimer;
		}

	}

	let displayTimer = setInterval(function() {
			$('#timer-num').text(t);
			console.log(t);
			t--;
			if (t < 0) {
				clearInterval(displayTimer);
			}
		}, 1000);

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
	let gameTimer;

	// setup game board
	game.setup();

	$('#start').on('click', function() {
		console.log(j);
		game.start();
	})

	$('.choice').on('click', function() {
		playerChoice = $(this).text();
		clearTimeout(gameTimer);
		if (playerChoice === answer) {
			wins++;
			console.log('correct');
			game.post();
			$('#stat-head').text('Good Job!');
			$('#stat-p').text(`The correct answer is ${answer}`);
		} 
		else {
			losses++;
			console.log('wrong');
			game.post();
			$('#stat-head').text('Too Bad!');
			$('#stat-p').text(`The correct answer is ${answer}`);
		}
	})





});