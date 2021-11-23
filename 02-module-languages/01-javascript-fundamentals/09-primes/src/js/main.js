console.log('************** PRACTICE *********************');
console.log('09 - Primes');

const isPrime = number => {
    for (let i = 2; i < number; i++)
        if (number % i === 0) return false;
    return number > 1;
}

function showPrimes(from, to) {
    for (let number = from; number <= to; number++) {
        isPrime(number)
        ? console.log(`El número ${number} es primo`)
        : console.log(`El número ${number} no es primo`);
    }
}

console.log(isPrime());
console.log(showPrimes(1, 100));