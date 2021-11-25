// What is Pure Function
` * It Returns the same result if given the same arguments
  * It does not cause any observable side effects
`

function sqr(n) {
    return n*n
}
var result = sqr(16)

console.log(result)

