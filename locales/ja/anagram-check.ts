import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '(\'listen\',\'silent\'), (\'hello\',\'world\')がアナグラムか確認し、アナグラムグループを全て見つけましょう。',
  hint: '両文字列をソートして比較、またはCounter()を使用。グループ化にはソート済み文字列をキーとして使用。',
  explanation: {
    simple: {
      overview: '2つの文字列が全く同じ文字を同じ個数持つ場合アナグラム。',
      analogy: 'スクラブルのタイルを並べ替えるようなもの — 同じセット、違う順序。',
      steps: [
        '両方を正規化(小文字化・スペース除去)',
        '方法1: 両方をソートして比較',
        '方法2: Counterで比較',
        '等しければアナグラム',
      ],
      visual: `"listen"と"silent"
sorted("listen") == sorted("silent") ?`,
      commonMistakes: [
        '大文字小文字とスペースを正規化しない',
        '数字や記号も数える(必要なら)',
      ],
      practice: [
        '"listen"/"silent"などのペアを確認',
        '単語リストをアナグラムグループに分類',
      ],
      timeComplexity: 'O(n log n)ソート、O(n) Counter',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'CounterによるアナグラムチェックはO(n)。ソートはO(n log n)だが簡潔。',
      steps: [
        'Counter(s1)==Counter(s2)はO(n)時間・空間',
        'sorted(s1)==sorted(s2)はO(n log n)',
        '多単語のグループ化はソート済みタプルをキーに使う',
        '频度配列[0]*26はASCIIのみO(n)O(1)',
      ],
      commonMistakes: [
        '性能が重要なときにソートを使う',
        'Unicodeはカウンター配列ではなく Counterを使う',
      ],
      practice: [
        '単語リストからアナグラムグループを作る',
        '频度配列でASCII文字列のアナグラムを実装',
      ],
    },
  },
};

export default overlay;
