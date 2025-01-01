// バブルソートにカスタムの比較関数を渡して昇順降順を切り替える
function bubbleSortCustom<T>(arr: T[], sortFn: (a: T, b: T) => boolean): T[] {
  const result = [...arr];
  const n = result.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      let current = result[j] as T;
      let next = result[j + 1] as T;
      if (sortFn(current, next)) {
        [current, next] = [next, current];
        result[j] = current;
        result[j + 1] = next;
      }
    }
  }
  return result;
}

// 降順ソート
const customBubbleResult = bubbleSortCustom(
  [64, 34, 25, 12, 22, 11, 90],
  (a, b) => a < b
); // 左辺が小さかったら入れ替える処理になる
console.log("降順でソート:", customBubbleResult);

// 配列内の最小のk個の要素を見つけるアルゴリズム
function findSmaller<T>(arr: T[], k: number): T[] {
  const result = [...arr];
  const n = arr.length - 1;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < n - i; j++) {
      let current = result[j] as T;
      let next = result[j + 1] as T;
      if (current < next) {
        [current, next] = [next, current];
        result[j] = current;
        result[j + 1] = next;
      }
    }
  }
  return result.slice(0, k);
}

console.log(findSmaller([64, 34, 1, 6, 11, 25, 12, 22, 11, 90], 3));
