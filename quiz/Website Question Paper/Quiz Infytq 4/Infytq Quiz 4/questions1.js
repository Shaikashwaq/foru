// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Collection is a ______ data-type.",
    answer: "Container",
    options: [
      "Sequential",
      "Container",
      "Numeric",
      "Integer"
    ]
  },
    {
    numb: 2,
    question: "Collection is _______!",
    answer: "High-performance container data-type",
    options: [
      "High-performance container data-type",
      "General purpose data-type",
      "Low-performance container data-type",
      "High-performance General purpose data-type"
    ]
  },
    {
    numb: 3,
    question: "Counter function in the collection is used to :",
    answer : "Counting hashable objects",
    options: [
      "Counting hashable objects",
      "Counting objects in the program",
      "Counting iterator in code",
      "Counting occurence of the element"
      ]
      
  },
    {
    numb: 4,
    question: " What does OrderDict() does:",
    answer: "Remember the order entries which were added.",
    options: [
      "Remember the entries which were added",
      "Remember the order entries which were added.",
      "Remember the order entries which were deleted",
      "Remember the entries which were deleted"
    ]
  },
    {
    numb: 5,
    question: "Set = {1, 1, 4, 3, 2, 4}     print(Set)",
    answer: "{1,4,3,2}",
    options: [
      "[1,2,3,4]",
      "[1,4,3,2]",
      "{1,4,3,2}",
      "{1,1,4,3,2,4}"
    ]
  },
   {
     numb: 6,
     question: "Set ={30,40,50}  Set.update([10,20,30])  print(Set)",
     answer: "{10,20,30,40,50}",
     options: [
       "Set cannot be updated",
       "{10,20,30,30,40,50}",
       "{30,40,50,[10,20,30]}",
       "{10,20,30,40,50}"
     ]
   },
    {
     numb: 7,
     question: "Set = {10, 20, 30, 40}      Set2 = Set.copy()           Set2.add(50)           print(Set)     ",
     answer: "{10, 20, 30, 40}",
     options: [
       "{10,20,30,40,50}",
       "Elements cannot be added to Set",
       "[10,20,30,40,50]",
       "{10, 20, 30, 40}"
     ]
   },
   {
     numb: 8,
     question: "arr = list('123456')      arr[0] = arr[5] = 0         arr[3] = arr[-2]      print(arr)",
     answer: "[0,'2','3','5','5',0]",
     options: [
       "023450",
       "[0,'2','3','5','5',0]",
       "(0,'2','3','5','5',0)",
       "Error"
     ]
   },
  {
     numb: 9,
     question: "     Tu = tuple('Pepsi')           aa, bb, cc, dd, ee = Tu           bb = cc = '*'          Tu = (aa, bb, cc, dd, ee)           print(Tu)",
     answer: "('P','*','*','s','i')",
     options: [
       "('p','*','*','s','i')",
       "('P','*','*','s','i')",
       "Pepsi",
       "Error"
     ]
   },
   {
     numb: 10,
     question: "Tuple = (3, False, True, 8.12, 1.111, True)      value = 0         for z in Tuple:               value += int(z)           print(value)",
     answer: "13",
     options: [
       "13",
       "13.231",
       "Error",
       "9"
     ]
   },
];