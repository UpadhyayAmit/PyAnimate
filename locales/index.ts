import type { LessonLocaleOverlay, LocaleOverlayMap } from './types';

import anagramCheckFr from './fr/anagram-check';
import arithmeticFr from './fr/arithmetic';
import bellmanFordFr from './fr/bellman-ford';
import bfsFr from './fr/bfs';
import binarySearchFr from './fr/binary-search';
import binaryTreeTraversalFr from './fr/binary-tree-traversal';
import bitManipulationFr from './fr/bit-manipulation';
import bubbleSortFr from './fr/bubble-sort';
import coinChangeFr from './fr/coin-change';
import countOccurrencesFr from './fr/count-occurrences';
import countingSortFr from './fr/counting-sort';
import dfsFr from './fr/dfs';
import dijkstraFr from './fr/dijkstra';
import dpBasicsFr from './fr/dp-basics';
import factorialFr from './fr/factorial';
import fibonacciIterativeFr from './fr/fibonacci-iterative';
import fibonacciRecursiveFr from './fr/fibonacci-recursive';
import findMinMaxFr from './fr/find-min-max';
import fizzbuzzFr from './fr/fizzbuzz';
import floydWarshallFr from './fr/floyd-warshall';
import forLoopFr from './fr/for-loop';
import functionsIntroFr from './fr/functions-intro';
import hashMapCountingFr from './fr/hash-map-counting';
import heapSortFr from './fr/heap-sort';
import helloWorldFr from './fr/hello-world';
import ifElseFr from './fr/if-else';
import inputOutputFr from './fr/input-output';
import insertionSortFr from './fr/insertion-sort';
import knapsackFr from './fr/knapsack';
import kruskalsFr from './fr/kruskals';
import lcsFr from './fr/lcs';
import linearSearchFr from './fr/linear-search';
import listsBasicsFr from './fr/lists-basics';
import loopExplorerFr from './fr/loop-explorer';
import mergeSortFr from './fr/merge-sort';
import mergeSortedFr from './fr/merge-sorted';
import palindromeFr from './fr/palindrome';
import queueOpsFr from './fr/queue-ops';
import quickSortFr from './fr/quick-sort';
import recursionBasicsFr from './fr/recursion-basics';
import reverseListFr from './fr/reverse-list';
import segmentTreeFr from './fr/segment-tree';
import selectionSortFr from './fr/selection-sort';
import slidingWindowFr from './fr/sliding-window';
import stackOpsFr from './fr/stack-ops';
import stringOperationsFr from './fr/string-operations';
import sumAverageFr from './fr/sum-average';
import topologicalSortFr from './fr/topological-sort';
import trieFr from './fr/trie';
import twoPointersFr from './fr/two-pointers';
import twoSumFr from './fr/two-sum';
import validParenthesesFr from './fr/valid-parentheses';
import variablesTypesFr from './fr/variables-types';
import whileLoopFr from './fr/while-loop';
import anagramCheckEs from './es/anagram-check';
import arithmeticEs from './es/arithmetic';
import bellmanFordEs from './es/bellman-ford';
import bfsEs from './es/bfs';
import binarySearchEs from './es/binary-search';
import binaryTreeTraversalEs from './es/binary-tree-traversal';
import bitManipulationEs from './es/bit-manipulation';
import bubbleSortEs from './es/bubble-sort';
import coinChangeEs from './es/coin-change';
import countOccurrencesEs from './es/count-occurrences';
import countingSortEs from './es/counting-sort';
import dfsEs from './es/dfs';
import dijkstraEs from './es/dijkstra';
import dpBasicsEs from './es/dp-basics';
import factorialEs from './es/factorial';
import fibonacciIterativeEs from './es/fibonacci-iterative';
import fibonacciRecursiveEs from './es/fibonacci-recursive';
import findMinMaxEs from './es/find-min-max';
import fizzbuzzEs from './es/fizzbuzz';
import floydWarshallEs from './es/floyd-warshall';
import forLoopEs from './es/for-loop';
import functionsIntroEs from './es/functions-intro';
import hashMapCountingEs from './es/hash-map-counting';
import heapSortEs from './es/heap-sort';
import helloWorldEs from './es/hello-world';
import ifElseEs from './es/if-else';
import inputOutputEs from './es/input-output';
import insertionSortEs from './es/insertion-sort';
import knapsackEs from './es/knapsack';
import kruskalsEs from './es/kruskals';
import lcsEs from './es/lcs';
import linearSearchEs from './es/linear-search';
import listsBasicsEs from './es/lists-basics';
import loopExplorerEs from './es/loop-explorer';
import mergeSortEs from './es/merge-sort';
import mergeSortedEs from './es/merge-sorted';
import palindromeEs from './es/palindrome';
import queueOpsEs from './es/queue-ops';
import quickSortEs from './es/quick-sort';
import recursionBasicsEs from './es/recursion-basics';
import reverseListEs from './es/reverse-list';
import segmentTreeEs from './es/segment-tree';
import selectionSortEs from './es/selection-sort';
import slidingWindowEs from './es/sliding-window';
import stackOpsEs from './es/stack-ops';
import stringOperationsEs from './es/string-operations';
import sumAverageEs from './es/sum-average';
import topologicalSortEs from './es/topological-sort';
import trieEs from './es/trie';
import twoPointersEs from './es/two-pointers';
import twoSumEs from './es/two-sum';
import validParenthesesEs from './es/valid-parentheses';
import variablesTypesEs from './es/variables-types';
import whileLoopEs from './es/while-loop';
import anagramCheckDe from './de/anagram-check';
import arithmeticDe from './de/arithmetic';
import bellmanFordDe from './de/bellman-ford';
import bfsDe from './de/bfs';
import binarySearchDe from './de/binary-search';
import binaryTreeTraversalDe from './de/binary-tree-traversal';
import bitManipulationDe from './de/bit-manipulation';
import bubbleSortDe from './de/bubble-sort';
import coinChangeDe from './de/coin-change';
import countOccurrencesDe from './de/count-occurrences';
import countingSortDe from './de/counting-sort';
import dfsDe from './de/dfs';
import dijkstraDe from './de/dijkstra';
import dpBasicsDe from './de/dp-basics';
import factorialDe from './de/factorial';
import fibonacciIterativeDe from './de/fibonacci-iterative';
import fibonacciRecursiveDe from './de/fibonacci-recursive';
import findMinMaxDe from './de/find-min-max';
import fizzbuzzDe from './de/fizzbuzz';
import floydWarshallDe from './de/floyd-warshall';
import forLoopDe from './de/for-loop';
import functionsIntroDe from './de/functions-intro';
import hashMapCountingDe from './de/hash-map-counting';
import heapSortDe from './de/heap-sort';
import helloWorldDe from './de/hello-world';
import ifElseDe from './de/if-else';
import inputOutputDe from './de/input-output';
import insertionSortDe from './de/insertion-sort';
import knapsackDe from './de/knapsack';
import kruskalsDe from './de/kruskals';
import lcsDe from './de/lcs';
import linearSearchDe from './de/linear-search';
import listsBasicsDe from './de/lists-basics';
import loopExplorerDe from './de/loop-explorer';
import mergeSortDe from './de/merge-sort';
import mergeSortedDe from './de/merge-sorted';
import palindromeDe from './de/palindrome';
import queueOpsDe from './de/queue-ops';
import quickSortDe from './de/quick-sort';
import recursionBasicsDe from './de/recursion-basics';
import reverseListDe from './de/reverse-list';
import segmentTreeDe from './de/segment-tree';
import selectionSortDe from './de/selection-sort';
import slidingWindowDe from './de/sliding-window';
import stackOpsDe from './de/stack-ops';
import stringOperationsDe from './de/string-operations';
import sumAverageDe from './de/sum-average';
import topologicalSortDe from './de/topological-sort';
import trieDe from './de/trie';
import twoPointersDe from './de/two-pointers';
import twoSumDe from './de/two-sum';
import validParenthesesDe from './de/valid-parentheses';
import variablesTypesDe from './de/variables-types';
import whileLoopDe from './de/while-loop';
import anagramCheckJa from './ja/anagram-check';
import arithmeticJa from './ja/arithmetic';
import bellmanFordJa from './ja/bellman-ford';
import bfsJa from './ja/bfs';
import binarySearchJa from './ja/binary-search';
import binaryTreeTraversalJa from './ja/binary-tree-traversal';
import bitManipulationJa from './ja/bit-manipulation';
import bubbleSortJa from './ja/bubble-sort';
import coinChangeJa from './ja/coin-change';
import countOccurrencesJa from './ja/count-occurrences';
import countingSortJa from './ja/counting-sort';
import dfsJa from './ja/dfs';
import dijkstraJa from './ja/dijkstra';
import dpBasicsJa from './ja/dp-basics';
import factorialJa from './ja/factorial';
import fibonacciIterativeJa from './ja/fibonacci-iterative';
import fibonacciRecursiveJa from './ja/fibonacci-recursive';
import findMinMaxJa from './ja/find-min-max';
import fizzbuzzJa from './ja/fizzbuzz';
import floydWarshallJa from './ja/floyd-warshall';
import forLoopJa from './ja/for-loop';
import functionsIntroJa from './ja/functions-intro';
import hashMapCountingJa from './ja/hash-map-counting';
import heapSortJa from './ja/heap-sort';
import helloWorldJa from './ja/hello-world';
import ifElseJa from './ja/if-else';
import inputOutputJa from './ja/input-output';
import insertionSortJa from './ja/insertion-sort';
import knapsackJa from './ja/knapsack';
import kruskalsJa from './ja/kruskals';
import lcsJa from './ja/lcs';
import linearSearchJa from './ja/linear-search';
import listsBasicsJa from './ja/lists-basics';
import loopExplorerJa from './ja/loop-explorer';
import mergeSortJa from './ja/merge-sort';
import mergeSortedJa from './ja/merge-sorted';
import palindromeJa from './ja/palindrome';
import queueOpsJa from './ja/queue-ops';
import quickSortJa from './ja/quick-sort';
import recursionBasicsJa from './ja/recursion-basics';
import reverseListJa from './ja/reverse-list';
import segmentTreeJa from './ja/segment-tree';
import selectionSortJa from './ja/selection-sort';
import slidingWindowJa from './ja/sliding-window';
import stackOpsJa from './ja/stack-ops';
import stringOperationsJa from './ja/string-operations';
import sumAverageJa from './ja/sum-average';
import topologicalSortJa from './ja/topological-sort';
import trieJa from './ja/trie';
import twoPointersJa from './ja/two-pointers';
import twoSumJa from './ja/two-sum';
import validParenthesesJa from './ja/valid-parentheses';
import variablesTypesJa from './ja/variables-types';
import whileLoopJa from './ja/while-loop';
import anagramCheckZh from './zh/anagram-check';
import arithmeticZh from './zh/arithmetic';
import bellmanFordZh from './zh/bellman-ford';
import bfsZh from './zh/bfs';
import binarySearchZh from './zh/binary-search';
import binaryTreeTraversalZh from './zh/binary-tree-traversal';
import bitManipulationZh from './zh/bit-manipulation';
import bubbleSortZh from './zh/bubble-sort';
import coinChangeZh from './zh/coin-change';
import countOccurrencesZh from './zh/count-occurrences';
import countingSortZh from './zh/counting-sort';
import dfsZh from './zh/dfs';
import dijkstraZh from './zh/dijkstra';
import dpBasicsZh from './zh/dp-basics';
import factorialZh from './zh/factorial';
import fibonacciIterativeZh from './zh/fibonacci-iterative';
import fibonacciRecursiveZh from './zh/fibonacci-recursive';
import findMinMaxZh from './zh/find-min-max';
import fizzbuzzZh from './zh/fizzbuzz';
import floydWarshallZh from './zh/floyd-warshall';
import forLoopZh from './zh/for-loop';
import functionsIntroZh from './zh/functions-intro';
import hashMapCountingZh from './zh/hash-map-counting';
import heapSortZh from './zh/heap-sort';
import helloWorldZh from './zh/hello-world';
import ifElseZh from './zh/if-else';
import inputOutputZh from './zh/input-output';
import insertionSortZh from './zh/insertion-sort';
import knapsackZh from './zh/knapsack';
import kruskalsZh from './zh/kruskals';
import lcsZh from './zh/lcs';
import linearSearchZh from './zh/linear-search';
import listsBasicsZh from './zh/lists-basics';
import loopExplorerZh from './zh/loop-explorer';
import mergeSortZh from './zh/merge-sort';
import mergeSortedZh from './zh/merge-sorted';
import palindromeZh from './zh/palindrome';
import queueOpsZh from './zh/queue-ops';
import quickSortZh from './zh/quick-sort';
import recursionBasicsZh from './zh/recursion-basics';
import reverseListZh from './zh/reverse-list';
import segmentTreeZh from './zh/segment-tree';
import selectionSortZh from './zh/selection-sort';
import slidingWindowZh from './zh/sliding-window';
import stackOpsZh from './zh/stack-ops';
import stringOperationsZh from './zh/string-operations';
import sumAverageZh from './zh/sum-average';
import topologicalSortZh from './zh/topological-sort';
import trieZh from './zh/trie';
import twoPointersZh from './zh/two-pointers';
import twoSumZh from './zh/two-sum';
import validParenthesesZh from './zh/valid-parentheses';
import variablesTypesZh from './zh/variables-types';
import whileLoopZh from './zh/while-loop';
import binaryTreeTraversalAr from './ar/binary-tree-traversal';
import anagramCheckHi from './hi/anagram-check';
import arithmeticHi from './hi/arithmetic';
import bellmanFordHi from './hi/bellman-ford';
import bfsHi from './hi/bfs';
import binarySearchHi from './hi/binary-search';
import binaryTreeTraversalHi from './hi/binary-tree-traversal';
import bitManipulationHi from './hi/bit-manipulation';
import bubbleSortHi from './hi/bubble-sort';
import coinChangeHi from './hi/coin-change';
import countOccurrencesHi from './hi/count-occurrences';
import countingSortHi from './hi/counting-sort';
import dfsHi from './hi/dfs';
import dijkstraHi from './hi/dijkstra';
import dpBasicsHi from './hi/dp-basics';
import factorialHi from './hi/factorial';
import fibonacciIterativeHi from './hi/fibonacci-iterative';
import fibonacciRecursiveHi from './hi/fibonacci-recursive';
import findMinMaxHi from './hi/find-min-max';
import fizzbuzzHi from './hi/fizzbuzz';
import floydWarshallHi from './hi/floyd-warshall';
import forLoopHi from './hi/for-loop';
import functionsIntroHi from './hi/functions-intro';
import hashMapCountingHi from './hi/hash-map-counting';
import heapSortHi from './hi/heap-sort';
import helloWorldHi from './hi/hello-world';
import ifElseHi from './hi/if-else';
import inputOutputHi from './hi/input-output';
import insertionSortHi from './hi/insertion-sort';
import knapsackHi from './hi/knapsack';
import kruskalsHi from './hi/kruskals';
import lcsHi from './hi/lcs';
import linearSearchHi from './hi/linear-search';
import listsBasicsHi from './hi/lists-basics';
import loopExplorerHi from './hi/loop-explorer';
import mergeSortHi from './hi/merge-sort';
import mergeSortedHi from './hi/merge-sorted';
import palindromeHi from './hi/palindrome';
import queueOpsHi from './hi/queue-ops';
import quickSortHi from './hi/quick-sort';
import recursionBasicsHi from './hi/recursion-basics';
import reverseListHi from './hi/reverse-list';
import segmentTreeHi from './hi/segment-tree';
import selectionSortHi from './hi/selection-sort';
import slidingWindowHi from './hi/sliding-window';
import stackOpsHi from './hi/stack-ops';
import stringOperationsHi from './hi/string-operations';
import sumAverageHi from './hi/sum-average';
import topologicalSortHi from './hi/topological-sort';
import trieHi from './hi/trie';
import twoPointersHi from './hi/two-pointers';
import twoSumHi from './hi/two-sum';
import validParenthesesHi from './hi/valid-parentheses';
import variablesTypesHi from './hi/variables-types';
import whileLoopHi from './hi/while-loop';
import anagramCheckHinglish from './hinglish/anagram-check';
import arithmeticHinglish from './hinglish/arithmetic';
import bellmanFordHinglish from './hinglish/bellman-ford';
import bfsHinglish from './hinglish/bfs';
import binarySearchHinglish from './hinglish/binary-search';
import binaryTreeTraversalHinglish from './hinglish/binary-tree-traversal';
import bitManipulationHinglish from './hinglish/bit-manipulation';
import bubbleSortHinglish from './hinglish/bubble-sort';
import coinChangeHinglish from './hinglish/coin-change';
import countOccurrencesHinglish from './hinglish/count-occurrences';
import countingSortHinglish from './hinglish/counting-sort';
import dfsHinglish from './hinglish/dfs';
import dijkstraHinglish from './hinglish/dijkstra';
import dpBasicsHinglish from './hinglish/dp-basics';
import factorialHinglish from './hinglish/factorial';
import fibonacciIterativeHinglish from './hinglish/fibonacci-iterative';
import fibonacciRecursiveHinglish from './hinglish/fibonacci-recursive';
import findMinMaxHinglish from './hinglish/find-min-max';
import fizzbuzzHinglish from './hinglish/fizzbuzz';
import floydWarshallHinglish from './hinglish/floyd-warshall';
import forLoopHinglish from './hinglish/for-loop';
import functionsIntroHinglish from './hinglish/functions-intro';
import hashMapCountingHinglish from './hinglish/hash-map-counting';
import heapSortHinglish from './hinglish/heap-sort';
import helloWorldHinglish from './hinglish/hello-world';
import ifElseHinglish from './hinglish/if-else';
import inputOutputHinglish from './hinglish/input-output';
import insertionSortHinglish from './hinglish/insertion-sort';
import knapsackHinglish from './hinglish/knapsack';
import kruskalsHinglish from './hinglish/kruskals';
import lcsHinglish from './hinglish/lcs';
import linearSearchHinglish from './hinglish/linear-search';
import listsBasicsHinglish from './hinglish/lists-basics';
import loopExplorerHinglish from './hinglish/loop-explorer';
import mergeSortHinglish from './hinglish/merge-sort';
import mergeSortedHinglish from './hinglish/merge-sorted';
import palindromeHinglish from './hinglish/palindrome';
import queueOpsHinglish from './hinglish/queue-ops';
import quickSortHinglish from './hinglish/quick-sort';
import recursionBasicsHinglish from './hinglish/recursion-basics';
import reverseListHinglish from './hinglish/reverse-list';
import segmentTreeHinglish from './hinglish/segment-tree';
import selectionSortHinglish from './hinglish/selection-sort';
import slidingWindowHinglish from './hinglish/sliding-window';
import stackOpsHinglish from './hinglish/stack-ops';
import stringOperationsHinglish from './hinglish/string-operations';
import sumAverageHinglish from './hinglish/sum-average';
import topologicalSortHinglish from './hinglish/topological-sort';
import trieHinglish from './hinglish/trie';
import twoPointersHinglish from './hinglish/two-pointers';
import twoSumHinglish from './hinglish/two-sum';
import validParenthesesHinglish from './hinglish/valid-parentheses';
import variablesTypesHinglish from './hinglish/variables-types';
import whileLoopHinglish from './hinglish/while-loop';

