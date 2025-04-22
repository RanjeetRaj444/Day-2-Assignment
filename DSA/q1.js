// --Two Sum #1https://leetcode.com/problems/two-sum/

solution: - function twoSum(nums, target) {
  // nums.sort((a,b)=>a-b)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
