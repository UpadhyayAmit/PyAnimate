import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '为[1,3,5,7,9,11]构建线段树。查询索引1-3的和，然后将索引2更新为10。',
  hint: '自下而上构建。通过递归分割范围查询和。更新向上传播。',
  explanation: {
    simple: {
      overview: '线段树是支持O(log n)范围查询(最小/最大/求和)和O(log n)点更新的数据结构。',
      analogy: '就像细分部门的组织架构——可以从根追踪任意部门的统计数据。',
      steps: [
        '构建存储子数组和/最小/最大的树',
        '节点i: 子节点是2i(左)和2i+1(右)',
        '查询: 对包含该范围的子节点递归',
        '点更新: 更新叶节点并向上传播',
      ],
      visual: `arr=[1,3,2,7,9,11]
节点: [33,11,22,4,7,20,2,1,3,2,7,9,11]
求和(2,5)=2+7+9+11=29`,
      commonMistakes: [
        '数组大小: 4*n安全(2n某些情况不够)',
        '索引偏移(1基vs0基)混淆',
      ],
      practice: [
        '实现求和线段树',
        '用懒惰传播实现范围更新',
      ],
      timeComplexity: 'O(log n)查询和更新',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: '懒惰传播线段树O(log n)处理范围更新，树状数组(BIT)仅求和更简单。',
      steps: [
        '懒惰传播: 节点暂存待处理更新',
        'pushdown: 将懒惰值传播给子节点',
        '树状数组(BIT): 仅求和更简单',
        '持久化线段树: 保存历史状态',
      ],
      commonMistakes: [
        '忘记懒惰节点的pushdown',
        'BIT能解决的用线段树过度设计',
      ],
      practice: [
        '实现懒惰传播的范围加法+范围求和',
        '比较BIT和懒惰线段树',
      ],
    },
  },
};

export default overlay;
