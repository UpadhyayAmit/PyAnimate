import type { LessonLocaleOverlay } from '../types';

const bubbleSort: LessonLocaleOverlay = {
  prompt: 'array ko [9, 1, 5, 3, 7] pe change karo. Predict karo sorted hone se pehle kitne swaps lagenge.',
  hint: 'timeline me orange swap events count karo. Har swap bada element ek position right le jata hai.',
  useCases: [
    'sorting concepts samjhane ke liye - sabse visual algorithm',
    'almost sorted arrays detect karne ke liye (early exit optimization)',
    'embedded systems jahan memory tight ho aur O(1) space matter karta ho',
  ],
  approach:
    'Bubble sort adjacent elements compare karta hai aur order galat ho to swap kar deta hai. Har outer pass ke baad sabse bada unsorted element apni final position pe pahunch jata hai. Hum nested loops use karte hain: outer loop passes (n-1) control karta hai, aur inner loop comparisons (har pass me chhota hota hai kyunki end already sorted hota hai). Bade data pe yeh efficient nahi hai - O(n²) - but learning ke liye yeh sabse visual sorting algorithm hai.',
  executionFrames: [
    {
      summary: 'arr = [5, 3, 8, 1, 2] - 5 unsorted elements.',
      why: 'Hum values ko list me store karte hain taaki index (arr[j], arr[j+1]) se elements access kar sakein. Bubble sort in-place algorithm hai - hum same list modify karte hain, nayi list nahi banate, isliye space complexity O(1) rehti hai.',
    },
    {
      summary: 'n = 5 - maximum 4 outer passes lagenge.',
      why: 'Hum n = len(arr) ek baar store karte hain, baar-baar len() call nahi karte. Yeh micro-optimization bhi hai aur loop bounds samajhna bhi easy ho jata hai. n-1 outer passes isliye chahiye kyunki n-1 passes ke baad smallest element index 0 par pakka hota hai.',
    },
    {
      summary: 'arr[0]=5 > arr[1]=3 - swap needed.',
      why: 'Hum arr[j] > arr[j+1] (strict greater-than) use karte hain taaki stability bani rahe. Equal elements swap nahi hote, to unka relative order same rehta hai. Yehi comparison comparison-based sorting ka core hai.',
    },
    {
      summary: 'Python tuple swap - temp variable ki zarurat nahi.',
      why: 'arr[j], arr[j+1] = arr[j+1], arr[j] Python ki elegant simultaneous assignment hai. C me temp variable chahiye hota. Python pehle right side evaluate karta hai as tuple, phir unpack karta hai, to overwrite se pehle dono values safe hoti hain.',
    },
    {
      summary: '8 right side bubble kar raha hai - ab tak ka sabse bada element hai.',
      why: 'Dekhna, 8 do steps me do positions right chala gaya. Har pass me largest element end tak bubble hota hai - isi liye naam Bubble sort hai. Is outer pass (i=0) ke baad 8 final position pe hoga.',
    },
    {
      summary: '8 ab index 4 par final position me hai.',
      why: "inner loop n - i - 1 times chalta hai. '- i' optimization hai: pass i ke baad last i elements already sorted aur final hote hain. Unhe dobara compare karne ki need nahi hoti, aur kaafi work bach jata hai.",
    },
    {
      summary: '5 right side bubble karta hai. [3, 5, 1, 2, 8] -> [3, 1, 2, 5, 8]',
      why: 'Har outer pass ek aur element settle karta hai. Pass 2 ke baad 5 aur 8 dono final hote hain. Worst case me bhi progress guaranteed hai: n-1 passes se sorted array pakka milti hai.',
    },
    {
      summary: 'Final sorted array: [1, 2, 3, 5, 8].',
      why: 'Total comparisons n×(n-1)/2 = 10 for n=5. Isi wajah se Bubble sort O(n²) hota hai - comparisons quadratic grow karte hain. n=1000 pe around 500,000 comparisons lagenge. Merge Sort approx 10,000 me kar leta hai. Bubble sort learning ke liye best hai, production ke liye nahi.',
    },
  ],
  explanation: {
    simple: {
      overview:
        'Bubble Sort adjacent elements compare karta hai aur galat order par swap karta hai. Har pass me sabse bada pending element end me chala jata hai.',
      analogy:
        'Water me bubbles upar aate hain, waise hi bade values har round me right side push hote hain.',
      steps: [
        'List me loop chalao aur arr[j] ko arr[j+1] se compare karo.',
        'Agar arr[j] > arr[j+1] ho to swap karo.',
        'Ek pass ke baad sabse bada element end me lock ho jata hai.',
        'Next pass me range chhoti karo kyunki tail already sorted hai.',
        'Agar pass me koi swap na ho to early stop karo.',
      ],
      visual: 'Pass 1: [5,3,8,1,2] -> [3,5,1,2,8]; phir har pass me scan window chhoti hoti jati hai.',
      commonMistakes: [
        'Inner-loop bound reduce na karna.',
        '>= use karke stability break kar dena.',
        '0 swaps wale pass par break na lagana.',
      ],
      practice: [
        'Already sorted input par early exit ke saath/without comparisons count karo.',
        'Explain karo Bubble Sort stable kyu hai.',
        'Logic change karke descending sort banao.',
      ],
      timeComplexity: 'O(n²) worst/average, O(n) best with early exit',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview:
        'Bubble Sort n-1 passes chalata hai. Pass i ke baad unsorted part ka maximum apni final position pe aa jata hai.',
      analogy:
        'Jaise multiple rounds me chhantayi hoti hai aur heavy items step by step right side jaate hain.',
      steps: [
        'swapped=false set karo aur j ko 0 se n-i-2 tak chalao.',
        'arr[j] > arr[j+1] par swap karo.',
        'Agar full pass me swap nahi hua to array sorted hai (break).',
        'Pass i ke baad last i elements final ho jaate hain.',
        'i=n-2 tak ya early break tak repeat karo.',
      ],
      visual: 'Scan range staircase jaisa shrink hota hai: n-1, n-2, n-3...',
      commonMistakes: [
        'Inner loop me off-by-one bug.',
        'Har iteration me len(arr) dubara nikalna.',
        'Wrong key compare karke galat ordering lena.',
      ],
      practice: [
        'Strict > condition ke saath stability ka formal proof do.',
        'Without early exit exact comparison count derive karo.',
        'Cocktail Sort implement karke swap count compare karo.',
      ],
      timeComplexity: 'O(n²) comparisons, O(n²) swaps worst case',
      spaceComplexity: 'O(1) auxiliary',
    },
  },
};

export default bubbleSort;
