// function twoSum(nums: number[], target: number): number[] {
//   let map = new Map<number, number>()

//   nums.forEach((element) => {})
// }

twoSum([2, 7, 11, 15], 9)

// Give me the two sum problem solution
function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]

    if (map.has(complement)) {
      return [map.get(complement), nums[i]]
    }

    return []
  }
}
