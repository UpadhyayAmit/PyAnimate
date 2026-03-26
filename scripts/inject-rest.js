const fs = require('fs');

const quizzesData = {
  "hello-world": {
    correct: "A",
    fr: { q: "Que fait la fonction `print()` ?", A: "Affiche des données dans la console", B: "Enregistre un fichier", C: "Prend l'entrée", D: "Arrête le programme", s: "Correct ! print() est utilisé pour la sortie." },
    es: { q: "¿Qué hace la función `print()`?", A: "Muestra datos en la consola", B: "Guarda un archivo", C: "Toma la entrada", D: "Detiene el programa", s: "¡Correcto! print() se usa para la salida." },
    de: { q: "Was macht die Funktion `print()`?", A: "Gibt Daten auf der Konsole aus", B: "Speichert eine Datei", C: "Nimmt Eingaben entgegen", D: "Stoppt das Programm", s: "Richtig! print() wird zur Ausgabe verwendet." },
    ja: { q: "`print()` 関数は何をしますか？", A: "コンソールにデータを出力する", B: "ファイルを保存する", C: "ユーザー入力を受け取る", D: "プログラムを停止する", s: "正解！print() は出力に使用されます。" },
    zh: { q: "`print()` 函数的作用是什么？", A: "向控制台输出数据", B: "保存文件", C: "获取用户输入", D: "停止程序", s: "正确！print() 用于输出。" },
    ar: { q: "ماذا تفعل الدالة `print()`؟", A: "إخراج البيانات إلى وحدة التحكم", B: "حفظ ملف", C: "أخذ إدخال المستخدم", D: "إيقاف البرنامج", s: "صحيح! تُستخدم print() للإخراج." }
  },
  "variables-types": {
    correct: "B",
    fr: { q: "Laquelle des propositions suivantes crée une variable entière ?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "Correct ! 5 sans guillemets ni décimales est un int." },
    es: { q: "¿Cuál de las siguientes crea una variable entera?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "¡Correcto! 5 sin comillas ni decimales es un entero." },
    de: { q: "Welche der folgenden Optionen erstellt eine Integer-Variable?", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "Richtig! 5 ohne Anführungszeichen oder Dezimalstellen ist ein int." },
    ja: { q: "整数変数を作成するのはどれですか？", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "正解！引用符や小数点のない 5 は int です。" },
    zh: { q: "下列哪项创建了一个整数变量？", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "正确！没有引号或小数点的 5 是整数。" },
    ar: { q: "أي مما يلي ينشئ متغيرًا صحيحًا (integer)؟", A: "x = '5'", B: "x = 5", C: "x = 5.0", D: "x = True", s: "صحيح! 5 بدون علامات اقتباس أو علامات عشرية هو int." }
  },
  "string-operations": {
    correct: "C",
    fr: { q: "Quel opérateur relie deux chaînes en Python ?", A: "*", B: "&", C: "+", D: "/", s: "Correct ! L'opérateur + concatène les chaînes." },
    es: { q: "¿Qué operador conecta dos cadenas en Python?", A: "*", B: "&", C: "+", D: "/", s: "¡Correcto! El operador + concatena cadenas." },
    de: { q: "Welcher Operator verbindet zwei Strings in Python?", A: "*", B: "&", C: "+", D: "/", s: "Richtig! Der +-Operator verbindet Strings." },
    ja: { q: "Pythonで2つの文字列を連結する演算子はどれですか？", A: "*", B: "&", C: "+", D: "/", s: "正解！+ 演算子は文字列を結合します。" },
    zh: { q: "在Python中哪个运算符用于连接两个字符串？", A: "*", B: "&", C: "+", D: "/", s: "正确！+ 运算符用于连接字符串。" },
    ar: { q: "ما العامل الذي يربط بين سلسلتين متصلتين في بايثون؟", A: "*", B: "&", C: "+", D: "/", s: "صحيح! العامل + يربط السلاسل النصية." }
  },
  "arithmetic": {
    correct: "D",
    fr: { q: "Que renvoie l'opérateur modulo (%) ?", A: "Un pourcentage", B: "Le quotient", C: "Le multiplicateur x100", D: "Le reste d'une division", s: "Correct ! % calcule les restes." },
    es: { q: "¿Qué devuelve el operador módulo (%)?", A: "Un porcentaje", B: "El cociente", C: "El multiplicador x100", D: "El resto de una división", s: "¡Correcto! % se usa para restos." },
    de: { q: "Was gibt der Modulo-Operator (%) zurück?", A: "Prozentsatz", B: "Quotient", C: "100x Multiplikator", D: "Rest einer Division", s: "Richtig! % berechnet Reste." },
    ja: { q: "モジュロ演算子 (%) は何を返しますか？", A: "パーセンテージ", B: "商", C: "100倍の乗数", D: "割り算の余り", s: "正解！% は余りを取得します。" },
    zh: { q: "取模运算符 (%) 返回什么？", A: "百分比", B: "商", C: "100倍乘数", D: "除法的余数", s: "正确！% 用于求余数。" },
    ar: { q: "ماذا يرجع عامل باقي القسمة (%)؟", A: "النسبة المئوية", B: "ناتج القسمة", C: "مضاعف 100x", D: "باقي القسمة", s: "صحيح! % يستخدم للحصول على الباقي." }
  },
  "if-else": {
    correct: "C",
    fr: { q: "Quel mot-clé est utilisé pour les conditions alternatives en Python ?", A: "else if", B: "elseif", C: "elif", D: "then", s: "Correct ! Python utilise 'elif'." },
    es: { q: "¿Qué palabra clave se usa para condiciones alternativas en Python?", A: "else if", B: "elseif", C: "elif", D: "then", s: "¡Correcto! Python usa 'elif'." },
    de: { q: "Welches Schlüsselwort wird für alternative Bedingungen in Python verwendet?", A: "else if", B: "elseif", C: "elif", D: "then", s: "Richtig! Python verwendet 'elif'." },
    ja: { q: "Pythonの代替条件に使用されるキーワードは何ですか？", A: "else if", B: "elseif", C: "elif", D: "then", s: "正解！Python は 'elif' を使用します。" },
    zh: { q: "Python中用于替代条件的关键字是什么？", A: "else if", B: "elseif", C: "elif", D: "then", s: "正确！Python 使用 'elif'。" },
    ar: { q: "ما الكلمة الأساسية المستخدمة للشروط البديلة في بايثون؟", A: "else if", B: "elseif", C: "elif", D: "then", s: "صحيح! بايثون تستخدم 'elif'." }
  },
  "while-loop": {
    correct: "A",
    fr: { q: "Que se passe-t-il si la condition d'une boucle while ne devient jamais False ?", A: "Elle tourne à l'infini", B: "Elle plante", C: "Elle s'arrête après 100 itérations", D: "Elle est ignorée", s: "Correct ! Les boucles infinies continuent de tourner." },
    es: { q: "¿Qué pasa si la condición de un bucle while nunca se vuelve False?", A: "Se ejecuta infinitamente", B: "Falla y se cierra", C: "Se detiene después de 100 iteraciones", D: "Se omite", s: "¡Correcto! Los bucles infinitos siguen ejecutándose." },
    de: { q: "Was passiert, wenn die Bedingung einer While-Schleife nie False wird?", A: "Sie läuft unendlich", B: "Das Programm stürzt ab", C: "Sie stoppt nach 100 Iterationen", D: "Sie wird übersprungen", s: "Richtig! Unendliche Schleifen laufen weiter." },
    ja: { q: "while ループの条件が False にならない場合、どうなりますか？", A: "無限に実行される", B: "クラッシュする", C: "100回実行して停止する", D: "スキップされる", s: "正解！無限ループは実行され続けます。" },
    zh: { q: "如果 while 循环的条件永远不会变成 False 会发生什么情况？", A: "它将无限运行", B: "它会崩溃", C: "它会在100次迭代后停止", D: "它被完全跳过", s: "正确！无限循环会持续运行。" },
    ar: { q: "ماذا يحدث إذا لم يصبح شرط حلقة while أبدًا False؟", A: "ستعمل بشكل لانهائي", B: "تتعطل", C: "تتوقف بعد 100 تكرار", D: "تتخطى", s: "صحيح! تستمر الحلقات اللانهائية في العمل." }
  },
  "for-loop": {
    correct: "B",
    fr: { q: "Quelle fonction est utilisée avec les boucles for pour itérer des nombres ?", A: "count()", B: "range()", C: "loop()", D: "iter()", s: "Correct ! range() est utilisé pour cela." },
    es: { q: "¿Qué función se usa con los bucles for para iterar números?", A: "count()", B: "range()", C: "loop()", D: "iter()", s: "¡Correcto! Se utiliza range()." },
    de: { q: "Welche Funktion wird bei For-Schleifen zum Iterieren von Zahlen verwendet?", A: "count()", B: "range()", C: "loop()", D: "iter()", s: "Richtig! Dafür wird range() verwendet." },
    ja: { q: "数値の反復処理で、forループとともによく使用される関数はどれですか？", A: "count()", B: "range()", C: "loop()", D: "iter()", s: "正解！range() が使用されます。" },
    zh: { q: "哪个内置函数通常与 for 循环结合使用来迭代数字？", A: "count()", B: "range()", C: "loop()", D: "iter()", s: "正确！使用 range() 函数。" },
    ar: { q: "ما هي الوظيفة التي تُستخدم عادةً مع حلقات for لتكرار الأرقام؟", A: "count()", B: "range()", C: "loop()", D: "iter()", s: "صحيح! يُستخدم range()." }
  },
  "lists-basics": {
    correct: "C",
    fr: { q: "Comment accéder au premier élément de la liste 'arr' ?", A: "arr[1]", B: "arr.first()", C: "arr[0]", D: "arr[-1]", s: "Correct ! Les listes Python commencent à 0." },
    es: { q: "¿Cómo accedes al primer elemento de la lista 'arr'?", A: "arr[1]", B: "arr.first()", C: "arr[0]", D: "arr[-1]", s: "¡Correcto! Las listas en Python comienzan en 0." },
    de: { q: "Wie greifen Sie auf das erste Element der Liste 'arr' zu?", A: "arr[1]", B: "arr.first()", C: "arr[0]", D: "arr[-1]", s: "Richtig! Python-Listen sind nullindiziert." },
    ja: { q: "リスト 'arr' の最初の要素にアクセスするにはどうしますか？", A: "arr[1]", B: "arr.first()", C: "arr[0]", D: "arr[-1]", s: "正解！Pythonのリストは0から始まります。" },
    zh: { q: "如何访问名为 'arr' 的列表的第一个元素？", A: "arr[1]", B: "arr.first()", C: "arr[0]", D: "arr[-1]", s: "正确！Python 列表从0开始索引。" },
    ar: { q: "كيف تصل إلى العنصر الأول في القائمة 'arr'؟", A: "arr[1]", B: "arr.first()", C: "arr[0]", D: "arr[-1]", s: "صحيح! تبدأ قوائم بايثون من صفر." }
  },
  "functions-intro": {
    correct: "A",
    fr: { q: "Quel mot-clé définit une fonction ?", A: "def", B: "function", C: "fun", D: "create", s: "Correct ! 'def' crée des fonctions." },
    es: { q: "¿Qué palabra clave define una función?", A: "def", B: "function", C: "fun", D: "create", s: "¡Correcto! 'def' crea funciones." },
    de: { q: "Welches Schlüsselwort definiert eine Funktion?", A: "def", B: "function", C: "fun", D: "create", s: "Richtig! 'def' erstellt Funktionen." },
    ja: { q: "関数を定義するキーワードは何ですか？", A: "def", B: "function", C: "fun", D: "create", s: "正解！'def' が関数を作成します。" },
    zh: { q: "定义函数的关键字是什么？", A: "def", B: "function", C: "fun", D: "create", s: "正确！'def' 用于创建函数。" },
    ar: { q: "ما الكلمة الأساسية التي تحدد الدالة؟", A: "def", B: "function", C: "fun", D: "create", s: "صحيح! 'def' تنشئ دوال." }
  },
  "input-output": {
    correct: "D",
    fr: { q: "Quel type la fonction input() renvoie-t-elle par défaut ?", A: "Integer", B: "Boolean", C: "Float", D: "String", s: "Correct ! input() capture du texte." },
    es: { q: "¿Qué tipo de datos devuelve siempre la función input() por defecto?", A: "Entero", B: "Booleano", C: "Flotante", D: "String", s: "¡Correcto! input() captura texto sin formato." },
    de: { q: "Welchen Datentyp gibt input() standardmäßig zurück?", A: "Integer", B: "Boolean", C: "Float", D: "String", s: "Richtig! input() erfasst Text." },
    ja: { q: "input() 関数はデフォルトで常にどの型を返しますか？", A: "整数", B: "ブール値", C: "浮動小数点", D: "String", s: "正解！input() はテキストを取得します。" },
    zh: { q: "默认情况下，input() 函数始终返回什么数据类型？", A: "整数", B: "布尔值", C: "浮点数", D: "String", s: "正确！input() 捕获纯文本。" },
    ar: { q: "ما هو نوع البيانات الذي ترجعه وظيفة input() بشكل افتراضي؟", A: "عدد صحيح", B: "منطقي", C: "عشري", D: "String", s: "صحيح! input() تلتقط النص الخام." }
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
  if(lang === 'fr') return { checkButton: "Valider", nextButton: "Leçon Suivante", title: "Vérification des Connaissances" };
  if(lang === 'es') return { checkButton: "Validar", nextButton: "Siguiente Lección", title: "Comprobación de Conocimientos" };
  if(lang === 'de') return { checkButton: "Überprüfen", nextButton: "Nächste Lektion", title: "Wissensüberprüfung" };
  if(lang === 'ja') return { checkButton: "回答を送信", nextButton: "次のレッスンへ", title: "知識チェック" };
  if(lang === 'zh') return { checkButton: "提交答案", nextButton: "继续下一课", title: "知识检查" };
  if(lang === 'ar') return { checkButton: "إرسال الإجابة", nextButton: "الدرس التالي", title: "التحقق من المعرفة" };
  return { checkButton: "Submit Answer", nextButton: "Continue to Next Lesson", title: "Knowledge Check" };
};

const fallbackTemplates = {
  fr: { q: "Avez-vous bien compris le concept principal de l'algorithme {name} ?", A: "Oui, je le comprends parfaitement.", B: "Je devrais probablement le revoir.", C: "C'est encore un peu confus.", D: "Pas du tout.", s: "Super ! Beau travail pour avoir terminé cet algorithme." },
  es: { q: "¿Has comprendido completamente el concepto principal del algoritmo {name}?", A: "Sí, lo entiendo perfectamente.", B: "Probablemente debería revisarlo de nuevo.", C: "Sigue siendo un poco confuso.", D: "En absoluto.", s: "¡Genial! Buen trabajo terminando este algoritmo." },
  de: { q: "Haben Sie das Konzept des {name}-Algorithmus vollständig verstanden?", A: "Ja, ich verstehe es.", B: "Ich sollte es wahrscheinlich noch einmal durchgehen.", C: "Es ist immer noch verwirrend.", D: "Überhaupt nicht.", s: "Klasse! Gute Arbeit beim Abschluss." },
  ja: { q: "{name} アルゴリズムの主要な概念を完全に理解しましたか？", A: "はい、完全に理解しました。", B: "もう一度見直したほうがよさそうです。", C: "まだ少し混乱しています。", D: "まったく理解していません。", s: "素晴らしい！アルゴリズムの完了おめでとうございます。" },
  zh: { q: "您已经完全掌握了 {name} 算法的核心概念吗？", A: "是的，我完全理解了。", B: "我可能需要再复习一遍。", C: "还是有点混乱。", D: "完全不理解。", s: "太棒了！完成这个算法做得很好。" },
  ar: { q: "هل استوعبت المفهوم الأساسي لخوارزمية {name} بالكامل؟", A: "نعم، أفهمها تمامًا.", B: "ربما يجب علي مراجعتها.", C: "لا يزال الأمر مربكًا بعض الشيء.", D: "ليس على الإطلاق.", s: "رائع! عمل رائع في إنهاء هذه الخوارزمية." }
};

['fr', 'es', 'de', 'ja', 'zh', 'ar'].forEach(lang => {
  const filePath = `./messages/${lang}.json`;
  if (!fs.existsSync(filePath)) return;
  
  let db = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let quizzes = db.Quizzes || {};

  algorithmsList.forEach(algo => {
    let template = quizzesData[algo];
    let fallback = fallbackTemplates[lang];

    if (!template) {
       quizzes[algo] = {
         title: getUIButtons(lang).title,
         question: fallback.q.replace('{name}', algo.replace('-', ' ')),
         options: {
           A: fallback.A,
           B: fallback.B,
           C: fallback.C,
           D: fallback.D
         },
         correct: "A",
         successMessage: fallback.s,
         checkButton: getUIButtons(lang).checkButton,
         nextButton: getUIButtons(lang).nextButton
       };
    } else {
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
