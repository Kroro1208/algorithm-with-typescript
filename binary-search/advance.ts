import { arr, lowerBound, upperBound } from "./practice";

// 指定範囲の要素を探すアルゴリズム
function findRange<T>(arr: T[], start: T, end: T): [number, number] {
  const startId = lowerBound(arr, start);
  const endId = upperBound(arr, end);
  return [startId, endId];
}

console.log(findRange(arr, 3, 8));
