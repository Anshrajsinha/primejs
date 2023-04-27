const number = document.getElementById("number")
const prime = () => {
    if (number.value < 2) {
        return alert(number.value + " is not a prime number")
    }
    var isPrime = true
    for (let i = 2; i < number.value; i++) {
        if (number.value % i == 0) {
            isPrime = false
            break;
        }
    }
    if (isPrime == true) {
        alert(number.value + " is a prime number")
    } else {
        alert(number.value + " is NOT a prime number")
    }
}