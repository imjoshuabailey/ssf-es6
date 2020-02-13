//assign fizzBuzz30 an arrow function that does not take any inputs.  fizzBuzz30 should output an array of all the numbers from
//1 through 30 replacing numbers divisible by 3 with 'fizz', numbers divisible by 5 with 'buzz' and numbers divisible by 3 and 5 with
//'fizzbuzz'

let fizzBuzz30 = () => {
    let countArray = []
    for (let i = 1; i <= 30; i++) {
        if (i % 3 && i % 5) {
           countArray.push("fizzbuzz");
        } else if (i % 3) {
           countArray.push("fizz");
        }else if (i % 5) {
           countArray.push("buzz")
        }
    }
    return (countArray)
};









//Do not edit
module.exports = fizzBuzz30;