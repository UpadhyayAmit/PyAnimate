import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Check if \'({[]})\' and \'([)]\' are valid. Then handle the case \'(((\'.  ',
  hint: 'Push open brackets onto stack. When a close bracket comes, pop and verify it matches.',
  explanation: {
    simple: {
      overview: 'Check if a string of brackets is valid: every opener has a matching closer in the right order.',
      analogy: 'Nesting boxes: each box opened must be closed before closing the outer box.',
      steps: [
          'Push opening brackets onto a stack.',
          'For closing bracket: if stack is empty or top doesn\'t match, return False.',
          'Pop the matching opener.',
          'After processing: stack must be empty.',
      ],
      visual: '\'([{}])\': push(,[,{; see }: match {, pop; see ]: match [, pop; see ): match (, pop; empty → valid',
      commonMistakes: [
          'Not checking if stack is empty before popping.',
          'Forgetting to check stack is empty after processing (unclosed openers).',
      ],
      practice: [
          'Extend to also count the minimum number of swaps to make invalid sequence valid.',
          'Find the longest valid parenthesis substring.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
    },
    deepDive: {
      overview: 'Longest valid parenthesis uses DP or stack-with-index and solves the matching problem for substrings.',
      analogy: 'Stack stores indices; on match, pop and compute span from current index to new top.',
      steps: [
          'Push -1 as sentinel; push each \'(\' index.',
          'On \')\': pop; if stack empty, push current index as new base; else update max length: i-stack[-1].',
          'DP approach: dp[i] = length of valid string ending at i.',
          'If s[i]=\')\' and s[i-dp[i-1]-1]=\'(\': dp[i]=dp[i-1]+2+dp[i-dp[i-1]-2].',
      ],
      visual: '\'(()\': stack[-1,-1→0]; see ): pop 0, stack=[-1]; length=1-(-1)=2',
      commonMistakes: [
          'Stack approach needs sentinel -1 to handle the base case cleanly.',
          'DP array indexing goes out of bounds without careful guards.',
      ],
      practice: [
          'Implement longest valid parenthesis with both stack and DP.',
          'Solve \'Minimum Add to Make Parentheses Valid\' (count unmatched brackets).',
      ],
    },
  },
};

export default overlay;
