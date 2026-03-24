/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five=0;
    let ten=0;
    let twenty=0;

    for(let i=0;i<bills.length;i++){
        if(bills[i]===5) five++;
        else if(bills[i]===10){
            if(five<=0) return false;
            five--;
            ten++;
        }
        else if(bills[i]===20){
            if(five>0 && ten>0){
                five--;
                ten--;
                twenty++;
            }
            else if(five>=3){
                five=five-3;
            }
            else{
                return false;
            }
        }
    }

    return true;
    
};