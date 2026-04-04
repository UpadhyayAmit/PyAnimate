import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '给定一个整数列表，找出所有出现次数超过n/3的元素。',
  hint: '先使用频率字典。然后过滤count > len(arr)//3的键。',
  explanation: {
    simple: {
      overview: '哈希表计数：用平均O(1)的快速查找来统计和跟踪元素。',
      analogy: '就像点名表——记录每个名字(键)被签到的次数(值)。',
      steps: [
        '创建空字典',
        '遍历每个元素',
        '存在则+1，否则初始化为1',
        '用.get(key,0)避免KeyError',
      ],
      visual: `words = ["cat","bat","cat","hat"]
counts = {}
for w in words:
    counts[w] = counts.get(w,0)+1
# {"cat":2,"bat":1,"hat":1}`,
      commonMistakes: [
        '不存在检查就用dict[key]',
        '不知道有Counter',
      ],
      practice: [
        '从1到n+1的整数数组中找缺失数',
        '按第一次和再次出现分类重复',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Python字典是哈希表：平均O(1)插入/查找/删除，冲突时最坏O(n)。',
      steps: [
        'Python 3.7+字典默认保持插入顺序',
        'defaultdict(int)省略get()',
        'collections.Counter优化常见计数操作',
        'frozenset和tuple可作字典键，list不可',
      ],
      commonMistakes: [
        '嵌套字典用defaultdict(int)而非defaultdict(dict)',
        '忘记set和dict的区别',
      ],
      practice: [
        '用defaultdict实现词频统计',
        '用哈希表统计子数组和等于k的个数',
      ],
    },
  },
};

export default overlay;
