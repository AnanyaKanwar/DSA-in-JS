/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    let dividend=Math.abs(x);
    let temp=0;
    while(dividend>0){
        let rem=dividend%10;
        temp=temp*10+rem;
        dividend=Math.floor(dividend/10);
    }

    if(temp==x) return true;


    return false;
};