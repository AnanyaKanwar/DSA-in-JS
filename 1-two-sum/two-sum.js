var twoSum = function (nums, target) {
    let i = 0;
    
    while (i < nums.length) {
        let j = i + 1; 
        while (j < nums.length) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j]; 
            }
            j++;
        }
        i++; 
    }
};