import type { LessonLocaleOverlay } from '../types';

const bubbleSort: LessonLocaleOverlay = {
  prompt: 'array को [9, 1, 5, 3, 7] में बदलें। Predict करें कि array sorted होने से पहले कितने swaps लगेंगे।',
  hint: 'timeline में orange swap events गिनें। हर swap बड़े element को एक position दाईं ओर ले जाता है।',
  useCases: [
    'sorting concepts सिखाने के लिए - सबसे visual algorithm',
    'लगभग sorted arrays detect करना (early exit optimization)',
    'embedded systems में जहाँ memory कम हो और O(1) space मायने रखता हो',
  ],
  approach:
    'Bubble sort हर adjacent pair को compare करता है और order गलत होने पर swap करता है। हर full outer pass के बाद सबसे बड़ा unsorted element अपनी final position पर पहुंच जाता है। हम nested loops इस्तेमाल करते हैं: outer loop passes (n-1) को control करता है, और inner loop comparisons को (हर pass में छोटा होता जाता है क्योंकि अंत का हिस्सा पहले से sorted है)। बड़े data पर यह efficient नहीं है - O(n²) - लेकिन comparison-based sorting सीखने के लिए यह सबसे visual algorithm है।',
  executionFrames: [
    {
      summary: 'arr = [5, 3, 8, 1, 2] - 5 अनसॉर्टेड elements.',
      why: 'हम values को list में store करते हैं ताकि elements को index (arr[j], arr[j+1]) से access कर सकें। Bubble sort एक in-place algorithm है - हम उसी list को modify करते हैं, नई list नहीं बनाते; इसलिए space complexity O(1) रहती है।',
    },
    {
      summary: 'n = 5 - हमें maximum 4 outer passes चाहिए।',
      why: 'हम n = len(arr) को एक बार store करते हैं, हर iteration में len() नहीं बुलाते। यह micro-optimization है, और loop bounds पढ़ना आसान बनाता है। हमें n-1 outer passes चाहिए क्योंकि n-1 passes के बाद सबसे छोटा element position 0 पर तय हो जाता है।',
    },
    {
      summary: 'arr[0]=5 > arr[1]=3 - swap जरूरी है।',
      why: 'हम arr[j] > arr[j+1] (strict greater-than) compare करते हैं ताकि stability बनी रहे: equal elements swap नहीं करते, इसलिए उनका relative order बना रहता है। यही comparison हर comparison-based sort का core है।',
    },
    {
      summary: 'Python tuple swap - temp variable की जरूरत नहीं।',
      why: 'arr[j], arr[j+1] = arr[j+1], arr[j] Python की elegant simultaneous assignment है। C में temp variable चाहिए होता। Python पहले right side को tuple की तरह evaluate करता है, फिर unpack करता है, इसलिए overwrite से पहले दोनों values safe रहती हैं।',
    },
    {
      summary: '8 right की तरफ bubble हो रहा है - यह अब तक का सबसे बड़ा element है।',
      why: 'ध्यान दें कि 8 दो steps में दो positions right गया। हर pass में सबसे बड़ा element अंत तक bubble होता है - इसी वजह से नाम Bubble sort है। इस outer pass (i=0) के बाद 8 अपनी final position पर होगा।',
    },
    {
      summary: '8 अब index 4 पर अपनी final position में है।',
      why: "inner loop n - i - 1 बार चलता है। '- i' optimization है: pass i के बाद आखिरी i elements पहले से sorted और final होते हैं। उन्हें दोबारा compare करने की जरूरत नहीं, इससे total work कम होता है।",
    },
    {
      summary: '5 right की तरफ bubble करता है। [3, 5, 1, 2, 8] -> [3, 1, 2, 5, 8]',
      why: 'हर outer pass एक और element को settle करता है। pass 2 के बाद 5 और 8 दोनों final हो जाते हैं। worst case में भी algorithm progress guarantee करता है: n-1 passes हमेशा sorted array देते हैं।',
    },
    {
      summary: 'Final sorted array: [1, 2, 3, 5, 8].',
      why: 'Total comparisons: n×(n-1)/2 = 10 जब n=5। इसी कारण Bubble sort O(n²) है - comparisons quadratically बढ़ते हैं। n=1000 पर लगभग 500,000 comparisons लगते हैं। Merge Sort इसे लगभग 10,000 में कर देता है। Bubble sort learning के लिए अच्छा है, production के लिए नहीं।',
    },
  ],
  explanation: {
    simple: {
      overview:
        'Bubble Sort adjacent elements को compare करता है और गलत order होने पर swap करता है। हर pass के बाद सबसे बड़ा pending element अंत में पहुंच जाता है।',
      analogy:
        'पानी में बुलबुले ऊपर आते हैं, वैसे ही बड़े values हर round में ऊपर (right side) जाते हैं।',
      steps: [
        'list पर iterate करें और arr[j] को arr[j+1] से compare करें।',
        'अगर arr[j] > arr[j+1] हो तो swap करें।',
        'एक pass के बाद सबसे बड़ा element last position पर fix हो जाता है।',
        'अगले pass में range कम रखें क्योंकि tail already sorted है।',
        'अगर किसी pass में swap नहीं हुआ तो early stop करें।',
      ],
      visual: 'Pass 1: [5,3,8,1,2] -> [3,5,1,2,8]; फिर हर pass में checking window छोटी होती जाती है।',
      commonMistakes: [
        'inner-loop bound कम न करना।',
        '>= use करना और stability खो देना।',
        'zero swaps वाली pass पर break न करना।',
      ],
      practice: [
        'already sorted input पर early exit के साथ/बिना comparison count निकालें।',
        'explain करें Bubble Sort stable क्यों है।',
        'logic बदलकर descending sort करें।',
      ],
      timeComplexity: 'O(n²) worst/average, O(n) best with early exit',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview:
        'Bubble Sort n-1 passes करता है। pass i के बाद unsorted हिस्से का maximum अपनी final position पर पहुंच जाता है।',
      analogy:
        'जैसे कई rounds में छंटाई होती है और बड़े पत्थर बार-बार right side की तरफ जाते हैं।',
      steps: [
        'swapped=false रखकर j को 0 से n-i-2 तक चलाएं।',
        'arr[j] > arr[j+1] पर swap करें।',
        'अगर पूरे pass में swap न हो तो array sorted है (break)।',
        'pass i के बाद last i elements final हो जाते हैं।',
        'i=n-2 तक या early break तक repeat करें।',
      ],
      visual: 'scan range staircase की तरह घटता है: n-1, n-2, n-3...',
      commonMistakes: [
        'inner loop में off-by-one error।',
        'हर iteration में len(arr) दोबारा निकालना।',
        'wrong key compare करके गलत sort order पाना।',
      ],
      practice: [
        'strict > condition से stability का formal proof लिखें।',
        'without early exit exact comparison count derive करें।',
        'Cocktail Sort implement करके swap count compare करें।',
      ],
      timeComplexity: 'O(n²) comparisons, O(n²) swaps worst case',
      spaceComplexity: 'O(1) auxiliary',
    },
  },
};

export default bubbleSort;
