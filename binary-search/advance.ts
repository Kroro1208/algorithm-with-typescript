import { arr, lowerBound, upperBound } from "./practice";

// 指定範囲の要素を探すアルゴリズム
function findRange<T>(arr: T[], start: T, end: T): [number, number] {
  const startId = lowerBound(arr, start);
  const endId = upperBound(arr, end);
  return [startId, endId];
}

console.log(findRange(arr, 3, 8));

// 特定の値の出現をカウントするアルゴリズム
function countOccurence<T>(arr: T[], target: T): number {
  const startIndex = lowerBound(arr, target);
  const endIndex = upperBound(arr, target);
  return endIndex - startIndex;
}

console.log(countOccurence(arr, 2));

// ソートされていない値に対して2分探索
function searchUnsortArray<T>(arr: T[], target: T): number {
  // 配列をコピーしてsort
  const sortedArr = [...arr].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  // sort済み配列で2分探索
  const index = lowerBound(sortedArr, target);
  console.log("sort済み配列での位置", index);

  // 必要であれば元の配列での位置も探す
  return index < sortedArr.length && sortedArr[index] === target
    ? arr.indexOf(target)
    : -1;
}

const unSortArr = [5, 6, 2, 8, 3, 9, 0];
console.log("元の配列での位置", searchUnsortArray(unSortArr, 2));
