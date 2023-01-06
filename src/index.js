module.exports = function toReadable (number) {

    let arrNum = number.toString().split('');
    let newArr = [];

    let single = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let decimalTopTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                   'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decimalRest = ['', '','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    

    if (number == 10) return 'ten';

    if (arrNum.length == 1) newArr.push(single[arrNum[0]]);

    if (arrNum.length == 2 && arrNum[0] == 1 && arrNum[1] != 0) 
        newArr.push(decimalTopTen[arrNum[1]]);
    
    if (arrNum[1] == 0 && arrNum.length == 2) {
        newArr.push(decimalRest[arrNum[0]]);
    }
    
    if (arrNum.length == 2 && arrNum[0] > 1 && arrNum[1] != 0) {
        newArr.push(decimalRest[arrNum[0]]);
        newArr.push(single[arrNum[1]]);
    }
    
    if (arrNum.length == 3 && arrNum[1] == 0 && arrNum[2] != 0) {
        newArr.push(single[arrNum[0]]);
        newArr.push('hundred');
        newArr.push(single[arrNum[2]]);
    }

    if (arrNum.length == 3 && arrNum[1] == 1 && arrNum[2] <= 9) {
        newArr.push(single[arrNum[0]]);
        newArr.push('hundred');
        newArr.push(decimalTopTen[arrNum[2]]);
    }

    if (arrNum.length == 3 && arrNum[1] >= 2 && arrNum[2] == 0) {
        newArr.push(single[arrNum[0]]);
        newArr.push('hundred');
        newArr.push(decimalRest[arrNum[1]]);
    }

    if (arrNum.length == 3 && arrNum[1] >= 2 && arrNum[2] != 0) {
        newArr.push(single[arrNum[0]]);
        newArr.push('hundred');
        newArr.push(decimalRest[arrNum[1]]);
        newArr.push(single[arrNum[2]]);
    }

    if (arrNum.length == 3 && arrNum[1] == 0 && arrNum[2] == 0) {
        newArr.push(single[arrNum[0]]);
        newArr.push('hundred');
    }



    return newArr.join(' ');
};