// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!",
        "main":    "<p>Think you're smart enough to make Aunt Sally proud? Find out with this order of operations quiz!</p>",
        "results": "<h5>Learn More</h5><p> </p>" ,
        "level1":  "Math Wizard",
        "level2":  "Smarty Pants",
        "level3":  "Math Amateur",
        "level4":  "Math Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is the solution to 7+ (14 *4)",
            "a": [
                {"option": "12",      "correct": false},
                {"option": "52",     "correct": false},
                {"option": "63",      "correct": true},
                {"option": "74",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> 63 is the solution,  the order of operations were followed !</p>",
            "incorrect": "<p><span>Uhh no.</span> It's 63. Did you actually <em>go</em> learn PEMDAS?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the answer to  10 + (6 + 5^2 - 3)",
            "a": [
                {"option": "48",               "correct": false},
                {"option": "38",                "correct": true},
                {"option": "28",               "correct": false},
                {"option": "18", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> This one was harder, Aunt Sally is proud!</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to double check your math!</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Lets make it harder. Solve this function: 100-4(12/2+4)",
            "a": [
                {"option": "60",           "correct": true},
                {"option": "42",           "correct": false},
                {"option": "50",           "correct": false},
                {"option": "38",           "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're getting the hang of this!</p>",
            "incorrect": "<p><span>Not Quite.</span> Have you not listened to Aunt Sally at all? </p>" // no comma here
        },
        { // Question 4
            "q": "Find the answer to this equation, 9/3+2(9+10)-8+4*3",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "45",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "48",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I thought this one would be confusing, good job! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. </p>" // no comma here
        },
        { // Question 5
            "q": "This one is tricky! Round to the nearest tenth, (196/4^3-1)*(6^2/4)-2",
            "a": [
                {"option": "14.4",    "correct": true},
                {"option": "13.2",     "correct": false},
                {"option": "15.8",     "correct": false},
                {"option": "13.6",     "correct": false}
            ],
            "correct": "<p><span>Good Job!</span> You must be very cautious, that was hard!</p>",
            "incorrect": "<p><span>ERRRR!</span> Did you read this site at all?</p>" // no comma here
        },

        { // Question 6
            "q": "The final and hardest problem. Good luck! ((5003-3)+(20/2)^2*7^2)",
            "a": [
                {"option": "100",    "correct": true},
                {"option": "200",     "correct": false}, // no comma here
                {"option": "150",     "correct": false}, // no comma here
                {"option": "10",     "correct": false} // no comma here


            ],
            "correct": "<p><span>Good Job!</span> WOW! Congrats, you got it!</p>",
            "incorrect": "<p><span>ERRRR!</span> OK, I'll give you a break. This one was tough, keep praticing!</p>" // no comma here
        } // no comma here
    ]
};
