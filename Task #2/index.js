function calculate() {
    let sum = 0;
    const nums = new Array(101);

    for(let i = 0; i < nums.length; i++)
        nums[i] = i;

    for(let i = 0; i < nums.length; i++)
        sum += nums[i];

    console.log(sum);
}