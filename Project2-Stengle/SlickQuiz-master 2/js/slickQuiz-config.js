// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Let's test step 1! Try this quiz before learning step 1!</p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Parantheses Master",
        "level2":  "Parantheses Power",
        "level3":  "Math Amateur",
        "level4":  "Math Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is step 1 ?",
            "a": [
                {"option": "Aunt Sally",      "correct": false},
                {"option": "Exponents",     "correct": false},
                {"option": "Parantheses",      "correct": true},
                {"option": "Division",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You got it!</p>",
            "incorrect": "<p><span>Uhh no.</span> Try again</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the first step to this problem: 350-(11*2)-14?",
            "a": [
                {"option": "339*2-14",               "correct": false},
                {"option": "35-22-14",   "correct": true},
                {"option": "336-(11*2)",               "correct": false},
                {"option": "336", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span>You got it!</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the solution to this problem 25+(14*2)",
            "a": [
                {"option": "53",           "correct": true},
                {"option": "43",                  "correct": false},
                {"option": "33",  "correct": true},
                {"option": "23",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> But nice try.</p>" // no comma here
        },
        { // Question 4
      //      "q": "How many inches of rain does Michigan get on average per year?",
          //  "a": [
            //    {"option": "149",    "correct": false},
            //    {"option": "32",     "correct": true},
          //      {"option": "3",      "correct": false},
            //    {"option": "1291",   "correct": false} // no comma here
        //    ],
        //    "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            //"incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        //{ // Question 5
          //  "q": "Is Earth bigger than a basketball?",
          //  "a": [
              //  {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
          //  "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
          //  "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
