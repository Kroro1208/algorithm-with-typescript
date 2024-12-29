// 2つの配列の共通要素を見つける
function findCommonElements<T>(arr: T[], arr2: T[]): T[] {
  // reduceでarrをSetに変換
  const setArr = arr.reduce((set, item) => set.add(item), new Set<T>());
  // arr2の要素がsetArrにあるかどうかをcheck
  return arr2.filter((item) => setArr.has(item));
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(arr1, arr2));

// 最大値を最小値を同時に探す
function findMinMax<T>(arr3: T[]): { min: T; max: T } {
  if (arr3.length === 0) throw new Error("エラーが発生しました");
  let min = arr3[0];
  let max = arr3[0];
  for (const item of arr3) {
    if (item < min) min = item;
    if (item > max) max = item;
  }
  return { min, max };
}

console.log(findMinMax([3, 1, 4, 1, 5, 9, 44, 77, 77, 9, 6]));
