// 線形探索
function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

// ジェネリクス型で実装
function linearSearchGen<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// 複数の条件で検索可能なようにコールバック設定
function linearSearchPredicate<T>(
  arr: T[],
  predicate: (item: T) => boolean
): number {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return i;
    }
  }

  return -1;
}

const numbers: number[] = [1, 2, 5, 7, 10, 55, 68, 92, 157];
const fruits: string[] = [
  "apple",
  "grape",
  "melon",
  "strawberry",
  "banana",
  "blueberry",
];

console.log(linearSearch(numbers, 10));
console.log(linearSearchGen(fruits, "banana"));
console.log(linearSearchPredicate(numbers, (num) => num > 10));
