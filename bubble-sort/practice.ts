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
