

// 在排序数组中查找第一个和最后一个的位置
const searchRange = (nums: any, target: number) => {

  if (!nums.length) return [-1, -1];

  let firstIndex = nums.indexOf(target);
  if (firstIndex === -1) return [-1, -1];

  let finallyIndex = firstIndex;

  for (let index = firstIndex; index < nums.length; index++) {
    const element = nums[index];
    if (element === target) {
      finallyIndex++
    } else {
      break;
    }
  }
  return [firstIndex, finallyIndex - 1];
};

let arr1 = [1, 5, 2, 7, 2, 9, 10];
console.log("result", searchRange(arr1, 5))



/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {

//   const max = Math.pow(2, 31);
//   const min = Math.pow(-2, 31);

//   const symbol = x > 0 ? 1 : -1;

//   console.log("#####", String(x).split(""))

//   const result = String(x).split("").filter(x => x !== "-").reverse().join("")
//   console.log(typeof result)

// };

console.log(reverse(-123));

