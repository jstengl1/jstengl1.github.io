// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Almost there! Let's test your division skills first!</p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Division Demon",
        "level2":  "Division doing",
        "level3":  "Math Amateur",
        "level4":  "Math Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What comes before division?",
            "a": [
                {"option": "parantheses",      "correct": false},
                {"option": "exponents",     "correct": false},
                {"option": "all of the above",      "correct": true},
                {"option": "multiplication",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Good job!</p>",
            "incorrect": "<p><span>Uhh no.</span> Try again.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following solves this equation: (12*24) /4?",
            "a": [
                {"option": "82",               "correct": false},
                {"option": "72",   "correct": true},
                {"option": "104",               "correct": false},
                {"option": "96, fruit, toast, and milk", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> You are doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What step do you think is left?",
            "a": [
                {"option": "There's a next step?",           "correct": true},
                {"option": "None, I learned it all",                  "correct": false},
                {"option": "Addition and subtracion",  "correct": true},
                {"option": "Aunt Sally",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> But nice try.</p>" // no comma here
        },
        { // Question 4
        //    "q": "How many inches of rain does Michigan get on average per year?",
        //    "a": [
          //      {"option": "149",    "correct": false},
          //      {"option": "32",     "correct": true},
          //      {"option": "3",      "correct": false},
          //      {"option": "1291",   "correct": false} // no comma here
          //  ],
          //  "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
          //  "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
          //  "q": "Is Earth bigger than a basketball?",
          //  "a": [
            //    {"option": "Yes",    "correct": true},
            //    {"option": "No",     "correct": false} // no comma here
          //  ],
          //  "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
        //    "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
