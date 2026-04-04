import type { LessonLocaleOverlay } from '../types';

const bubbleSort: LessonLocaleOverlay = {
  prompt: '把 array 改成 [9, 1, 5, 3, 7]。预测在变成 sorted 之前需要多少次 swaps。',
  hint: '统计 timeline 中橙色的 swap events。每次 swap 都会把更大的 element 向右移动一位。',
  useCases: [
    '讲解 sorting 概念 - 最直观的 algorithm',
    '检测接近 sorted 的 arrays (early exit optimization)',
    '内存很小且 O(1) space 很关键的嵌入式系统',
  ],
  approach:
    'Bubble sort 会比较每一对相邻元素，若顺序错误就执行 swap。每完成一轮 outer pass，最大的未排序元素都能保证到达最终位置。我们使用 nested loops：outer loop 控制轮次 (n-1)，inner loop 控制比较次数（因为末尾已 sorted，每轮都会缩短）。它不适合大数据量，时间是 O(n²)，但它是学习比较类排序最直观的算法。',
  executionFrames: [
    {
      summary: 'arr = [5, 3, 8, 1, 2] - 5 个未排序 elements。',
      why: '我们把 values 放在 list 里，这样可以通过 index (arr[j], arr[j+1]) 访问 element。Bubble sort 是 in-place algorithm：直接修改同一个 list，而不是创建新 list，因此 space complexity 保持 O(1)。',
    },
    {
      summary: 'n = 5 - 最多需要 4 次 outer passes。',
      why: '我们把 n = len(arr) 只计算一次，而不是每次迭代都调用 len()。这是 micro-optimization，同时也让 loop 边界更清晰。需要 n-1 次 outer passes，因为 n-1 轮后最小元素一定在位置 0。',
    },
    {
      summary: 'arr[0]=5 > arr[1]=3 - 需要 swap。',
      why: '我们使用 arr[j] > arr[j+1]（严格大于）来保持稳定性：相等元素不会 swap，因此相对顺序保持不变。这个比较是所有比较排序算法的核心。',
    },
    {
      summary: 'Python tuple swap - 不需要 temp variable。',
      why: 'arr[j], arr[j+1] = arr[j+1], arr[j] 是 Python 的优雅并行赋值。C 里需要 temp variable。Python 会先把右侧作为 tuple 求值再解包，所以覆盖前两个值都已保存。',
    },
    {
      summary: '8 正在向右 bubble - 它目前是最大的 element。',
      why: '注意 8 两步就向右移动了两个位置。每一轮 pass 最大元素都会 bubble 到末尾，这也是 Bubble sort 名称的来源。完成这轮 outer pass (i=0) 后，8 会在最终位置。',
    },
    {
      summary: '8 现在已经在 index 4 的 final position。',
      why: "inner loop 运行 n - i - 1 次。'- i' 就是优化点：第 i 轮后最后 i 个元素已经 sorted 且位置最终确定，无需再比较，可显著减少总工作量。",
    },
    {
      summary: '5 向右 bubble。 [3, 5, 1, 2, 8] -> [3, 1, 2, 5, 8]',
      why: '每一轮 outer pass 都会多固定一个元素。第 2 轮后，5 和 8 都已最终确定。即使在最坏情况，n-1 passes 也一定能得到 sorted array。',
    },
    {
      summary: 'Final sorted array: [1, 2, 3, 5, 8].',
      why: '总比较次数是 n×(n-1)/2，n=5 时为 10。这就是 Bubble sort 为 O(n²) 的原因：比较次数按平方增长。n=1000 时约 500,000 次比较。Merge Sort 大约 10,000 次。Bubble sort 更适合学习，不适合生产。',
    },
  ],
  explanation: {
    simple: {
      overview:
        'Bubble Sort 会比较相邻元素，顺序错误就 swap。每一轮都会把当前最大的未确定元素推到右侧。',
      analogy:
        '像水里的气泡一样，较大的值会在每一轮逐步“浮”到右边。',
      steps: [
        '遍历数组，比较 arr[j] 和 arr[j+1]。',
        '如果 arr[j] > arr[j+1]，就执行 swap。',
        '一轮结束后，最大元素会固定在末尾。',
        '下一轮缩小范围，因为尾部已经 sorted。',
        '如果一轮没有 swap，提前结束。',
      ],
      visual: 'Pass 1: [5,3,8,1,2] -> [3,5,1,2,8]，之后每轮扫描范围都会缩小。',
      commonMistakes: [
        '没有缩小 inner loop 的边界。',
        '使用 >= 导致稳定性被破坏。',
        '出现 0 swaps 的一轮却没有提前退出。',
      ],
      practice: [
        '在已排序输入上比较有/无 early exit 的比较次数。',
        '解释 Bubble Sort 为什么是 stable。',
        '改成降序排序并验证结果。',
      ],
      timeComplexity: 'O(n²) worst/average, O(n) best with early exit',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview:
        'Bubble Sort 共执行 n-1 passes。第 i 轮后，未排序区间的最大值会落在最终位置。',
      analogy:
        '像反复筛选一样，大值每轮都向右侧终点移动。',
      steps: [
        '设置 swapped=false，j 从 0 迭代到 n-i-2。',
        '判断 arr[j] > arr[j+1]，满足则 swap。',
        '若本轮没有 swap，则数组已 sorted（break）。',
        '第 i 轮后，最后 i 个元素已经最终确定。',
        '继续到 i=n-2 或提前退出。',
      ],
      visual: '扫描区间呈阶梯缩小：n-1, n-2, n-3...',
      commonMistakes: [
        'inner loop 出现 off-by-one 错误。',
        '每次比较都重复计算 len(arr)。',
        '比较键用错导致排序目标偏离。',
      ],
      practice: [
        '用严格 > 条件形式化证明稳定性。',
        '推导无 early exit 时的精确比较次数。',
        '实现 Cocktail Sort 并比较 swaps 数量。',
      ],
      timeComplexity: 'O(n²) comparisons, O(n²) swaps worst case',
      spaceComplexity: 'O(1) auxiliary',
    },
  },
};

export default bubbleSort;
