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

const arr: number[] = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearch(arr, 2)); // 正しい場合、最初に見つかる `2` のインデックスを返す
