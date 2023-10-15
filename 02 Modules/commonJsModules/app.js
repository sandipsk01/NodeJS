// Note:  Please do not change the prewritten code

// import the required module here
const math=require('./math');

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
    const total = math.add(nums);
    console.log("The sum is " + total+".");

    const avg = math.mean(nums);
    console.log("The mean is "+ avg+".");

};
Solution();
module.exports = Solution;
