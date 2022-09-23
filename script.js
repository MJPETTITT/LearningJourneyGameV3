// JavaScript Document
/*
var x; var y="bGl2ZWxlYXJubGVhcA=="; x=prompt(atob("RW50ZXIgUGFzc3dvcmQ="),' '); if (x==atob(y)) alert(atob("Q29ycmVjdCBQYXNzd29yZCEgQ2xpY2sgT0sgdG8gRW50ZXIh")); else { window.location=atob("aHR0cDovL3ZsZXJpY2suY29tLw=="); } 
*/
var currentQuestion = 0;
var isflipped = 0;

/*just an example of the format*/
var questionsX = [
    q1 = {
        contents: "What are your current challenging goals?",
        category: "blue"
    },
    q2 = {
        contents: "What has been the most important sports performance of your life?",
        category: "blue"
    },
    q3 = {
        contents: "When did you stick your neck out to achieve something? Were you glad you did that?",
        category: "green"
    },
    q4 = {
        contents: "What is your greatest career ambition?",
        category: "green"
    },
    q5 = {
        contents: "What important team leadership skill have you acquired?",
        category: "purple"
    },
    q6 = {
        contents: "What place in the world would you really recommend visiting, and why?",
        category: "purple"
    },
    q7 = {
        contents: "In what way can you be best motivated to take on a project?",
        category: "red"
    },
    q8 = {
        contents: "What was your dream job as a child?",
        category: "red"
    },
    q9 = {
        contents: "In what country (other than your current country of residence) would you like to live for a couple of months?",
        category: "pink"
    },
    q10 = {
        contents: "In your opinion, what is a good leader’s most important skill?",
        category: "pink"
    }
]

