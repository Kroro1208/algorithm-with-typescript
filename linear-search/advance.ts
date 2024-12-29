// 番兵法使って範囲チェックを省略
function linearSearchSentinel<T>(arr: T[], target: T): number {
  const n = arr.length;
  arr.push(target); // 配列の最後に番票を追加

  let i = 0;
  while (arr[i] !== target) i++;

  arr.pop(); // ここで元の配列に戻す
  return i < n ? i : -1;
}

const numbers2: number[] = [1, 2, 5, 8, 11, 66, 84, 157];
const animals: string[] = ["dog", "cat", "tiger", "lion", "bear", "monkey"];

console.log(linearSearchSentinel(numbers2, 157));
console.log(linearSearchSentinel(animals, "lion"));
