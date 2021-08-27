let array = [3,2,4]
let arr = []

var twoSum = function (nums, target) {
    
    for (i = 0; i < nums.length; ++i) {
        for (j = 1; j < nums.length; ++j) {
            if (nums[i] + nums[j] == target) {
                arr.push(i, j)
                return arr
                break
            }
        }
    }
    
};

console.log(twoSum(array, 6))