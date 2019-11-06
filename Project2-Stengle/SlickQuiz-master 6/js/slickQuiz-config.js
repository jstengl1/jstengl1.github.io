// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Think you've mastered the last step? Find out!</p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Math Master",
        "level2":  "Math Wizard Contender",
        "level3":  "Math Amateur",
        "level4":  "Math Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which comes first, addition or subtraction?",
            "a": [
                {"option": "At the same time",      "correct": false},
                {"option": "Subtraction, then Addition",     "correct": false},
                {"option": "Addition, then subtraction",      "correct": true},
                {"option": "is there an order?",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Good job!</p>",
            "incorrect": "<p><span>Uhh no.</span> Did you read the page ?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which comes first?",
            "a": [
                {"option": "addition outside parantheses",               "correct": false},
                {"option": "additionin parantheses",   "correct": true},
                {"option": "subtraction after Parantheses",               "correct": false},
                {"option": "and subtraction ", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> You're getting it!</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the solution to (24/2+100)-12.",
            "a": [
                {"option": "200",           "correct": false},
                {"option": "24",                  "correct": false},
                {"option": "100",  "correct": true},
                {"option": "78",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> But nice try.</p>" // no comma here
        },
      //  { // Question 4
        //    "q": "How many inches of rain does Michigan get on average per year?",
        //    "a": [
        //        {"option": "149",    "correct": false},
        //        {"option": "32",     "correct": true},
        //        {"option": "3",      "correct": false},
        //        {"option": "1291",   "correct": false} // no comma here
      //      ],
      //      "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
      //      "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
    //    },
    //    { // Question 5
        //    "q": "Is Earth bigger than a basketball?",
        //    "a": [
      //          {"option": "Yes",    "correct": true},
      //          {"option": "No",     "correct": false} // no comma here
      //      ],
      //      "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
      //      "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
      //  } // no comma here
    ]
};
