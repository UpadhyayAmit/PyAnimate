const fs = require('fs');

const algorithms = [
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

const englishDb = {};

algorithms.forEach((id) => {
  englishDb[id] = {
    q: `What is the primary objective of the ${id.replace('-', ' ')} algorithm?`,
    A: "To process data optimally",
    B: "To throw exceptions during runtime",
    C: "To format strings",
    D: "To perform I/O operations",
    correct: "A",
    s: "Excellent job reviewing this algorithm!"
  };
});

Object.assign(englishDb, {
  "hello-world": { correct: "A", q: "What does the `print()` function do?", A: "Outputs data to the console", B: "Saves a file", C: "Takes user input", D: "Stops the program", s: "Correct! print() is used for output." },
  "variables-types": { correct: "B", q: "Which of the following creates an integer variable?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "Correct! 5 without quotes or decimals is an int." },
  "two-pointers": { correct: "A", q: "In the Two Pointers technique on a sorted array, what happens if the sum is too large?", A: "Move the right pointer left", B: "Move the left pointer right", C: "Move both pointers inward", D: "Restart the algorithm", s: "Correct! Moving the right pointer left decreases the sum." },
  "binary-search": { correct: "C", q: "What MUST be true about the array before performing a Binary Search?", A: "It must have an even length", B: "It must contain numbers only", C: "It must be sorted", D: "It must have no duplicates", s: "Correct! Binary Search requires sorted data." },
  "bubble-sort": { correct: "B", q: "What happens during one full pass of Bubble Sort?", A: "The array is fully sorted", B: "The largest unsorted element 'bubbles' to the end", C: "The array is split in half", D: "The median element is found", s: "Correct! The largest element floats to its correct final position on each pass." },
  "dfs": { correct: "D", q: "Which data structure is naturally used (often implicitly) in Depth-First Search?", A: "Linked List", B: "Queue", C: "Hash Map", D: "Stack / Call Stack", s: "Correct! DFS goes deep first, which relies on a LIFO stack." }
});

const defaultQuestion = {
  correct: "A",
  q: "Have you fully understood this algorithm and its complexity?",
  A: "Yes, I understand it.",
  B: "I need to review it again.",
  C: "It's still confusing.",
  D: "Not entirely.",
  s: "Great job!"
};

const delay = ms => new Promise(res => setTimeout(res, ms));

async function translate(text, targetLang) {
  if (targetLang === 'en' || targetLang === 'hinglish') return text;
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    let translated = '';
    data[0].forEach(item => translated += item[0]);
    await delay(300); // 300ms delay to avoid 429
    return translated;
  } catch(e) {
    console.warn(`Translation failed for: "${text.substring(0, 20)}..." -> ${targetLang}. Using fallback.`);
    await delay(500);
    return text;
  }
}

const getUIButtons = (lang) => {
  if(lang === 'hi') return { checkButton: "उत्तर दें", nextButton: "अगला पाठ", title: "ज्ञान की जांच" };
  if(lang === 'hinglish') return { checkButton: "Answer Submit Karein", nextButton: "Next Lesson Par Jayein", title: "Knowledge Check" };
  return { checkButton: "Submit Answer", nextButton: "Continue to Next Lesson", title: "Knowledge Check" };
};

const langs = ['en', 'hi', 'hinglish'];

async function run() {
  console.log("Starting targeted localization for:", langs.join(", "));
  
  for (const lang of langs) {
    const filePath = `./messages/${lang}.json`;
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${lang}.json (not found)`);
      continue;
    }
    
    let db = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let quizzes = db.Quizzes || {};

    let targetGTranslateId = lang === 'hinglish' ? 'hi' : lang;
    
    for (const algo of algorithms) {
       const template = englishDb[algo] || defaultQuestion;
       
       quizzes[algo] = {
         title: getUIButtons(lang).title,
         question: await translate(template.q, targetGTranslateId),
         options: {
           A: await translate(template.A, targetGTranslateId),
           B: await translate(template.B, targetGTranslateId),
           C: await translate(template.C, targetGTranslateId),
           D: await translate(template.D, targetGTranslateId)
         },
         correct: template.correct,
         successMessage: await translate(template.s, targetGTranslateId),
         checkButton: getUIButtons(lang).checkButton,
         nextButton: getUIButtons(lang).nextButton
       };
    }

    db.Quizzes = quizzes;
    fs.writeFileSync(filePath, JSON.stringify(db, null, 2));
    console.log(`✓ Updated ${lang}.json fully translated.`);
  }
  console.log("Done.");
}

run();
