const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('');
    let temp = [];
    let arrArr = [];
    let arrDotsDashes = [];
    for (i=0; i < arr.length+1; ++i){ 
        if (i%10 == 0 && i !== 0) {        
                arrArr.push(temp.slice());      
                temp.length=0;       
        }   
        temp.push(arr[i]);
    }

    temp.length=0;
    arrArr.forEach(item => {
        item.reduce((prev, item1, index) => {                                 
            if ((index+1)%2 == 0) {
                if (prev+item1 == 10) {
                    temp.push('.');
                } else if (prev+item1 == 11) {
                    temp.push('-');
                } else if (prev+item1 == '**') { 
                    if (temp[temp.length-1] != ' ') temp.push(' ');
                } else if (prev+item1 == '00') {
                    //nop;
                } 
            }   else if ((index+1)%1 == 0) {
                return prev = item1;     
            }
        }, 0);

        arrDotsDashes.push((MORSE_TABLE[temp.join('')] == undefined) ? ' ' : MORSE_TABLE[temp.join('')]);
        temp.length=0;
    });

    return arrDotsDashes.join('');
}

module.exports = {
    decode
}