/*complete question bank, no categories*/
var questions = ["What are your current challenging goals?", 
				 "What has been the most important sports performance of your life?", 
				 "When did you stick your neck out to achieve something? Were you glad you did that?", 
				 "What is your greatest career ambition?", 
				 "What important team leadership skill have you acquired?", 
				 "What place in the world would you really recommend visiting, and why?", 
				 "In what way can you be best motivated to take on a project?", 
				 "What was your dream job as a child?", 
				 "In what country (other than your current country of residence) would you like to live for a couple of months?", 
				 "In your opinion, what is a good leader’s most important skill?", 
				 "How do you think you inspire people?", 
				 "What is your most recent success story?", 
				 "What is one of the best things about your job?", 
				 "What motivates you most: exploring new things, interacting with people, or getting things done?", 
				 "What is your greatest professional responsibility at the moment?", 
				 "Who was your favourite boss, and why?", 
				 "What life experience has helped you perform in your current professional role?", 
				 "How would your friends describe you (when you are not around)?", 
				 "What life achievement are you most proud of?", 
				 "Name your No. 1 favourite book. Why?", 
				 "What made you decide to take your current job?", 
				 "Do you have a morning ritual?", 
				 "When was the last time someone amazed you? Why?", 
				 "If you could sit down with your 15-year-old self, what advice would you offer that you could also use today?", 
				 "Who has made an impact on your life? How?", 
				 "If someone wanted to recognise you so that you knew that you were doing a great job, what would be a meaningful way to do that?", 
				 "What’s the worst piece of advice you ever got about your career?", 
				 "Eliminate one thing from your daily schedule: what would it be and why?", 
				 "What is the most bizarre encounter you have had in life (at work, personal, from travel, with friends)?", 
				 "If you had this week to do over again, what would you do differently?", 
				 "If you could go back in time and change history, what would you change? Why?", 
				 "If you could replay a fun (or deep or big) moment in your life, what would you choose?", 
				 "Trade places with someone for 1 day − who would it be?", 
				 "Is there a quote or person that you keep in mind and aspire to in your career approach?", 
				 "What was the best career advice you’ve ever received (+ from whom)?", 
				 "What struck you most when you started your job at your current employer?", 
				 "If you could have a superpower, what would it be?", 
				 "Describe your ideal boss/What would your ideal boss look like?", 
				 "Describe one past action (big or small) you took to improve the quality of your life.", 
				 "What is the No. 1 skill you would benefit greatly from?", 
				 "How do you envision the future of your business field?", 
				 "What advice would you give to someone new in your team?", 
				 "What can I learn from you?", 
				 "What do you want to be known for?", 
				 "If you could change one thing in your organisation, what would it be?", 
				 "Pretend you’re the CEO of your organisation. What 3 concerns would keep you up at night?", 
				 "If you were famous, what would you be famous for? ", 
				 "What are you spending most of your time on right now?", 
				 "What are the coming trends in your business or industry?", 
				 "What are you going to do when you retire?", 
				 "Who inspires you − and in what way can you compare yourself to this person?", 
				 "What kind of planned approach has given you the best results?", 
				 "When did you really surprise yourself? Were other people equally impressed?", 
				 "In what way does your current company culture influence your behaviour?", 
				 "What motivates you to give it your best in your organisation?", 
				 "What attracts you most to the industry you are in, and the job you do?", 
				 "What would you like more of…?", 
				 "In your opinion, what is the most important quality or skill for functioning well in a team?", 
				 "What do you enjoy the most about working in a team?", 
				 "What is your best memory of a project you have worked on?", 
				 "What are the most positive aspects of your time management?", 
				 "When did you give your best public presentation? What was it about?", 
				 "Have you ever achieved a ‘successful compromise’? Why would you call it successful?", 
				 "Who would you like to be for one day?", 
				 "What advice would you give a new employee in your organisation?", 
				 "How can people in your work environment gain your trust? What is most important?", 
				 "How do you recharge your batteries after a busy day at work?", 
				 "What is the most important positive thing you have learned in your career?", 
				 "According to your experience, what kind of behaviour is most important for establishing trust in a team?", 
				 "Which CEO would you like to be for a day?", 
				 "What’s the most memorable compliment you’ve ever received for your work? Why?", 
				 "When was the last time you amazed yourself?", 
				 "If you could have dinner with anyone – dead or alive, real or imagined − who would it be? And why?", 
				 "What’s something you want to accomplish before this year is over?", 
				 "Do you have a golden tip for handling criticism?", 
				 "Where and when do your best ideas come to you?", 
				 "What was the best thing that happened to you this past month?", 
				 "If you were sent to live on a space station for 3 months and only allowed to bring 3 personal items with you, what would they be?", 
				 "If you had a time machine that would work only once, what point in the future or in history would you visit? Why?", 
				 "What would you do in life if you knew you could not fail?", 
				 "If you could have any question answered, what would it be?", 
				 "If you could go back in time, who would you like to spend a day with?", 
				 "Of all the places you have lived/visited, which one did you like the best? Why?", 
				 "What do you do or value outside of work that contributes to when you are at work?", 
				 "Which quote best summarises your vision on your life?", 
				 "If you would ask a child what you do as a job, what would they say?", 
				 "In your opinion, what is the most important quality for a professional in your function/ field of work.", 
				 "What is the biggest challenge you face in your current job?", 
				 "What is your team currently struggling with most?",
				 "If you had 1 extra hour in a day, how would you use it?", 
				 "What is the biggest threat you see today facing the future of your profession?", 
				 "Why are you here today? What do you hope to learn?", 
				 "What are your learning objectives?", 
				 "How do you deal with change?", 
				 "Who is your hero in the world of business? And why?",
				 "If you could take up any role in your organisation for 1 day, which would it be and why?", 
				 "What do you enjoy most about what you do?", 
				 "What business or society problem does your company solve?", 
				 "What’s the most important thing to you about your company/your work/what you do?", 
				 "Tell me something most people would never guess about you."]

var questionsLive = [];
var selectedDeck = ["blue","pink","green","purple","red"];
var fromURL = window.location.href.split("?")[1];

