// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which of the following statements is true?",
    answer: "A function is a piece of code that performs a specific task",
    options: [
      "Functions are used to create objects in Python.",
      "Functions make your program run faster.",
      "A function is a piece of code that performs a specific task",
      "All of the above"
    ]
  },
    {
    numb: 2,
    question: "When a function is defined inside a class, what is called?",
    answer: "Method",
    options: [
      "Class",
      "Modules",
      "Another Function",
      "Method"
    ]
  },
    {
    numb: 3,
    question: "def hope(text):    print(text, 'is awesome.') hope('ForYou')",
    answer : "ForYou is awesome.",
    options: [
      "ForYou",
      "text is awesome",
      "ForYou is awesome.",
      "is awesome"
      ]
      
  },
    {
    numb: 4,
    question: " If return statement is not used inside the function, the function will return:",
    answer: "None object",
    options: [
      "None object",
      "An arbitrary integer",
      "Error",
      "It should return something"
    ]
  },
    {
    numb: 5,
    question: "What is a recursive function?",
    answer: "A function that calls itself.",
    options: [
      "A function that calls all the functions in the program.",
      "A function that calls itself.",
      "A function that calls all the functions in the program except itself.",
      "There is no such thing as a recursive function in Python."
    ]
  },
   {
     numb: 6,
     question: "The output of the following code will be:     output = lambda var: var * var     print(output(5))",
     answer: "25",
     options: [
       "10",
       "5",
       "25",
       "55"
     ]
   },
    {
     numb: 7,
     question: "numbers = [1, 3, 6]     newNumbers = list(map(lambda x: x , numbers))          print(newNumbers)",
     answer: "[1,3,6]",
     options: [
       "1 3 6",
       "[0,1,2]",
       "1,3,6",
       "[1,3,6]"
     ]
   },
   {
     numb: 8,
     question: "My_String = 'For You'     My_String = My_String.split()          k = [(z.upper(), len(z)) for z in My_String]          print(k)",
     answer: "[('FOR',3),('YOU',3)]",
     options: [
       "[(FOR,3),(YOU,3)]",
       "[False,False]",
       "[('FOR',3),('YOU',3)]",
       "('FOR',3),('YOU',3)"
     ]
   },
  {
     numb: 9,
     question: "What will be the output of the following Python code snippet?     print([z.lower() for z in 'HELLO'])",
     answer: "['h', 'e', 'l', 'l', 'o']",
     options: [
       "['h', 'e', 'l', 'l', 'o']",
       "hello",
       "Hello",
       "HELLO"
     ]
   },
   {
     numb: 10,
     question: "a = lambda i,j : i+j     print(a(5, 6))",
     answer: "11",
     options: [
       "Error",
       "11",
       "00",
       "5,6"
     ]
   },
];