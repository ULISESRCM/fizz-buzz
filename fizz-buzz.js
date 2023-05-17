function fizz_buzz(N) {
  const result = [];
  for (let num = 1; num <= N; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      result.push("FizzBuzz");
    } else if (num % 3 === 0) {
      result.push("Fizz");
    } else if (num % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(num);
    }
  }
  return result;
}

console.log(fizz_buzz(2));
// Output: [1, 2]

console.log(fizz_buzz(5));
// Output: [1, 2, "Fizz", 4, "Buzz"]

console.log(fizz_buzz(9));
// Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz"]

console.log(fizz_buzz(15));
// Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