function checkURL() {
	
	
	if (fromURL == "all" || fromURL == undefined || fromURL == "black") {
		selectedDeck = ["blue","pink","green","purple","red"];
	}
		
	if (fromURL == "blue") {selectedDeck = ["blue"];}
	if (fromURL == "pink") {selectedDeck = ["pink"];}
	if (fromURL == "green") {selectedDeck = ["green"];}
	if (fromURL == "purple") {selectedDeck = ["purple"];}
	if (fromURL == "red") {selectedDeck = ["red"];}
	
}

function addDeck(deckColor) {
	if (selectedDeck.includes(deckColor)) {
		selectedDeck.splice(selectedDeck.indexOf(deckColor),1)
		console.log(deckColor + " removed");
		/*b.classList.toggle("deselected");*/
	} else {
		selectedDeck.push(deckColor);
		console.log(deckColor + " added");
		/*b.classList.toggle("deselected");*/
	}
}

function prepareDeck() {
		sortQuestions();
	shuffle(questionsLive);
	
			if (fromURL == "black") {
		console.log("black selected")
		for (i=0;i<questionsLive.length;i++) {
			questionsLive[i].category = "black";
		}
	} 
		
	precolor();
	currentQuestion = 0;
	flipOff();
}

function sortQuestions() {
	
	questionsLive = [];

    if (selectedDeck.includes("blue") === true) {
        /*cards 1-20 are blue*/
        for (i = 0; i <= 19; i++) {
            var obj = {
                contents: questions[i],
                category: "blue"
            };
            questionsLive.push(obj);
        }
    }
	
    if (selectedDeck.includes("pink") === true) {
        /*cards 21-40 are pink*/
        for (j = 20; j <= 39; j++) {
            var obj = {
                contents: questions[j],
                category: "pink"
            };
            questionsLive.push(obj);
        }
    }
	
    if (selectedDeck.includes("green") === true) {
        /*cards 41-60 are green*/
        for (k = 40; k <= 59; k++) {
            var obj = {
                contents: questions[k],
                category: "green"
            };
            questionsLive.push(obj);
        }

    }
	
    if (selectedDeck.includes("purple") === true) {
        /*cards 61-80 are purple*/
        for (l = 60; l <= 79; l++) {
            var obj = {
                contents: questions[l],
                category: "purple"
            };
            questionsLive.push(obj);
        }

    }
	
    if (selectedDeck.includes("red") === true) {
        /*cards 81-100 are red*/
        for (m = 80; m <= 99; m++) {
            var obj = {
                contents: questions[m],
                category: "red"
            };
            questionsLive.push(obj);
        }
    }
    }


    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }

        return array;
    }

    function removeColorClasses(element) {
        for (let className of Array.from(element.classList))
            if (className.startsWith("gradient-"))
                element.classList.remove(className);
    }

    function precolor() {
		if (questionsLive.length  == 0) {
			document.getElementById("card-front-a").classList.add("gradient-grey");
        	document.getElementById("card-front-b").classList.add("gradient-grey");
		} else {
		
        removeColorClasses(document.getElementById("card-front-a"));
        removeColorClasses(document.getElementById("card-front-b"));
        document.getElementById("card-front-a").classList.add("gradient-" + questionsLive[currentQuestion].category);
        document.getElementById("card-front-b").classList.add("gradient-" + questionsLive[currentQuestion + (questionsLive.length) / 2].category);
			}
    }

    function flip() {
        document.getElementById("card-a").classList.add("flipped");
        setTimeout(function () {
            document.getElementById("card-b").classList.add("flipped")
        }, 100);
        isflipped = 1;
    }

    function unflip() {
        /*remove back of card*/
        document.getElementById("card-a").classList.remove("dealt");
        document.getElementById("card-b").classList.remove("dealt");
        document.getElementById("card-a").classList.add("drawn");
        document.getElementById("card-b").classList.add("drawn");

        setTimeout(function () {
            document.getElementById("card-a").classList.remove("flipped");
            document.getElementById("card-b").classList.remove("flipped");
            document.getElementById("card-a").classList.add("predeal");
            document.getElementById("card-b").classList.add("predeal");
            document.getElementById("card-a").classList.remove("drawn");
            document.getElementById("card-b").classList.remove("drawn");


        }, 600)
        setTimeout(function () {
            document.getElementById("card-a").classList.remove("predeal");
            document.getElementById("card-b").classList.remove("predeal");
            document.getElementById("card-a").classList.add("dealt");
            document.getElementById("card-b").classList.add("dealt");

        }, 650)

        isflipped = 0;
    }

    function generateRandom(min, max, except) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        return (num === except) ? generateRandom(min, max) : num;
    }

    function populate() {
        document.getElementById("question-a-container").innerText = questionsLive[currentQuestion].contents;
        document.getElementById("question-b-container").innerText = questionsLive[currentQuestion + (questionsLive.length) / 2].contents;
    }

    function depopulate() {
        document.getElementById("question-a-container").innerText = "";
        document.getElementById("question-a-container").innerText = "";
    }

    function progress() {
        currentQuestion++
        if (currentQuestion >= (questionsLive.length/2)) {
            currentQuestion = 0;
            shuffle(questions);
        }

    }

    function flipOnOff() {
		
		if (questionsLive.length == 0) {
			window.alert("No decks selected! Please select at least one deck by clicking the coloured circles at the top of the screen.")
		} else {
		
        if (isflipped == 0) {
            flip();
            populate();
            /*startTimer();*/
            /*progressPlayer();*/
            unhide(document.getElementById("question-a-container"));
            unhide(document.getElementById("question-b-container"));
        } else {
            unflip();
            /*depopulate()*/
            progress();
            /*stopTimer();*/
            hide(document.getElementById("question-a-container"));
            hide(document.getElementById("question-b-container"));
            precolor();
        }
			}
    }

    function flipOff() {
        if (isflipped == 0) {
			/*do nothing*/
        } else {
            unflip();
            /*depopulate()*/
            progress();
            /*stopTimer();*/
            hide(document.getElementById("question-a-container"));
            hide(document.getElementById("question-b-container"));
            precolor();
        }
    }