// Optional: English overlays can hold richer explanations without touching base data.
import anagramCheckEn from './en/anagram-check';
import arithmeticEn from './en/arithmetic';
import bellmanFordEn from './en/bellman-ford';
import bfsEn from './en/bfs';
import binarySearchEn from './en/binary-search';
import binaryTreeTraversalEn from './en/binary-tree-traversal';
import bitManipulationEn from './en/bit-manipulation';
import bubbleSortEn from './en/bubble-sort';
import coinChangeEn from './en/coin-change';
import countOccurrencesEn from './en/count-occurrences';
import countingSortEn from './en/counting-sort';
import dfsEn from './en/dfs';
import dijkstraEn from './en/dijkstra';
import dpBasicsEn from './en/dp-basics';
import factorialEn from './en/factorial';
import fibonacciIterativeEn from './en/fibonacci-iterative';
import fibonacciRecursiveEn from './en/fibonacci-recursive';
import findMinMaxEn from './en/find-min-max';
import fizzbuzzEn from './en/fizzbuzz';
import floydWarshallEn from './en/floyd-warshall';
import forLoopEn from './en/for-loop';
import functionsIntroEn from './en/functions-intro';
import hashMapCountingEn from './en/hash-map-counting';
import heapSortEn from './en/heap-sort';
import helloWorldEn from './en/hello-world';
import ifElseEn from './en/if-else';
import inputOutputEn from './en/input-output';
import insertionSortEn from './en/insertion-sort';
import knapsackEn from './en/knapsack';
import kruskalsEn from './en/kruskals';
import lcsEn from './en/lcs';
import linearSearchEn from './en/linear-search';
import listsBasicsEn from './en/lists-basics';
import loopExplorerEn from './en/loop-explorer';
import mergeSortEn from './en/merge-sort';
import mergeSortedEn from './en/merge-sorted';
import palindromeEn from './en/palindrome';
import queueOpsEn from './en/queue-ops';
import quickSortEn from './en/quick-sort';
import recursionBasicsEn from './en/recursion-basics';
import reverseListEn from './en/reverse-list';
import segmentTreeEn from './en/segment-tree';
import selectionSortEn from './en/selection-sort';
import slidingWindowEn from './en/sliding-window';
import stackOpsEn from './en/stack-ops';
import stringOperationsEn from './en/string-operations';
import sumAverageEn from './en/sum-average';
import topologicalSortEn from './en/topological-sort';
import trieEn from './en/trie';
import twoPointersEn from './en/two-pointers';
import twoSumEn from './en/two-sum';
import validParenthesesEn from './en/valid-parentheses';
import variablesTypesEn from './en/variables-types';
import whileLoopEn from './en/while-loop';

