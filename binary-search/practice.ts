// 2分探索(ソート済みの配列に対して)
function binarySearch<T>(arr: T[], target: T): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 配列中央のindexを取得する

    if (arr[mid] === target) {
      result = mid; // ターゲットが見つかっても返却せず値を保存しておいて、再度右側を探索
      right = mid - 1; //　左側を再探索
    }

    if (arr[mid] && arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

// lower_bound
// target以上の最小にindexを返す(targetを含む)
export function lowerBound<T>(arr: T[], target: T): number {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] && arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

// upper_bound
// tagetより大きい最小のindexを返す(targetは含まない)
export function upperBound<T>(arr: T[], target: T): number {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] && arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

export const arr: number[] = [1, 2, 2, 2, 3, 5, 6, 7, 8];
console.log(binarySearch(arr, 2)); // 正しい場合、最初に見つかる `2` のインデックスを返す
console.log(lowerBound(arr, 4));
console.log(upperBound(arr, 5));
