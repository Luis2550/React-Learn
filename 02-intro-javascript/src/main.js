

var isPalindrome = function(x) {

    if(x < 0){
        return false
    }
    
    const numero = x.toString();
    const palindromo = x.toString().split('').reverse()

    if(numero == palindromo.join('')){
        return true
    }else{
        return false
    }

};

console.log(isPalindrome(-10))