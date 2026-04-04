import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '从[\'apple\',\'app\',\'apt\',\'banana\']构建Trie。实现search(\'app\')和startsWith(\'ap\')。',
  hint: '每个节点是子节点的字典 + is_end标志。插入逐字符追踪，按需创建节点。',
  explanation: {
    simple: {
      overview: 'Trie(前缀树)将字符串存储在节点表示字符的树中，适合单词和前缀搜索。',
      analogy: '就像字典按字符分叉的树——知道"ca"就能快速找"cat"和"car"。',
      steps: [
        '每个节点有子节点字典和is_end标志',
        'insert: 沿word[i]走，不存在则新建',
        'search: 能走完全词且is_end为True',
        'startsWith: 能走完前缀则True',
      ],
      visual: `insert("cat","car","dog")
       root
      / ...
     c   d
     |   |
     a   o
    / \\   \\
   t   r   g`,
      commonMistakes: [
        '混淆search和startsWith的is_end差异',
        '忘记删除操作很复杂',
      ],
      practice: [
        '实现自动补全(前缀→候选词列表)',
        '在字典中找最大XOR值的所有单词',
      ],
      timeComplexity: 'O(L) L为词长',
      spaceComplexity: 'O(ALPHABET_SIZE * L * N)'
    },
    deepDive: {
      overview: 'Trie提供O(L)前缀搜索，压缩Trie(基数树)空间效率更高，位Trie用于最大XOR。',
      steps: [
        '用array[26]替代字典节点提高速度',
        'CompressedTrie/Radix Trie节省空间',
        '位Trie(0/1): O(nL)求最大XOR对',
        '将Trie演化为Aho-Corasick自动机',
      ],
      commonMistakes: [
        '大量单词不用Trie而用哈希集合',
        'Trie删除时错误设置is_end标志',
      ],
      practice: [
        '用Trie解单词搜索II',
        '实现二进制Trie求最大XOR',
      ],
    },
  },
};

export default overlay;
