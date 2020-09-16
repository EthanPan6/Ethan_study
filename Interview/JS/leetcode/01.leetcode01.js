/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

*/






const twoSum = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        if (map.has(temp)) {
            return [map.get(temp), i]
        } else {
            map.set(nums[i], i)
        }
    }
    return []
}



const twoSum = (nums, target) => {
    const prevNums = {}; // 存储出现过的数字，和对应的索引               

    for (let i = 0; i < nums.length; i++) { // 遍历元素   
        const curNum = nums[i]; // 当前元素   
        const targetNum = target - curNum; // 满足要求的目标元素   
        const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引
        if (targetNumIndex !== undefined) { // 如果存在，直接返回 [目标元素的索引,当前索引]
            return [targetNumIndex, i];
        } else { // 如果不存在，说明之前没出现过目标元素
            prevNums[curNum] = i; // 存入当前的元素和对应的索引
        }
    }
}




var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        if (~nums.indexOf(temp) && nums.indexOf(temp) !== i) {
            return [i, nums.indexOf(temp)]
        }
    }
};