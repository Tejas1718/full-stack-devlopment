function isPrime(number) {
  // Handle edge cases
  if (number <= 1) {
    return false;
  }
  if (number === 2 || number === 3) {
    return true;
  }
  // Check for divisibility by 2 and 3
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  // Check for divisors from 5 onwards, in steps of 6 (5, 7, 11, 13, ...)
  // This skips multiples of 2 and 3 more efficiently
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true; // If no divisors were found, the number is prime
}

console.log(`Is 17 prime? ${isPrime(17)}`); // true
console.log(`Is 39 prime? ${isPrime(39)}`); // false (39 is divisible by 3 and 13)
console.log(`Is 2 prime? ${isPrime(2)}`);   // true
console.log(`Is 1 prime? ${isPrime(1)}`);   // false