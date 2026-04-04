import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '不使用min()/max()，在一次遍历中找出[34, 7, 23, 32, 5, 62]的最小值和最大值。',
  hint: '将min_val和max_val都初始化为第一个元素，然后比较每个剩余元素。',
  explanation: {
    simple: {
      overview: '查找最小/最大值：找出集合中的最小和最大元素。',
      analogy: '看一排学生，找出最矮和最高的人。',
      steps: [
        '用第一个元素初始化min和max',
        '遍历其余元素',
        '若当前元素小于min则更新min',
        '若当前元素大于max则更新max',
      ],
      visual: `nums = [3,1,4,1,5,9]
min_val = nums[0]
for n in nums[1:]:
    if n < min_val:
        min_val = n
# min_val = 1`,
      commonMistakes: [
        '用0初始化min/max(应用第一个元素)',
        '忘记处理空列表',
      ],
      practice: [
        '不用内置函数手动求min/max',
        '找第二大的元素',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Python的min()/max()接受key=参数，可用于任意可迭代对象。',
      steps: [
        'min(lst, key=len)使用key函数',
        '用zip()在一次遍历中同时求min/max',
        'heapq.nsmallest/nlargest获取top-k',
        'numpy.argmin/argmax用于数组操作',
      ],
      commonMistakes: [
        '有内置min()/max()却手写循环',
        'min([])会抛出ValueError',
      ],
      practice: [
        '用min()的key=处理元组列表',
        '实现同时求min+max的3n/2比较算法',
      ],
    },
  },
};

export default overlay;
