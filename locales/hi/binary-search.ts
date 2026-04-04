import type { LessonLocaleOverlay } from '../types';

const binarySearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Binary Search sorted array को बार-बार आधा करके target ढूंढता है।',
      analogy: 'जैसे dictionary में शब्द खोजना: बीच से खोलो, बाएं या दाएं जाओ, फिर दोहराओ।',
      steps: [
        'low = 0 और high = n - 1 से शुरू करें।',
        'mid = (low + high) // 2 निकालें।',
        'अगर arr[mid] == target हो तो mid return करें।',
        'अगर target छोटा है तो high = mid - 1 करें।',
        'वरना low = mid + 1 करें; जब तक low <= high हो तब तक दोहराएं।',
      ],
      visual: '[1 3 5 7 9] -> mid=5 -> target बड़ा है -> दाईं तरफ -> 7 मिला।',
      commonMistakes: [
        'low/high बदलने के बाद mid दुबारा calculate नहीं करना।',
        'loop में < लगाना, जिससे आखिरी element miss हो सकता है।',
        'mid = (low + high) overflow कर सकता है; low + (high - low) // 2 बेहतर है।',
      ],
      practice: [
        '7 elements वाले sorted array पर present और absent target का trace बनाएं।',
        'target न मिले तो insertion index return करने वाला version लिखें।',
        'बताएं कि unsorted array पर binary search क्यों fail होती है।',
      ],
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Binary Search monotonic condition पर divide-and-conquer strategy है; हर step में आधी range हटती है।',
      analogy: 'Decision tree जिसकी height लगभग log2(n) होती है।',
      steps: [
        'Inclusive bounds [low, high] maintain करें।',
        'mid = low + ((high - low) >> 1) overflow-safe formula है।',
        'अगर arr[mid] से relation के आधार पर सही half चुनें।',
        'Invariant: target मौजूद है तो वह हमेशा current bounds के अंदर रहेगा।',
        'low > high होने पर search खत्म; insertion point low होता है।',
      ],
      visual: '[0..n-1] -> [0..mid-1] या [mid+1..n-1] -> फिर वही process।',
      commonMistakes: [
        'low = mid या high = mid लिखना, जिससे infinite loop बन सकता है।',
        'duplicates के लिए first/last occurrence policy define न करना।',
        'sorted precondition validate किए बिना algorithm चलाना।',
      ],
      practice: [
        'lower_bound और upper_bound implement करें।',
        'loop invariant का short proof लिखें।',
        'rotated sorted array के लिए modified binary search बनाएं।',
      ],
      timeComplexity: 'Theta(log n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default binarySearch;
