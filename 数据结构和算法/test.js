

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

  const max = Math.pow(2, 31);
  const min = Math.pow(-2, 31);
  const symbol = x > 0 ? 1 : -1;
  const result = symbol * String(x).split("").filter(x => x !== "-").reverse().join("");
  return (result > max || result < min) ? 0 : result

};

// console.log(reverse(-123));


var findMedianSortedArrays = function (nums1, nums2) {

  // 不写 (a, b) => a - b) 默认只对正整数从小到大排序
  // 所以一定要写(a, b) => a - b)
  let newArr = [...nums1, ...nums2].sort((a, b) => a - b);
  // 判断奇数偶数
  let middleNum = 0;
  let evenNumber = newArr.length % 2;
  let middleIndex = Math.floor(newArr.length / 2)
  if (evenNumber !== 0) {
    middleNum = newArr[middleIndex]
  } else {
    middleNum = (newArr[middleIndex - 1] + newArr[middleIndex]) / 2
  }
  return middleNum
};

// console.log(findMedianSortedArrays([3], [-2, -1]));

// [-1,-2,3]

// 数组reduce 练习.
const array = [1, 2, 3, 4]

const sum = array.reduce((prev, curr) => {
  return prev + curr
}, 0)
// console.log("sum", sum)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 三数之和.
var threeSum = function (nums) {

  // 方法一:
  // c = (a-b)
  // 确定了a和b, 那么久可以向两数之和一样,在遍历中寻找(a+b)

  if (!nums || nums.length < 3) return arr;
  let res = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    const hashMap = new Map();
    if (nums[i] > 0) break;
    // 去重处理,前后两个不能相同
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < nums.length; j++) {
      // if (!hash[nums[j]]) {
      //   let mark = 0 - nums[i] - nums[j];
      //   hash[mark] = [nums[i], nums[j]]
      // } else {
      //   const result = [
      //     ...hash[nums[j]],
      //     nums[j]
      //   ]
      //   hash[nums[j]] = undefined
      //   res.push(result)
      // }
      const diff = - (nums[i] + nums[j]);
      // 去重处理
      if (j > i + 2 && nums[j] == nums[j - 1] && nums[j] == nums[j - 2]) continue;
      if (hashMap.has(diff)) {
        res.push([nums[i], nums[hashMap.get(diff)], nums[j]])
        hashMap.delete(diff)
      }
      hashMap.set(nums[j], j)
    }
  };
  return res
};

// console.log("result", threeSum([-1, 0, 1, 2, -1, -4]))

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

  return haystack.indexOf(needle);

};


// console.log(strStr("sadbutsad", "sad"))


// 组合问题

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let path = []
let result = []

var combine = function (n, k) {
  result = []
  // 递归-回溯算法.
  combineHelper(n, k, 1)
  return result
};

const combineHelper = (n, k, startIndex) => {

  if (path.length === k) {
    // 这里push 时候进行浅拷贝, 是因为后续的pop 是会改变原数组的,
    // 这里执行完了 后面还是会执行path.pop()
    // 即使是在push在数组中依然会改变.
    result.push([
      ...path
    ]);
    return;
  }

  for (let i = startIndex; i <= n; ++i) {   // 2    2< =4;
    path.push(i)                            // 
    combineHelper(n, k, i + 1);
    path.pop()
  }
}

// console.log(combine(4, 2))


// 组合总数
var combinationSum3 = function (k, n) {
  // 回溯算法.
  let result = []
  let path = []
  const dfs = (k, n, startIndex) => {
    // 终止条件
    if (path.length === k) {
      const sum = path.reduce((prev, curr) => {
        return prev + curr;
      }, 0)
      if (sum === n) {
        result.push([
          ...path
        ])
      }
      return;
    }
    for (let i = startIndex; i <= n; ++i) {
      path.push(i);
      dfs(k, n, i + 1)
      path.pop()
    }
  }

  dfs(k, n, 1)
  return result
};

// console.log(combinationSum3(3, 7));

var combinationSum = function (candidates, target) {
  let sum = 0;
  let path = []
  let result = []
  const dps = (startIndex) => {

    if (sum = target) {
      result.push([...path])
    }

    for (let i = 0; i < candidates.length; i++) {
      path.push(candidates[i]);
      sum = sum + candidates[i];
      dps(startIndex)
      sum = sum + candidates[i];
      path.pop()
    }
    return;
  }
  dps(0);
  return result
};

// console.log(combinationSum([2, 3, 5], 8));

var letterCombinations = function (digits) {

  const length = digits.length;

  if (!digits.length) return [];
  if (digits.length === 1) return digits.split(",");

  let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
  let result = []
  let path = [];
  /**
   * index 表示的是digits的下标
   */
  const dps = (index) => {
    // 终止条件
    if (path.length === length) {
      const str = path.join("")
      result.push(str)
      return;
    }
    const currArrIndex = Number(digits[index])
    for (let i = 0; i < arr[currArrIndex].length; i++) {
      path.push(arr[currArrIndex][i])
      dps(index + 1);
      path.pop()
    }
  }
  dps(0)
  return result
};

// console.log(letterCombinations("23"));

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/**
 * 有两点不用
 * 1. 组合没有数量要求.
 * 2. 元素可无限重复选取.
 */

