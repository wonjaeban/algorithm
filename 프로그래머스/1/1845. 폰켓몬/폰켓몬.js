function solution(nums) {
    const distinctNums = new Set(nums);
    const maxLength = nums.length / 2;
    return maxLength < distinctNums.size ? maxLength : distinctNums.size;
}