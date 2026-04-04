import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '统计\'the cat sat on the mat the cat\'中每个单词出现的次数。',
  hint: '使用字典: d[w] = d.get(w, 0) + 1。',
  explanation: {
    simple: {
      overview: '统计出现次数：计算列表或字符串中每个元素出现的次数。',
      analogy: '统计段落中每个单词出现的次数。',
      steps: [
        '创建空字典',
        '遍历每个元素',
        '已存在则+1，否则初始化为1',
        '也可以用collections.Counter',
      ],
      visual: `lst = [1,2,2,3,3,3]
cnt = {}
for x in lst:
    cnt[x] = cnt.get(x,0)+1
# {1:1, 2:2, 3:3}`,
      commonMistakes: [
        '不用.get()直接用[]会KeyError',
        '忘记初始化计数器',
      ],
      practice: [
        '统计字符串中每个字符的数量',
        '找出出现频率最高的元素',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k) k为唯一键数'
    },
    deepDive: {
      overview: 'collections.Counter是dict的子类，专为计数优化，支持算术运算。',
      steps: [
        'Counter(iterable)以O(n)构建',
        'most_common(k)返回前k个高频元素',
        '计数器之间可以加减运算',
        'elements()返回按频率重复元素的迭代器',
      ],
      commonMistakes: [
        '已有Counter却重新实现',
        'Counter对不存在的键返回0',
      ],
      practice: [
        '测试Counter.most_common(3)',
        '相加两个Counter并验证结果',
      ],
    },
  },
};

export default overlay;
