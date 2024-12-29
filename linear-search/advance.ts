// 番兵法使って範囲チェックを省略
function linearSearchSentinel<T>(arr: T[], target: T): number {
  const n = arr.length;
  arr.push(target); // 配列の最後に番票を追加

  let i = 0;
  while (arr[i] !== target) i++;

  arr.pop(); // ここで元の配列に戻す
  return i < n ? i : -1;
}

const numbers2: number[] = [1, 2, 5, 8, 11, 66, 84, 157];
const animals: string[] = ["dog", "cat", "tiger", "lion", "bear", "monkey"];

console.log(linearSearchSentinel(numbers2, 157));
console.log(linearSearchSentinel(animals, "lion"));

// 複数条件での検索アルゴリズム
interface User {
  id: number;
  name: string;
  age: number;
}

// 検索対象となるオブジェクト
const users: User[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Naoya", age: 38 },
  { id: 3, name: "Akira", age: 30 },
  { id: 4, name: "Alice", age: 22 },
];

// 部分検索可能なようにPartial<User>を使用
function findUser(users: User[], baseUser: Partial<User>): User[] {
  return users.filter((user) => {
    return Object.entries(baseUser).every(
      ([key, value]) => user[key as keyof User] === value
    );
  });
}

console.log(findUser(users, { name: "Naoya" }));
console.log(findUser(users, { name: "Alice", age: 44 }));