var combinationSum = function (candidates, target) {
  let sum = 0;
  let path = []
  let result = []
  const dps = (startIndex) => {
    if (sum === target) {
      result.push(Array.from(path))
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      const currValue = candidates[i];
      // target 等于current +currentValue
      // 在计算的过程中 只要选取的元素总和超过target, 就返回, 即停止递归调用!
      if (currValue + sum > target) break;
      path.push(currValue);
      sum += currValue;
      dps(i)
      sum -= currValue;
      path.pop()
    }
  }
  dps(0);
  return result
};

// console.log(combinationSum([2, 3, 5], 8));


var combinationSum2 = function (candidates, target) {

  let result = [];
  let path = [];
  candidates = candidates.sort((a, b) => a - b);
  let sum = 0;

  const dfs = (firstIndex) => {
    if (sum === target) {
      result.push([...path])
      return;
    }
    for (let i = firstIndex; i < candidates.length; i++) {
      const currntValue = candidates[i];

      // 诺当前元素和前一个元素相等.
      // 则本次循环结束,防止出现重复组合.
      // if (i > firstIndex && candidates[i] === candidates[i - 1]) { continue }

      if (currntValue + sum > target) break;
      path.push(currntValue)
      sum += currntValue;
      dfs(i + 1)
      sum -= currntValue
      path.pop()
    }
  }
  dfs(0);
  const result1 = Array.from(new Set(result.map(JSON.stringify)), JSON.parse)
  return result1;
}
// console.log("1111111", combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

var partition = function (s) {

  let result = []
  let path = []

  const dfs = (startIndex) => {

    // 终止条件
    // 想法1
    // if (path.every(x => isPalindrome(x))) {
    //     result.push([
    //         ...path
    //     ])
    //     return;
    // }
    // 想法2
    // 切割线切割到最后一位时.停止切割
    if (startIndex >= s.length) {
      result.push([
        ...path
      ])
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      // 切割
      // const arr = [s.substring(0, i), s.substring(i, s.length - 1)]
      const subStr = s.slice(startIndex, i + 1)
      if (!isPalindrome(subStr)) continue
      path.push(subStr);
      dfs(i + 1)
      path.pop()
    }
  }
  dfs(0)
  return result
};

// 验证回文串~
function isPalindrome(x) {
  let str = String(x)
  let reverseStr = str.split("").reverse().join("")
  return str === reverseStr
}

// console.log(partition("aab"));

/**
 * 复制IP地址
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let result = [];
  let path = []

  const dfs = (firstIndex) => {

    // 终止条件
    const length = path.length
    if (length > 4) return;
    if (firstIndex === s.length && length === 4) {
      result.push(path.join("."))
      return;
    }

    for (let j = firstIndex; j < s.length; j++) {
      // 不符合条件则continue
      const currValue = s.slice(firstIndex, j + 1);

      if (currValue.length > 1 && currValue[0] === "0") break;
      if (Number(currValue) > 255) break

      path.push(currValue)
      dfs(j + 1);
      path.pop()
    }
  }
  dfs(0)
  return result;
};

// console.log(restoreIpAddresses("101023"));

// 子集.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 递增子序列.
var findSubsequences = function (nums) {
  let result = [];
  let path = [];
  const dfs = (firstIndex) => {
    // 停止条件
    if (path.length >= 2) {
      result.push([...path])
      return;
    }
    // 本层记录已经使用过的数组
    let used = []
    for (let i = firstIndex; i < nums.length; i++) {
      // 不满足的直接跳过~
      if ((path.length > 0 && nums[i] < nums[path.length - 1]) || used[nums[i] + 100]) continue
      used[nums[i] + 100] = true
      path.push(nums[i])
      dfs(i + 1)
      path.pop()
    }
  }
  dfs(0)
  return result
};

// console.log("subsets", findSubsequences([4, 6, 7, 7]));


// 全排列
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = []
  let path = []

  // used 数组标记是否取过该数.
  let used = []
  const dfs = () => {
    if (path.length === nums.length) {
      result.push(Array.from(path))
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used.length && used[i]) continue
      path.push(nums[i])
      used[i] = true
      dfs(i + 1)
      // 需要回溯,继续取值
      used[i] = false
      path.pop()
    }
  }
  dfs()
  return result
};

// console.log(permute([1, 2, 3]));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {

  let result = []
  let path = []
  // used 数组标记是否取过该数.
  let used = []
  const dfs = () => {
    if (path.length === nums.length) {
      result.push(Array.from(path))
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used.length && used[i]) continue
      path.push(nums[i])
      used[i] = true
      dfs(i + 1)
      // 需要回溯,继续取值
      used[i] = false
      path.pop()
    }
  }
  dfs()
  result = Array.from(new Set(arr.map(item => JSON.stringify(item))), JSON.parse)
  return result
};

// console.log("permuteUnique", permuteUnique([1, 1, 2]));

// N 皇后问题
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let result = []
  let path = []
  const chessboard = new Array(n).fill(["."])
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (chessboard[i][j] === "*") {
  //       // 判断是否符合要求
  //       if (judgeRule(i, j)) {
  //         // result.push(Array.from(chessboard[i]))
  //         // path
  //       }
  //     }
  //   }
  // }

  // row 表示的是当前第几行了.
  const dfs = (row) => {

    if (row === n) {
      result.push([...path]);
      return;
    }
    // for(let i =0;i<n;i++){
    //   if(judgeRule(i,j,))
    // }
  }
  dfs(0)
  return result
};

const judgeRule = (i, j, row) => {

}

// console.log(solveNQueens(4));