const englishOverlays: LocaleOverlayMap = {
  'anagram-check': anagramCheckEn,
  arithmetic: arithmeticEn,
  'bellman-ford': bellmanFordEn,
  bfs: bfsEn,
  'binary-search': binarySearchEn,
  'binary-tree-traversal': binaryTreeTraversalEn,
  'bit-manipulation': bitManipulationEn,
  'bubble-sort': bubbleSortEn,
  'coin-change': coinChangeEn,
  'count-occurrences': countOccurrencesEn,
  'counting-sort': countingSortEn,
  dfs: dfsEn,
  dijkstra: dijkstraEn,
  'dp-basics': dpBasicsEn,
  factorial: factorialEn,
  'fibonacci-iterative': fibonacciIterativeEn,
  'fibonacci-recursive': fibonacciRecursiveEn,
  'find-min-max': findMinMaxEn,
  fizzbuzz: fizzbuzzEn,
  'floyd-warshall': floydWarshallEn,
  'for-loop': forLoopEn,
  'functions-intro': functionsIntroEn,
  'hash-map-counting': hashMapCountingEn,
  'heap-sort': heapSortEn,
  'hello-world': helloWorldEn,
  'if-else': ifElseEn,
  'input-output': inputOutputEn,
  'insertion-sort': insertionSortEn,
  knapsack: knapsackEn,
  kruskals: kruskalsEn,
  lcs: lcsEn,
  'linear-search': linearSearchEn,
  'lists-basics': listsBasicsEn,
  'loop-explorer': loopExplorerEn,
  'merge-sort': mergeSortEn,
  'merge-sorted': mergeSortedEn,
  palindrome: palindromeEn,
  'queue-ops': queueOpsEn,
  'quick-sort': quickSortEn,
  'recursion-basics': recursionBasicsEn,
  'reverse-list': reverseListEn,
  'segment-tree': segmentTreeEn,
  'selection-sort': selectionSortEn,
  'sliding-window': slidingWindowEn,
  'stack-ops': stackOpsEn,
  'string-operations': stringOperationsEn,
  'sum-average': sumAverageEn,
  'topological-sort': topologicalSortEn,
  trie: trieEn,
  'two-pointers': twoPointersEn,
  'two-sum': twoSumEn,
  'valid-parentheses': validParenthesesEn,
  'variables-types': variablesTypesEn,
  'while-loop': whileLoopEn,
};

