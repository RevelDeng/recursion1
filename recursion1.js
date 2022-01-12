// Recursive Sigma
function rSigma(startInput) {
    if (startInput < 1) {
        return 0
    }
    return Math.trunc(startInput) + rSigma(startInput - 1)
}
console.log(rSigma(2.5))

// Recursive Factorial
function rFact(startInput) {
    if (startInput < 1) {
        return 1
    }
    return Math.trunc(startInput) * rFact(startInput - 1)
}
console.log(rFact(6.5))