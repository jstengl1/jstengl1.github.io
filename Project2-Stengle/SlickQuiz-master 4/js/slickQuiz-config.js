// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Think you understand it? Let's check step 3 with this quiz!</p>",
        "results": "<h5>Learn More</h5><p> </p>",
        "level1":  "Multiplication Master",
        "level2":  "Multiplication Maniac",
        "level3":  "Math Amateur",
        "level4":  "Math Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What comes first Parantheses or Multiplication?",
            "a": [
                {"option": "Neither",      "correct": false},
                {"option": "both",     "correct": false},
                {"option": "Parantheses",      "correct": true},
                {"option": "Multiplication",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Good work!</p>",
            "incorrect": "<p><span>Uhh no.</span> Did you read the site?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What would be the first step in this problem: (14*2)-13+100?",
            "a": [
                {"option": "(14*2)-100",               "correct": false},
                {"option": "(14*2)",   "correct": true},
                {"option": "13+100",               "correct": false},
                {"option": "(14*2)-13", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> You got it.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the order of operations we have learned so far?",
            "a": [
                {"option": "Parantheses, Exponents, Multiplication ",           "correct": true},
                {"option": "Multiplication, Exponents, Parantheses",                  "correct": false},
                {"option": "Exponents, Parantheses, Multiplication",  "correct": true},
                {"option": "Parantheses, Multiplication, Exponents",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
          //  "q": "How many inches of rain does Michigan get on average per year?",
          //  "a": [
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
          //      {"option": "Yes",    "correct": true},
            //    {"option": "No",     "correct": false} // no comma here
          //  ],
          //  "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
          //  "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
