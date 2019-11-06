// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Let's test step 2! Try this quiz!</p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Exponents Expert",
        "level2":  "Exponents Master",
        "level3":  "Math Amateur",
        "level4":  "Math Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is step 2?",
            "a": [
                {"option": "Division",      "correct": false},
                {"option": "Parantheses",     "correct": false},
                {"option": "Exponents",      "correct": true},
                {"option": "Addition",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Good work!</p>",
            "incorrect": "<p><span>Uhh no.</span> Try Again. </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following is the answer to 4^2 + (12/2) represents your preferred breakfast?",
            "a": [
                {"option": "6",               "correct": false},
                {"option": "22",   "correct": true},
                {"option": "34",               "correct": false},
                {"option": "26", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the answer to this problem: 2^2+ 4^4 + 3^3.",
            "a": [
                {"option": "287",           "correct": true},
                {"option": "187",                  "correct": false},
                {"option": "236",  "correct": true},
                {"option": "314",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> But nice try.</p>" // no comma here
        },
        { // Question 4
        //    "q": "How many inches of rain does Michigan get on average per year?",
        //    "a": [
            //    {"option": "149",    "correct": false},
            //    {"option": "32",     "correct": true},
          //      {"option": "3",      "correct": false},
          //      {"option": "1291",   "correct": false} // no comma here
          //  ],
          //  "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
        //    "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
          //  "q": "Is Earth bigger than a basketball?",
          //  "a": [
            //    {"option": "Yes",    "correct": true},
              //  {"option": "No",     "correct": false} // no comma here
            ],
            //"correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            //"incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
