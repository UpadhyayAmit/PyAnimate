import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '使用两个指针就地反转[1, 2, 3, 4, 5]。不要使用list.reverse()或切片。',
  hint: '从left=0, right=len-1开始。交换arr[left]和arr[right]，两者向内移动直到相遇。',
  explanation: {
    simple: {
      overview: '反转列表：将元素以相反顺序排列。',
      analogy: '就像翻转一叠扑克牌——最后一张变成第一张。',
      steps: [
        '方法1: list.reverse()原地反转',
        '方法2: list[::-1]生成新列表',
        '方法3: reversed()返回迭代器',
        '手动: 用双指针交换元素',
      ],
      visual: `lst = [1,2,3,4,5]
lst[::-1] → [5,4,3,2,1]
lst.reverse() → 原地修改`,
      commonMistakes: [
        '混淆.reverse()(原地)和[::-1](新建)',
        'reversed()返回迭代器不是列表',
      ],
      practice: [
        '用切片反转字符串',
        '检查列表是否为回文',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)原地，O(n)切片'
    },
    deepDive: {
      overview: 'list.reverse()是O(n)原地O(1)空间，[::-1]切片是O(n)新列表。',
      steps: [
        '原地反转: 交换[0,n-1],[1,n-2]...',
        'reversed()返回list_reverseiterator对象',
        '字符串: "".join(reversed(s))或s[::-1]',
        '大数据用惰性reversed()更高效',
      ],
      commonMistakes: [
        '只用于遍历时[::-1]浪费内存',
        '反转过程中修改列表',
      ],
      practice: [
        '比较list.reverse()和切片的性能',
        '用双指针实现原地反转',
      ],
    },
  },
};

export default overlay;
