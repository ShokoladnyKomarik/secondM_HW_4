function capitalizeString(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalizeString("KALENDEROVA"));
console.log(capitalizeString("dIANA"));


function charCount(str, char) {
    let count = 0;

    let lowerStr = str.toLowerCase();
    let lowerChar = char.toLowerCase();

    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerChar) {
            count++;
        }
    }

    return count;
}

console.log(charCount("Abrakadabra", "a"));
console.log(charCount("hello", "z"));


function hidePhone(phoneNumber) {
    return phoneNumber.slice(0, -2) + "xx";
}

console.log(hidePhone("+996 555 123 123"));


function evenOddSum(numbersArray) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        let currentNumber = numbersArray[i];

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }

    return [evenSum, oddSum];
}

console.log(evenOddSum([50, 60, 60, 45, 71]));
