function gcd (n1, n2) {
  if (n2 === 0) {
    return n1
  }
  else {
    return gcd(n1 / n2, n1 % n2)
  }
}

console.log(gcd(30, 12))