function timerCheck() {
	
	const userKeyRegExp = /^([0-9]:[0-5][0-9])$/;
	
	const valid = userKeyRegExp.test(document.getElementById("timer").innerText);
	
	/*console.log(valid);*/
	
	if (valid == false ) {
		document.getElementById("timer").classList.add("invalid");
	} else {
		document.getElementById("timer").classList.remove("invalid");
	}
	
	return valid;
	
}

    var timer = 0;
var startTime = "1:00";

    function startTimer() {
        var presentTime = document.getElementById('timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s == 59) {
            m = m - 1
        }
        if (m < 0) {
            return
        }

        document.getElementById('timer').innerHTML =
            m + ":" + s;
        /*console.log(m)*/
        timer5 = setTimeout(startTimer, 1000);

    }

    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) {
            sec = "0" + sec
        }; // add zero in front of numbers < 10
        if (sec < 0) {
            sec = "59"
        };
        return sec;
    }

    function stopTimer() {
        clearTimeout(timer5);
        document.getElementById('timer').innerHTML = startTime;
    }

    function startStopTimer() {
		
		if (timerCheck() == false) {
			/*do nothing*/
		} else {
		
        if (timer == 0) {
			startTime = document.getElementById("timer").innerText;
            startTimer();
            timer = 1;
            document.getElementById('play-pause').innerText = "⏸︎";
        } else {
            stopTimer();
            timer = 0;
            document.getElementById('play-pause').innerText = "⏵︎";
        }
			}
    }

    function hide(a) {
        a.classList.remove("unhidden");
        a.classList.add("hidden");
    }

    function unhide(a) {
        a.classList.add("unhidden");
        a.classList.remove("hidden");
    }

    /*added for instructions*/

    function unopenIt(a) {
        a.classList.remove("open");
        a.classList.add("unopen");
    }

    function openIt(a) {
        a.classList.add("open");
        a.classList.remove("unopen");
    }
