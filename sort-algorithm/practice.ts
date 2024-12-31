// 基本的なバブルソート
function bubbleSort<T>(arr: T[]): T[] {
  const result = [...arr];
  const n = result.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      let current = result[j] as T;
      let next = result[j + 1] as T;
      if (current > next) {
        [current, next] = [next, current];
        result[j] = current;
        result[j + 1] = next;
      }
    }
  }
  return result;
}

const bubbleResult = bubbleSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Bubble Sort:", bubbleResult);

// 基本的なクイックソート
function quickSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)] as T; // 基準値を真ん中に設定
  const left = arr.filter((value) => value < pivot);
  const middle = arr.filter((value) => value === pivot);
  const right = arr.filter((value) => value > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

const quickResult = quickSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Quick Sort:", quickResult);

// 基本的なマージソート
// 配列を半分に分割し続ける（分割フェーズ）
function mergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid)); // midを含む
  return merge(left, right);
}

// 分割した小さな配列をソートしながらマージする（統合フェーズ）
// 各配列の先頭を比べて、小さい方をresuktに格納
function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = [];

  while (left.length && right.length) {
    const leftValue = left[0] as T;
    const rightValue = right[0] as T;
    if (leftValue <= rightValue) {
      result.push(left.shift() as T);
    } else {
      result.push(right.shift() as T);
    }
  }

  return result.concat(left, right);
}

const mergeResult = mergeSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Merge Sort:", mergeResult);
