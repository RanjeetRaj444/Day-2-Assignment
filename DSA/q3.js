// Move Zeroes #283https://leetcode.com/problems/move-zeroes/

function moveZeros(nums) {
  let ind = 0;
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[ind++] = nums[i];
    }
  }

  while (ind < nums.length) {
    nums[ind++] = 0;
  }
}
