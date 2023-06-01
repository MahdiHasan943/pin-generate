document.getElementById('pin').addEventListener('click', () => {
    const getPin = () => {
        const pin = gpin();
        const pinString = pin + '';
        if (pinString.length === 6) {
            return pin;
        }
        else {
            return getPin()
        }

    }

   
    const gpin = () => {
        // return Math.floor(Math.random() * (max - min + 1000000) ) + min;
        const random = Math.round(Math.random() * 1000000);
        return random
    }


    const inputPin = document.getElementById('displayPin');
    inputPin.value = getPin();


});


document.getElementById('calculator').addEventListener('click', function(event) {
    
    const number = event.target.innerText;
    const TypeNumberFeild = document.getElementById('TypeNumberFeild');
    const preNumber = TypeNumberFeild.value

    if (isNaN (number)){
        if (number === 'c') {
           TypeNumberFeild.value=''
        }
        else if (number === '<') {
            const digits = preNumber.split('');
            digits.pop()
            const remainingDigit = digits.join('');
            TypeNumberFeild.value = remainingDigit;
        }
    
}
    else {
        const newNumber = preNumber + number;
    
        TypeNumberFeild.value=newNumber
    }
   
})

document.getElementById('verify').addEventListener('click', function () {
    
    const displayPinFeild = document.getElementById('displayPin')
    const currentPin = displayPinFeild.value;
    const TypePinFeild = document.getElementById('TypeNumberFeild')
    const currentTypePin = TypePinFeild.value;
    
    const cong = document.getElementById('cong');
    const error = document.getElementById('error');

    if (currentTypePin === currentPin) {
        cong.style.display = 'block'
        error.style.display='none'

    }
    else {
        error.style.display='block'
        cong.style.display = 'none'

    }

})