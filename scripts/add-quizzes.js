const fs = require('fs');

const langs = ['en', 'fr', 'es', 'de', 'ja', 'zh', 'ar', 'hi', 'hinglish'];

const questions = {
  "hello-world": {
    correct: "A",
    en: { q: "What does the `print()` function do?", A: "Outputs data to the console", B: "Saves a file", C: "Takes user input", D: "Stops the program", s: "Correct! print() is used for output." },
    fr: { q: "Que fait la fonction `print()` ?", A: "Affiche des données dans la console", B: "Enregistre un fichier", C: "Prend l'entrée utilisateur", D: "Arrête le programme", s: "Correct ! print() est utilisé pour la sortie." },
    es: { q: "¿Qué hace la función `print()`?", A: "Imprime datos en la consola", B: "Guarda un archivo", C: "Toma la entrada del usuario", D: "Detiene el programa", s: "¡Correcto! print() se usa para salida." },
    de: { q: "Was macht die Funktion `print()`?", A: "Gibt Daten auf der Konsole aus", B: "Speichert eine Datei", C: "Nimmt Benutzereingaben entgegen", D: "Stoppt das Programm", s: "Richtig! print() wird zur Ausgabe verwendet." },
    ja: { q: "`print()` 関数は何をしますか？", A: "コンソールにデータを出力する", B: "ファイルを保存する", C: "ユーザー入力を受け取る", D: "プログラムを停止する", s: "正解！print() は出力に使用されます。" },
    zh: { q: "`print()` 函数的作用是什么？", A: "向控制台输出数据", B: "保存文件", C: "获取用户输入", D: "停止程序", s: "正确！print() 用于输出。" },
    ar: { q: "ماذا تفعل الدالة `print()`؟", A: "تطبع البيانات على وحدة التحكم", B: "تحفظ ملفًا", C: "تأخذ إدخال المستخدم", D: "توقف البرنامج", s: "صحيح! تُستخدم print() للإخراج." },
    hi: { q: "`print()` फ़ंक्शन क्या करता है?", A: "कंसोल पर डेटा आउटपुट करता है", B: "फ़ाइल सहेजता है", C: "उपयोगकर्ता इनपुट लेता है", D: "प्रोग्राम रोकता है", s: "सही! print() का उपयोग आउटपुट के लिए किया जाता है।" },
    hinglish: { q: "`print()` function kya karta hai?", A: "Console par data output karta hai", B: "File save karta hai", C: "User input leta hai", D: "Program stop karta hai", s: "Sahi answer! print() output ke liye use hota hai." },
  },
  "variables-types": {
    correct: "B",
    en: { q: "Which of the following creates an integer variable?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "Correct! 5 without quotes or decimals is an int." },
    fr: { q: "Laquelle des propositions suivantes crée une variable entière ?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "Correct ! 5 sans guillemets ni décimales est un int." },
    es: { q: "¿Cuál de los siguientes crea una variable entera?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "¡Correcto! 5 sin comillas ni decimales es un int." },
    de: { q: "Welche der folgenden Optionen erstellt eine Integer-Variable?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "Richtig! 5 ohne Anführungszeichen oder Dezimalstellen ist ein int." },
    ja: { q: "整数変数を作成するのはどれですか？", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "正解！引用符や小数点のない 5 は int です。" },
    zh: { q: "下列哪项创建了一个整数变量？", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "正确！没有引号或小数点的 5 是一个整数。" },
    ar: { q: "أي مما يلي ينشئ متغيرًا صحيحًا؟", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "صحيح! 5 بدون علامات اقتباس أو علامات عشرية هو int." },
    hi: { q: "निम्नलिखित में से कौन एक पूर्णांक चर बनाता है?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "सही! बिना उद्धरण या दशमलव के 5 एक int है।" },
    hinglish: { q: "Inmein se kaun integer variable create karta hai?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "Sahi jawab! Bina quotes ya decimal ke 5 ek int hai." }
  },
  "if-else": {
    correct: "C",
    en: { q: "What keyword is used for alternative conditions in Python?", A: "else if", B: "elseif", C: "elif", D: "then", s: "Correct! Python uses 'elif'." },
    fr: { q: "Quel mot-clé est utilisé pour les conditions alternatives en Python ?", A: "else if", B: "elseif", C: "elif", D: "then", s: "Correct ! Python utilise 'elif'." },
    es: { q: "¿Qué palabra clave se usa para condiciones alternativas en Python?", A: "else if", B: "elseif", C: "elif", D: "then", s: "¡Correcto! Python usa 'elif'." },
    de: { q: "Welches Schlüsselwort wird für alternative Bedingungen in Python verwendet?", A: "else if", B: "elseif", C: "elif", D: "then", s: "Richtig! Python verwendet 'elif'." },
    ja: { q: "Pythonの代替条件に使用されるキーワードは何ですか？", A: "else if", B: "elseif", C: "elif", D: "then", s: "正解！Python は 'elif' を使用します。" },
    zh: { q: "Python中用于替代条件的关键字是什么？", A: "else if", B: "elseif", C: "elif", D: "then", s: "正确！Python 使用 'elif'。" },
    ar: { q: "ما الكلمة الأساسية المستخدمة للشروط البديلة في بايثون؟", A: "else if", B: "elseif", C: "elif", D: "then", s: "صحيح! بايثون تستخدم 'elif'." },
    hi: { q: "पायथन में वैकल्पिक स्थितियों के लिए किस कीवर्ड का उपयोग किया जाता है?", A: "else if", B: "elseif", C: "elif", D: "then", s: "सही! Python 'elif' का उपयोग करता है।" },
    hinglish: { q: "Python mein alternative conditions ke liye kaunsa keyword use hota hai?", A: "else if", B: "elseif", C: "elif", D: "then", s: "Sahi! Python 'elif' use karta hai." }
  },
  "default": {
    correct: "A",
    en: { q: "Have you fully understood this algorithm?", A: "Yes, I understand it.", B: "I need to review it again.", C: "It's still confusing.", D: "Not at all.", s: "Great job completing this lesson!" },
    fr: { q: "Avez-vous bien compris cet algorithme ?", A: "Oui, je le comprends.", B: "J'ai besoin de le revoir.", C: "C'est encore confus.", D: "Pas du tout.", s: "Super travail pour terminer cette leçon !" },
    es: { q: "¿Has entendido completamente este algoritmo?", A: "Sí, lo entiendo.", B: "Necesito repasarlo de nuevo.", C: "Sigue siendo confuso.", D: "En absoluto.", s: "¡Gran trabajo al completar esta lección!" },
    de: { q: "Haben Sie diesen Algorithmus vollständig verstanden?", A: "Ja, ich verstehe ihn.", B: "Ich muss ihn noch einmal überprüfen.", C: "Es ist immer noch verwirrend.", D: "Überhaupt nicht.", s: "Tolle Arbeit beim Abschluss dieser Lektion!" },
    ja: { q: "このアルゴリズムを完全に理解しましたか？", A: "はい、理解しました。", B: "もう一度見直す必要があります。", C: "まだ混乱しています。", D: "全く理解していません。", s: "このレッスンを完了して素晴らしい仕事をしました！" },
    zh: { q: "您完全理解这个算法了吗？", A: "是的，我理解它。", B: "我需要再复习一遍。", C: "还是有点混乱。", D: "完全不理解。", s: "完成本课程干得好！" },
    ar: { q: "هل فهمت هذه الخوارزمية بالكامل؟", A: "نعم، أفهمها.", B: "أحتاج لمراجعتها مرة أخرى.", C: "لا تزال مربكة.", D: "ليس على الإطلاق.", s: "عمل رائع في إكمال هذا الدرس!" },
    hi: { q: "क्या आपने इस एल्गोरिथम को पूरी तरह से समझ लिया है?", A: "हाँ, मैं समझता हूँ।", B: "मुझे इसकी फिर से समीक्षा करने की आवश्यकता है।", C: "यह अभी भी भ्रामक है।", D: "बिल्कुल नहीं।", s: "इस पाठ को पूरा करने के लिए शानदार काम!" },
    hinglish: { q: "Kya aapne is algorithm ko poori tarah samajh liya hai?", A: "Haan, samajh gaya.", B: "Mujhe ek aur baar review karna hoga.", C: "Thoda confusing hai.", D: "Bilkul nahi.", s: "Lesson complete karne par badhai!" }
  }
};

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

langs.forEach(lang => {
  const filePath = `./messages/${lang}.json`;
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  const quizzes = {};
  algorithms.forEach(algo => {
    const template = questions[algo] || questions.default;
    const txt = template[lang] || template.en;
    quizzes[algo] = {
      title: "Knowledge Check",
      question: txt.q,
      options: {
        A: txt.A,
        B: txt.B,
        C: txt.C,
        D: txt.D
      },
      correct: template.correct,
      successMessage: txt.s,
      checkButton: "Submit Answer",
      nextButton: "Continue to Next Lesson"
    };

    // Translate UI buttons if possible
    if(lang === 'fr') { quizzes[algo].checkButton = "Valider"; quizzes[algo].nextButton = "Leçon Suivante"; quizzes[algo].title = "Vérification des Connaissances"; }
    else if(lang === 'es') { quizzes[algo].checkButton = "Validar"; quizzes[algo].nextButton = "Siguiente Lección"; quizzes[algo].title = "Comprobación de Conocimientos"; }
    else if(lang === 'de') { quizzes[algo].checkButton = "Überprüfen"; quizzes[algo].nextButton = "Nächste Lektion"; quizzes[algo].title = "Wissensüberprüfung"; }
    else if(lang === 'ja') { quizzes[algo].checkButton = "回答を送信"; quizzes[algo].nextButton = "次のレッスンへ"; quizzes[algo].title = "知識チェック"; }
    else if(lang === 'zh') { quizzes[algo].checkButton = "提交答案"; quizzes[algo].nextButton = "继续下一课"; quizzes[algo].title = "知识检查"; }
    else if(lang === 'ar') { quizzes[algo].checkButton = "إرسال الإجابة"; quizzes[algo].nextButton = "الدرس التالي"; quizzes[algo].title = "التحقق من المعرفة"; }
    else if(lang === 'hi') { quizzes[algo].checkButton = "उत्तर दें"; quizzes[algo].nextButton = "अगला पाठ"; quizzes[algo].title = "ज्ञान की जांच"; }
    else if(lang === 'hinglish') { quizzes[algo].checkButton = "Answer Submit Karein"; quizzes[algo].nextButton = "Next Lesson Par Jayein"; quizzes[algo].title = "Knowledge Check"; }
  });

  data.Quizzes = quizzes;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Updated ${lang}.json`);
});
