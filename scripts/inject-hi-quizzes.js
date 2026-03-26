const fs = require('fs');

const quizzesData = {
  "hello-world": {
    correct: "A",
    en: { q: "What does the `print()` function do?", A: "Outputs data to the console", B: "Saves a file", C: "Takes user input", D: "Stops the program", s: "Correct! print() is used for output." },
    hi: { q: "`print()` फ़ंक्शन क्या करता है?", A: "कंसोल पर डेटा आउटपुट करता है", B: "फ़ाइल सहेजता है", C: "उपयोगकर्ता इनपुट लेता है", D: "प्रोग्राम रोकता है", s: "सही! print() का उपयोग आउटपुट के लिए किया जाता है।" },
    hinglish: { q: "`print()` function kya karta hai?", A: "Console par data output karta hai", B: "File save karta hai", C: "User input leta hai", D: "Program stop karta hai", s: "Sahi answer! print() output ke liye use hota hai." }
  },
  "variables-types": {
    correct: "B",
    en: { q: "Which of the following creates an integer variable?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "Correct! 5 without quotes or decimals is an int." },
    hi: { q: "निम्नलिखित में से कौन एक पूर्णांक (integer) चर बनाता है?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "सही! बिना उद्धरण या दशमलव के 5 एक int है।" },
    hinglish: { q: "Inmein se kaun integer variable create karta hai?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "Sahi jawab! Bina quotes ya decimal ke 5 ek int hai." }
  },
  "string-operations": {
    correct: "C",
    en: { q: "Which operator connects two strings in Python?", A: "*", B: "&", C: "+", D: "/", s: "Correct! The + operator joins strings." },
    hi: { q: "पायथन में दो स्ट्रिंग्स को कौन सा ऑपरेटर जोड़ता है?", A: "*", B: "&", C: "+", D: "/", s: "सही! + ऑपरेटर स्ट्रिंग्स को जोड़ता है।" },
    hinglish: { q: "Python mein do strings ko jodne (concatenate) ke liye kaunsa operator use hota hai?", A: "*", B: "&", C: "+", D: "/", s: "Sahi! + operator strings ko jodta hai." }
  },
  "arithmetic": {
    correct: "D",
    en: { q: "What does the modulo operator (%) return?", A: "Percentage", B: "Quotient", C: "100x multiplier", D: "Remainder of a division", s: "Correct! % is for remainders." },
    hi: { q: "मॉड्यूलो ऑपरेटर (%) क्या लौटाता है?", A: "प्रतिशत", B: "भागफल", C: "100x गुणक", D: "विभाजन का शेषफल (Remainder)", s: "सही! % शेषफल देता है।" },
    hinglish: { q: "Modulo operator (%) kya return karta hai?", A: "Percentage", B: "Quotient", C: "100x multiplier", D: "Division ke baad bacha hua remainder", s: "Sahi! % remainder nikalta hai." }
  },
  "if-else": {
    correct: "C",
    en: { q: "Which keyword is used for alternative conditions in Python?", A: "else if", B: "elseif", C: "elif", D: "then", s: "Correct! Python uses 'elif'." },
    hi: { q: "पायथन में वैकल्पिक स्थितियों के लिए किस कीवर्ड का उपयोग किया जाता है?", A: "else if", B: "elseif", C: "elif", D: "then", s: "सही! Python 'elif' का उपयोग करता है।" },
    hinglish: { q: "Python mein alternative conditions add karne ke liye kya use hota hai?", A: "else if", B: "elseif", C: "elif", D: "then", s: "Sahi! Python 'elif' use karta hai." }
  },
  "while-loop": {
    correct: "A",
    en: { q: "What happens if a while loop's condition never becomes False?", A: "It runs infinitely", B: "It crashes", C: "It stops after 100 times", D: "It skips", s: "Correct! Infinite loops keep running." },
    hi: { q: "यदि while लूप की शर्त कभी असत्य (False) नहीं होती तो क्या होता है?", A: "यह अनंत रूप से चलता है", B: "यह क्रैश हो जाता है", C: "यह 100 बार के बाद रुक जाता है", D: "यह छोड़ देता है", s: "सही! इनफिनिट लूप चलते रहते हैं।" },
    hinglish: { q: "Agar while loop ki condition kabhi False na ho, toh kya hoga?", A: "Ye infinite (lagatar) chalta rahega", B: "Program crash ho jayega", C: "100 baar chal kar ruk jayega", D: "Loop skip ho jayega", s: "Sahi! Condition True rehne tak loop chalta rehta hai." }
  },
  "for-loop": {
    correct: "B",
    en: { q: "Which built-in function is typically used with for loops to iterate numbers?", A: "count()", B: "range()", C: "loop()", D: "iter()", s: "Correct! range() is used." },
    hi: { q: "संख्याओं को इटरेट करने के लिए for लूप के साथ आमतौर पर किस फ़ंक्शन का उपयोग किया जाता है?", A: "count()", B: "range()", C: "loop()", D: "iter()", s: "सही! range() का उपयोग किया जाता है।" },
    hinglish: { q: "For loops ke sath numbers iterate karne ke liye aksar kaunsa function use hota hai?", A: "count()", B: "range()", C: "loop()", D: "iter()", s: "Sahi! range() numbers ki list generate karta hai." }
  },
  "lists-basics": {
    correct: "C",
    en: { q: "How do you access the first element of list 'arr'?", A: "arr[1]", B: "arr.first()", C: "arr[0]", D: "arr[-1]", s: "Correct! Python lists are 0-indexed." },
    hi: { q: "आप 'arr' सूची के पहले तत्व तक कैसे पहुँचते हैं?", A: "arr[1]", B: "arr.first()", C: "arr[0]", D: "arr[-1]", s: "सही! पायथन सूचियाँ 0-अनुक्रमित (0-indexed) हैं।" },
    hinglish: { q: "Aap 'arr' list ke pehle element ko kaise access karenge?", A: "arr[1]", B: "arr.first()", C: "arr[0]", D: "arr[-1]", s: "Sahi! Python lists 0 se shuru hoti hain." }
  },
  "functions-intro": {
    correct: "A",
    en: { q: "What keyword defines a function?", A: "def", B: "function", C: "fun", D: "create", s: "Correct! 'def' makes functions." },
    hi: { q: "पायथन में कौन सा कीवर्ड एक फ़ंक्शन को परिभाषित करता है?", A: "def", B: "function", C: "fun", D: "create", s: "सही! 'def' का उपयोग फ़ंक्शन बनाने में होता है।" },
    hinglish: { q: "Python mein naya function banane ke liye kaunsa keyword lagta hai?", A: "def", B: "function", C: "fun", D: "create", s: "Sahi! 'def' function define karne ke liye zaroori hai." }
  },
  "input-output": {
    correct: "D",
    en: { q: "What type does input() always return?", A: "Integer", B: "Boolean", C: "Float", D: "String", s: "Correct! Use int() to cast." },
    hi: { q: "बाय डिफ़ॉल्ट input() किस प्रकार का डेटा लौटाता है?", A: "पूर्णांक (Integer)", B: "बूलियन (Boolean)", C: "दशमलव (Float)", D: "स्ट्रिंग (String)", s: "सही! input() हमेशा टेक्स्ट स्ट्रिंग लेता है।" },
    hinglish: { q: "By default `input()` kya return karta hai?", A: "Integer", B: "Boolean", C: "Float", D: "String (Text)", s: "Sahi! input() hamesha string deta hai." }
  }
};

const algorithmsList = [
  'hello-world', 'variables-types', 'string-operations', 'arithmetic', 'if-else',
  'while-loop', 'for-loop', 'lists-basics', 'functions-intro', 'input-output',
  'linear-search', 'count-occurrences', 'find-min-max', 'sum-average', 'loop-explorer',
  'reverse-list', 'palindrome', 'fizzbuzz', 'factorial', 'fibonacci-iterative', 'binary-search',
  'selection-sort', 'insertion-sort', 'two-pointers', 'hash-map-counting', 'stack-ops', 'queue-ops',
  'anagram-check', 'sliding-window', 'merge-sorted', 'bubble-sort', 'merge-sort', 'quick-sort',
  'heap-sort', 'bfs', 'dfs', 'binary-tree-traversal', 'two-sum', 'valid-parentheses',
  'fibonacci-recursive', 'dijkstra', 'knapsack', 'lcs', 'topological-sort', 'kruskals',
  'trie', 'floyd-warshall', 'segment-tree', 'coin-change', 'bit-manipulation'
];

const getUIButtons = (lang) => {
  if (lang === 'hi') return { checkButton: "उत्तर दें", nextButton: "अगले पाठ पर जाएँ", title: "ज्ञान की जांच" };
  if (lang === 'hinglish') return { checkButton: "Answer Submit Karein", nextButton: "Next Lesson Par Jayein", title: "Knowledge Check" };
  return { checkButton: "Submit Answer", nextButton: "Continue to Next Lesson", title: "Knowledge Check" };
};

['en', 'hi', 'hinglish'].forEach(lang => {
  const filePath = `./messages/${lang}.json`;
  if (!fs.existsSync(filePath)) return;
  
  let db = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let quizzes = db.Quizzes || {};

  algorithmsList.forEach(algo => {
    let template = quizzesData[algo];

    if (!template) {
       // Customized fallback for algorithms where I didn't write a specific question!
       quizzes[algo] = {
         title: getUIButtons(lang).title,
         question: lang === 'hi' ? `क्या आपने ${algo.replace('-', ' ')} एल्गोरिथम के मुख्य उद्देश्य को पूरी तरह से समझ लिया है?`
           : lang === 'hinglish' ? `Kya aapne ${algo.replace('-', ' ')} algorithm ke main concept ko achche se samajh liya hai?`
           : `Have you grasped the core concept behind the ${algo.replace('-', ' ')} algorithm?`,
         options: {
           A: lang === 'hi' ? "हाँ, मुझे यह अच्छी तरह से समझ आ गया है।" : lang === 'hinglish' ? "Haan, mujhe ye samajh mein aa gaya hai." : "Yes, I understand it perfectly.",
           B: lang === 'hi' ? "मुझे इसे एक बार फिर से देखने की ज़रूरत है।" : lang === 'hinglish' ? "Mujhe isko ek baar aur dekhna padega." : "I should probably review it again.",
           C: lang === 'hi' ? "यह अभी भी थोड़ा भ्रामक (confusing) है।" : lang === 'hinglish' ? "Abhi bhi thoda confusing lag raha hai." : "It is still a bit confusing.",
           D: lang === 'hi' ? "बिल्कुल नहीं।" : lang === 'hinglish' ? "Bilkul nahi." : "Not at all."
         },
         correct: "A",
         successMessage: lang === 'hi' ? "शानदार! इस एल्गोरिथम को पूरा करने के लिए बधाई।" : lang === 'hinglish' ? "Superb! Ye lesson complete karne ke liye badhai." : "Awesome! Great job finishing this algorithm.",
         checkButton: getUIButtons(lang).checkButton,
         nextButton: getUIButtons(lang).nextButton
       };
    } else {
       // Specific questions for foundation algorithms
       quizzes[algo] = {
         title: getUIButtons(lang).title,
         question: template[lang].q,
         options: {
           A: template[lang].A,
           B: template[lang].B,
           C: template[lang].C,
           D: template[lang].D
         },
         correct: template.correct,
         successMessage: template[lang].s,
         checkButton: getUIButtons(lang).checkButton,
         nextButton: getUIButtons(lang).nextButton
       };
    }
  });

  db.Quizzes = quizzes;
  fs.writeFileSync(filePath, JSON.stringify(db, null, 2));
  console.log(`Updated ${lang}.json synchronously.`);
});
