

// Array.from() 静态方法可以从可迭代或者类数组对象创建一个新的浅拷贝的数组实例.

// console.log(Array.from("foo"));
// 浅拷贝
const test = Array.from([1, 2, 3], (x) => {
  console.log("x", x);
  return x + x
})
// console.log("test", test);

let arr = [
  [1, 2, 2],
  [1, 2, 2],
  [5]
]

/**
 * 首先,我们可以使用map()方法遍历多维数组,并将每个字数组转换为字符串表示
 * 然后,我们通过new Set 创建一个Set 对象自动去重
 * Array.from(JSON.parse) 将Set对象转换为数组, 并通过JSON.parse恢复每个子数组的原始形式.
 */

const newArr = Array.from(new Set(arr.map(JSON.stringify)), JSON.parse)
console.log(newArr)

const multiDimensionalArray = [[1, 2], [3, 4], [1, 2], [5, 6], [3, 4]];
const uniqueArray = Array.from(new Set(multiDimensionalArray.map(JSON.stringify)), JSON.parse);

console.log(uniqueArray);