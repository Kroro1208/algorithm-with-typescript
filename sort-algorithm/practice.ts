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
