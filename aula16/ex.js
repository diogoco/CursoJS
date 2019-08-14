
let v = function(x){
    return x*2

}

console.log(v(6))

function fatorial(n){
    let fat = 1 
    for(let c = n; c>1; c--){
        fat *=c
    }
    return fat
}
console.log(fatorial(5))

function fact(n){
    if(n==1){
        return 1
    }
   return n*fact(n-1)
}

console.log(fact(5))