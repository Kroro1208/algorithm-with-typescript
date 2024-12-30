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
