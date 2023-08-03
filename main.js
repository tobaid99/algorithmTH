


function checkPalindrome(string) {

    
    const reverseString = string.split('').reverse('').join('');

    return string == reverseString;

    if(string == reverseString) {
        // console.log('It is a palindrome');
        
    }
    else {
        // console.log('It is not a palindrome');
        
    }
}

console.log(checkPalindrome("mom"));