// 2分探索(ソート済みの配列に対して)
function binarySearch<T>(arr: T[], target: T): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 配列中央のindexを取得する

    if (arr[mid] === target) {
      return mid; // ターゲットが見つかった場合
    }

    if (arr[mid] && arr[mid] < target) {
      left = mid + 1; // ターゲットが右側にある場合
    } else {
      right = mid - 1; // ターゲットが左側にある場合
    }
  }
  return -1;
}

const arr: number[] = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearch(arr, 2)); // 正しい場合、最初に見つかる `2` のインデックスを返す
