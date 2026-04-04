import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '\'racecar\'、\'hello\'、\'A man a plan a canal Panama\'が回文かどうか確認しましょう。',
  hint: '最後の文字列は小文字化してスペース/句読点を除去してから確認します。',
  explanation: {
    simple: {
      overview: '回文は前後どちらから読んでも同じになる文字列、例: "racecar"。',
      analogy: '鏡で見るようなもの — 反転しても元と同じ。',
      steps: [
        '文字列を正規化(小文字化、スペース除去)',
        '文字列と逆順を比較',
        '等しければ回文',
        'リストでは逆順コピーと比較',
      ],
      visual: `word = "racecar"
is_pal = word == word[::-1]
# True`,
      commonMistakes: [
        '大文字小文字とスペースを無視しないと失敗',
        '空文字列も回文であることを忘れる',
      ],
      practice: [
        'スペースと句読点を無視して文章の回文を確認',
        '単語リストから全回文を見つける',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)スライス、O(1)2ポインタ'
    },
    deepDive: {
      overview: 'スライスによる回文判定はO(n)時間・空間。2ポインタはO(n)時間・O(1)空間。',
      steps: [
        '2ポインタ: left=0,right=len-1で内側へ進む',
        '文章: re.sub(r\'[^a-z0-9]\',\'\',s.lower())で前処理',
        '最長回文部分列: Manacherアルゴリズムでo(n)',
        '最長共通部分列DP: LCS法',
      ],
      commonMistakes: [
        '文章問題で英数字以外を無視しない',
        '回文部分文字列と回文部分列を混同する',
      ],
      practice: [
        '2ポインタで回文判定を実装',
        '最長回文部分文字列を求める',
      ],
    },
  },
};

export default overlay;
