import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '创建一个包含5个数字的列表。追加99，删除最小值，然后打印已排序的列表。',
  hint: '使用append(), remove()和sorted()。min()函数找到最小值。',
  explanation: {
    simple: {
      overview: '列表是有序集合，可存储任意类型，是可变的——可以修改内容。',
      analogy: '列表就像购物清单：有顺序，允许重复，可以自由增删。',
      steps: [
        '创建: my_list = [1, 2, 3]',
        '访问: my_list[0]返回1',
        '添加: my_list.append(4)',
        '删除: my_list.remove(2)或my_list.pop()',
      ],
      visual: `nums = [10, 20, 30]
nums[0] → 10
nums[-1] → 30
nums[1:] → [20, 30]`,
      commonMistakes: [
        '越界访问导致IndexError',
        '混淆list.sort()(原地)和sorted(list)',
        '列表变量是引用，赋值是浅拷贝',
      ],
      practice: [
        '不用reverse()反转列表',
        '找列表的最大值和第二大值',
      ],
    },
    deepDive: {
      overview: 'Python列表是动态数组，以1.125倍扩容。切片生成新列表。',
      steps: [
        'append是O(1)均摊；insert(0,x)是O(n)',
        '切片a[i:j]是O(k)的新拷贝',
        'list.sort()是Timsort——稳定O(n log n)',
        '头部插入用collections.deque更高效',
      ],
      commonMistakes: [
        '循环内insert(0,x) → O(n²)',
        'copy()是浅拷贝——嵌套需要deepcopy',
      ],
      practice: [
        '比较append和insert(0,x)的性能',
        '用切片旋转列表',
      ],
    },
  },
};

export default overlay;
