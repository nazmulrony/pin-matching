const generatePin = function(){
    const randomPin = Math.round(Math.random() * 10000);
    const string = randomPin + "";
    if(string.length===4){
        return randomPin;
    }else{
        return generatePin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = generatePin();
    document.getElementById('display-pin').value = pin;
})
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const displayNumberElement = document.getElementById('display-number');
    const previousNumber = displayNumberElement.value;

    if(isNaN(number)){
        if(number==='C'){
            displayNumberElement.value = '';
        }
        if(number=== '<'){
            const a =previousNumber.split('');
            a.pop();
            displayNumberElement.value = a.join('')

        }
    } else{
        const newNumber = previousNumber+number;
        displayNumberElement.value = newNumber;
    }
})

document.getElementById('btn-submit').addEventListener('click', function(){
    const generatedPin = document.getElementById('display-pin').value; 
    const inuputPin = document.getElementById('display-number').value; 
    const msgSuccess = document.getElementById('msg-success');
    const msgFailure = document.getElementById('msg-failure');
    if(generatedPin===inuputPin){
        msgSuccess.style.display = 'block';
        msgFailure.style.display = 'none';
        console.log('success');
    }else{
        msgFailure.style.display = 'block';
        msgSuccess.style.display = 'none';
        console.log('FAIL');
    }
})