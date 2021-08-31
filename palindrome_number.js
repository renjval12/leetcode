var isPalindrome = function (x) {
    
    let newNum = x.toString().split('').join('')
    let reverseNum = parseInt(x.toString())
    // .split('').reverse().join('')
    // newNum = parseInt(newNum)
    // reverseNum = parseInt(reverseNum)


    console.log(newNum)
    console.log(reverseNum)
};


isPalindrome(100)