const localeOverrides: Record<string, LocaleOverlayMap> = {
  fr: {
    'anagram-check': anagramCheckFr,
    arithmetic: arithmeticFr,
    'bellman-ford': bellmanFordFr,
    bfs: bfsFr,
    'binary-search': binarySearchFr,
    'binary-tree-traversal': binaryTreeTraversalFr,
    'bit-manipulation': bitManipulationFr,
    'bubble-sort': bubbleSortFr,
    'coin-change': coinChangeFr,
    'count-occurrences': countOccurrencesFr,
    'counting-sort': countingSortFr,
    dfs: dfsFr,
    dijkstra: dijkstraFr,
    'dp-basics': dpBasicsFr,
    factorial: factorialFr,
    'fibonacci-iterative': fibonacciIterativeFr,
    'fibonacci-recursive': fibonacciRecursiveFr,
    'find-min-max': findMinMaxFr,
    fizzbuzz: fizzbuzzFr,
    'floyd-warshall': floydWarshallFr,
    'for-loop': forLoopFr,
    'functions-intro': functionsIntroFr,
    'hash-map-counting': hashMapCountingFr,
    'heap-sort': heapSortFr,
    'hello-world': helloWorldFr,
    'if-else': ifElseFr,
    'input-output': inputOutputFr,
    'insertion-sort': insertionSortFr,
    knapsack: knapsackFr,
    kruskals: kruskalsFr,
    lcs: lcsFr,
    'linear-search': linearSearchFr,
    'lists-basics': listsBasicsFr,
    'loop-explorer': loopExplorerFr,
    'merge-sort': mergeSortFr,
    'merge-sorted': mergeSortedFr,
    palindrome: palindromeFr,
    'queue-ops': queueOpsFr,
    'quick-sort': quickSortFr,
    'recursion-basics': recursionBasicsFr,
    'reverse-list': reverseListFr,
    'segment-tree': segmentTreeFr,
    'selection-sort': selectionSortFr,
    'sliding-window': slidingWindowFr,
    'stack-ops': stackOpsFr,
    'string-operations': stringOperationsFr,
    'sum-average': sumAverageFr,
    'topological-sort': topologicalSortFr,
    trie: trieFr,
    'two-pointers': twoPointersFr,
    'two-sum': twoSumFr,
    'valid-parentheses': validParenthesesFr,
    'variables-types': variablesTypesFr,
    'while-loop': whileLoopFr,
  },
  es: {
    'anagram-check': anagramCheckEs,
    arithmetic: arithmeticEs,
    'bellman-ford': bellmanFordEs,
    bfs: bfsEs,
    'binary-search': binarySearchEs,
    'binary-tree-traversal': binaryTreeTraversalEs,
    'bit-manipulation': bitManipulationEs,
    'bubble-sort': bubbleSortEs,
    'coin-change': coinChangeEs,
    'count-occurrences': countOccurrencesEs,
    'counting-sort': countingSortEs,
    dfs: dfsEs,
    dijkstra: dijkstraEs,
    'dp-basics': dpBasicsEs,
    factorial: factorialEs,
    'fibonacci-iterative': fibonacciIterativeEs,
    'fibonacci-recursive': fibonacciRecursiveEs,
    'find-min-max': findMinMaxEs,
    fizzbuzz: fizzbuzzEs,
    'floyd-warshall': floydWarshallEs,
    'for-loop': forLoopEs,
    'functions-intro': functionsIntroEs,
    'hash-map-counting': hashMapCountingEs,
    'heap-sort': heapSortEs,
    'hello-world': helloWorldEs,
    'if-else': ifElseEs,
    'input-output': inputOutputEs,
    'insertion-sort': insertionSortEs,
    knapsack: knapsackEs,
    kruskals: kruskalsEs,
    lcs: lcsEs,
    'linear-search': linearSearchEs,
    'lists-basics': listsBasicsEs,
    'loop-explorer': loopExplorerEs,
    'merge-sort': mergeSortEs,
    'merge-sorted': mergeSortedEs,
    palindrome: palindromeEs,
    'queue-ops': queueOpsEs,
    'quick-sort': quickSortEs,
    'recursion-basics': recursionBasicsEs,
    'reverse-list': reverseListEs,
    'segment-tree': segmentTreeEs,
    'selection-sort': selectionSortEs,
    'sliding-window': slidingWindowEs,
    'stack-ops': stackOpsEs,
    'string-operations': stringOperationsEs,
    'sum-average': sumAverageEs,
    'topological-sort': topologicalSortEs,
    trie: trieEs,
    'two-pointers': twoPointersEs,
    'two-sum': twoSumEs,
    'valid-parentheses': validParenthesesEs,
    'variables-types': variablesTypesEs,
    'while-loop': whileLoopEs,
  },
  de: {
    'anagram-check': anagramCheckDe,
    arithmetic: arithmeticDe,
    'bellman-ford': bellmanFordDe,
    bfs: bfsDe,
    'binary-search': binarySearchDe,
    'binary-tree-traversal': binaryTreeTraversalDe,
    'bit-manipulation': bitManipulationDe,
    'bubble-sort': bubbleSortDe,
    'coin-change': coinChangeDe,
    'count-occurrences': countOccurrencesDe,
    'counting-sort': countingSortDe,
    dfs: dfsDe,
    dijkstra: dijkstraDe,
    'dp-basics': dpBasicsDe,
    factorial: factorialDe,
    'fibonacci-iterative': fibonacciIterativeDe,
    'fibonacci-recursive': fibonacciRecursiveDe,
    'find-min-max': findMinMaxDe,
    fizzbuzz: fizzbuzzDe,
    'floyd-warshall': floydWarshallDe,
    'for-loop': forLoopDe,
    'functions-intro': functionsIntroDe,
    'hash-map-counting': hashMapCountingDe,
    'heap-sort': heapSortDe,
    'hello-world': helloWorldDe,
    'if-else': ifElseDe,
    'input-output': inputOutputDe,
    'insertion-sort': insertionSortDe,
    knapsack: knapsackDe,
    kruskals: kruskalsDe,
    lcs: lcsDe,
    'linear-search': linearSearchDe,
    'lists-basics': listsBasicsDe,
    'loop-explorer': loopExplorerDe,
    'merge-sort': mergeSortDe,
    'merge-sorted': mergeSortedDe,
    palindrome: palindromeDe,
    'queue-ops': queueOpsDe,
    'quick-sort': quickSortDe,
    'recursion-basics': recursionBasicsDe,
    'reverse-list': reverseListDe,
    'segment-tree': segmentTreeDe,
    'selection-sort': selectionSortDe,
    'sliding-window': slidingWindowDe,
    'stack-ops': stackOpsDe,
    'string-operations': stringOperationsDe,
    'sum-average': sumAverageDe,
    'topological-sort': topologicalSortDe,
    trie: trieDe,
    'two-pointers': twoPointersDe,
    'two-sum': twoSumDe,
    'valid-parentheses': validParenthesesDe,
    'variables-types': variablesTypesDe,
    'while-loop': whileLoopDe,
  },
  ja: {
    'anagram-check': anagramCheckJa,
    arithmetic: arithmeticJa,
    'bellman-ford': bellmanFordJa,
    bfs: bfsJa,
    'binary-search': binarySearchJa,
    'binary-tree-traversal': binaryTreeTraversalJa,
    'bit-manipulation': bitManipulationJa,
    'bubble-sort': bubbleSortJa,
    'coin-change': coinChangeJa,
    'count-occurrences': countOccurrencesJa,
    'counting-sort': countingSortJa,
    dfs: dfsJa,
    dijkstra: dijkstraJa,
    'dp-basics': dpBasicsJa,
    factorial: factorialJa,
    'fibonacci-iterative': fibonacciIterativeJa,
    'fibonacci-recursive': fibonacciRecursiveJa,
    'find-min-max': findMinMaxJa,
    fizzbuzz: fizzbuzzJa,
    'floyd-warshall': floydWarshallJa,
    'for-loop': forLoopJa,
    'functions-intro': functionsIntroJa,
    'hash-map-counting': hashMapCountingJa,
    'heap-sort': heapSortJa,
    'hello-world': helloWorldJa,
    'if-else': ifElseJa,
    'input-output': inputOutputJa,
    'insertion-sort': insertionSortJa,
    knapsack: knapsackJa,
    kruskals: kruskalsJa,
    lcs: lcsJa,
    'linear-search': linearSearchJa,
    'lists-basics': listsBasicsJa,
    'loop-explorer': loopExplorerJa,
    'merge-sort': mergeSortJa,
    'merge-sorted': mergeSortedJa,
    palindrome: palindromeJa,
    'queue-ops': queueOpsJa,
    'quick-sort': quickSortJa,
    'recursion-basics': recursionBasicsJa,
    'reverse-list': reverseListJa,
    'segment-tree': segmentTreeJa,
    'selection-sort': selectionSortJa,
    'sliding-window': slidingWindowJa,
    'stack-ops': stackOpsJa,
    'string-operations': stringOperationsJa,
    'sum-average': sumAverageJa,
    'topological-sort': topologicalSortJa,
    trie: trieJa,
    'two-pointers': twoPointersJa,
    'two-sum': twoSumJa,
    'valid-parentheses': validParenthesesJa,
    'variables-types': variablesTypesJa,
    'while-loop': whileLoopJa,
  },
  zh: {
    'anagram-check': anagramCheckZh,
    arithmetic: arithmeticZh,
    'bellman-ford': bellmanFordZh,
    bfs: bfsZh,
    'binary-search': binarySearchZh,
    'binary-tree-traversal': binaryTreeTraversalZh,
    'bit-manipulation': bitManipulationZh,
    'bubble-sort': bubbleSortZh,
    'coin-change': coinChangeZh,
    'count-occurrences': countOccurrencesZh,
    'counting-sort': countingSortZh,
    dfs: dfsZh,
    dijkstra: dijkstraZh,
    'dp-basics': dpBasicsZh,
    factorial: factorialZh,
    'fibonacci-iterative': fibonacciIterativeZh,
    'fibonacci-recursive': fibonacciRecursiveZh,
    'find-min-max': findMinMaxZh,
    fizzbuzz: fizzbuzzZh,
    'floyd-warshall': floydWarshallZh,
    'for-loop': forLoopZh,
    'functions-intro': functionsIntroZh,
    'hash-map-counting': hashMapCountingZh,
    'heap-sort': heapSortZh,
    'hello-world': helloWorldZh,
    'if-else': ifElseZh,
    'input-output': inputOutputZh,
    'insertion-sort': insertionSortZh,
    knapsack: knapsackZh,
    kruskals: kruskalsZh,
    lcs: lcsZh,
    'linear-search': linearSearchZh,
    'lists-basics': listsBasicsZh,
    'loop-explorer': loopExplorerZh,
    'merge-sort': mergeSortZh,
    'merge-sorted': mergeSortedZh,
    palindrome: palindromeZh,
    'queue-ops': queueOpsZh,
    'quick-sort': quickSortZh,
    'recursion-basics': recursionBasicsZh,
    'reverse-list': reverseListZh,
    'segment-tree': segmentTreeZh,
    'selection-sort': selectionSortZh,
    'sliding-window': slidingWindowZh,
    'stack-ops': stackOpsZh,
    'string-operations': stringOperationsZh,
    'sum-average': sumAverageZh,
    'topological-sort': topologicalSortZh,
    trie: trieZh,
    'two-pointers': twoPointersZh,
    'two-sum': twoSumZh,
    'valid-parentheses': validParenthesesZh,
    'variables-types': variablesTypesZh,
    'while-loop': whileLoopZh,
  },
  ar: {
    'binary-tree-traversal': binaryTreeTraversalAr,
  },
  hi: {
    'anagram-check': anagramCheckHi,
    arithmetic: arithmeticHi,
    'bellman-ford': bellmanFordHi,
    bfs: bfsHi,
    'binary-search': binarySearchHi,
    'binary-tree-traversal': binaryTreeTraversalHi,
    'bit-manipulation': bitManipulationHi,
    'bubble-sort': bubbleSortHi,
    'coin-change': coinChangeHi,
    'count-occurrences': countOccurrencesHi,
    'counting-sort': countingSortHi,
    dfs: dfsHi,
    dijkstra: dijkstraHi,
    'dp-basics': dpBasicsHi,
    factorial: factorialHi,
    'fibonacci-iterative': fibonacciIterativeHi,
    'fibonacci-recursive': fibonacciRecursiveHi,
    'find-min-max': findMinMaxHi,
    fizzbuzz: fizzbuzzHi,
    'floyd-warshall': floydWarshallHi,
    'for-loop': forLoopHi,
    'functions-intro': functionsIntroHi,
    'hash-map-counting': hashMapCountingHi,
    'heap-sort': heapSortHi,
    'hello-world': helloWorldHi,
    'if-else': ifElseHi,
    'input-output': inputOutputHi,
    'insertion-sort': insertionSortHi,
    knapsack: knapsackHi,
    kruskals: kruskalsHi,
    lcs: lcsHi,
    'linear-search': linearSearchHi,
    'lists-basics': listsBasicsHi,
    'loop-explorer': loopExplorerHi,
    'merge-sort': mergeSortHi,
    'merge-sorted': mergeSortedHi,
    palindrome: palindromeHi,
    'queue-ops': queueOpsHi,
    'quick-sort': quickSortHi,
    'recursion-basics': recursionBasicsHi,
    'reverse-list': reverseListHi,
    'segment-tree': segmentTreeHi,
    'selection-sort': selectionSortHi,
    'sliding-window': slidingWindowHi,
    'stack-ops': stackOpsHi,
    'string-operations': stringOperationsHi,
    'sum-average': sumAverageHi,
    'topological-sort': topologicalSortHi,
    trie: trieHi,
    'two-pointers': twoPointersHi,
    'two-sum': twoSumHi,
    'valid-parentheses': validParenthesesHi,
    'variables-types': variablesTypesHi,
    'while-loop': whileLoopHi,
  },
  hinglish: {
    'anagram-check': anagramCheckHinglish,
    arithmetic: arithmeticHinglish,
    'bellman-ford': bellmanFordHinglish,
    bfs: bfsHinglish,
    'binary-search': binarySearchHinglish,
    'binary-tree-traversal': binaryTreeTraversalHinglish,
    'bit-manipulation': bitManipulationHinglish,
    'bubble-sort': bubbleSortHinglish,
    'coin-change': coinChangeHinglish,
    'count-occurrences': countOccurrencesHinglish,
    'counting-sort': countingSortHinglish,
    dfs: dfsHinglish,
    dijkstra: dijkstraHinglish,
    'dp-basics': dpBasicsHinglish,
    factorial: factorialHinglish,
    'fibonacci-iterative': fibonacciIterativeHinglish,
    'fibonacci-recursive': fibonacciRecursiveHinglish,
    'find-min-max': findMinMaxHinglish,
    fizzbuzz: fizzbuzzHinglish,
    'floyd-warshall': floydWarshallHinglish,
    'for-loop': forLoopHinglish,
    'functions-intro': functionsIntroHinglish,
    'hash-map-counting': hashMapCountingHinglish,
    'heap-sort': heapSortHinglish,
    'hello-world': helloWorldHinglish,
    'if-else': ifElseHinglish,
    'input-output': inputOutputHinglish,
    'insertion-sort': insertionSortHinglish,
    knapsack: knapsackHinglish,
    kruskals: kruskalsHinglish,
    lcs: lcsHinglish,
    'linear-search': linearSearchHinglish,
    'lists-basics': listsBasicsHinglish,
    'loop-explorer': loopExplorerHinglish,
    'merge-sort': mergeSortHinglish,
    'merge-sorted': mergeSortedHinglish,
    palindrome: palindromeHinglish,
    'queue-ops': queueOpsHinglish,
    'quick-sort': quickSortHinglish,
    'recursion-basics': recursionBasicsHinglish,
    'reverse-list': reverseListHinglish,
    'segment-tree': segmentTreeHinglish,
    'selection-sort': selectionSortHinglish,
    'sliding-window': slidingWindowHinglish,
    'stack-ops': stackOpsHinglish,
    'string-operations': stringOperationsHinglish,
    'sum-average': sumAverageHinglish,
    'topological-sort': topologicalSortHinglish,
    trie: trieHinglish,
    'two-pointers': twoPointersHinglish,
    'two-sum': twoSumHinglish,
    'valid-parentheses': validParenthesesHinglish,
    'variables-types': variablesTypesHinglish,
    'while-loop': whileLoopHinglish,
  },
};

function withEnglishFallback(overrides: LocaleOverlayMap): LocaleOverlayMap {
  const merged: LocaleOverlayMap = {};

  for (const [lessonId, overlay] of Object.entries(overrides)) {
    const base = englishOverlays[lessonId];
    merged[lessonId] = {
      ...(base ?? {}),
      ...overlay,
      explanation: overlay.explanation ?? base?.explanation,
    };
  }

  return merged;
}

const overlayByLocale: Record<string, LocaleOverlayMap> = {
  en: englishOverlays,
  fr: withEnglishFallback(localeOverrides.fr),
  es: withEnglishFallback(localeOverrides.es),
  de: withEnglishFallback(localeOverrides.de),
  ja: withEnglishFallback(localeOverrides.ja),
  zh: withEnglishFallback(localeOverrides.zh),
  ar: withEnglishFallback(localeOverrides.ar),
  hi: withEnglishFallback(localeOverrides.hi),
  hinglish: withEnglishFallback(localeOverrides.hinglish),
};

export function getLocaleOverlays(locale: string | null | undefined): LocaleOverlayMap | undefined {
  const key = (locale || 'en').toLowerCase();
  return overlayByLocale[key];
}

export type { LessonLocaleOverlay, LocaleOverlayMap };
