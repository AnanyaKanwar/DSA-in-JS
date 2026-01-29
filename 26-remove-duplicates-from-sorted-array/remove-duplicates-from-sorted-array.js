var removeDuplicates = function(nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }

    let i = 0;
    for (let val of set) {     // iterate Set properly
        nums[i] = val;
        i++;
    }

    return set.size;          // return number of unique elements
};
