function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = getFirstElement<number>([10, 20, 30]); // number
console.log("First number:", firstNum);
const firstStr = getFirstElement<string>(["a", "b", "c"]); // string
console.log("First string:", firstStr);
const firstBool = getFirstElement<boolean>([true, false]); // boolean
console.log("First boolean:", firstBool);

getFirstElement([1, 2, 3]); // 1
getFirstElement(["a", "b", "c"]); // "a"
getFirstElement([true, false, true]); // true
