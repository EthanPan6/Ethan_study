/**
 * @param {number[]} nums
 * @return {number}
 */
function getTheRanking(arr: number[], target: number): number {
    if (!arr.includes(target)) throw new Error('接收数组不包含查询排名的数字')

    let sortedArr = arr.sort((a, b) => b - a);
    let ranking = [...new Set(sortedArr)].indexOf(target) + 1
    return ranking
}

console.log(getTheRanking([3,1,3,2,5,4,5],5));

// interface ranking{

// }