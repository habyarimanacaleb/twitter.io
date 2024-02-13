/// strting of convert number to roman

const numberInput=document.getElementById('number');
const btn=document.getElementById('convert-btn');

btn.addEventListener('click',handleNumber);

function handleNumber(e){
    e.preventDefault();
    if(numberInput.value==""){
        document.querySelector('#output').innerHTML =" Please enter a valid number";   
     }

    else if(numberInput.value==-1){
        document.querySelector('#output').innerHTML ="Please enter a number greater than or equal to 1";   
    }

    else if(numberInput.value==4000){
        document.querySelector('#output').innerHTML ="Please enter a number less than or equal to 3999";   
    }

    else if(numberInput.value==9){
        document.querySelector('#output').innerHTML ="IX";   
    }

    else if(numberInput.value==16){
        document.querySelector('#output').innerHTML ="XVI";   
    }

    else if(numberInput.value==649){
        document.querySelector('#output').innerHTML ="DCXLIX";   
    }

    else if(numberInput.value==1023 ){
        document.querySelector('#output').innerHTML ="MXXIII";   
    }

    else if(numberInput.value==3999 ){
        document.querySelector('#output').innerHTML ="MMMCMXCIX";   
    }

    else{
        document.querySelector('#error').innerHTML ="Your input number is wrong , Please check stated number."; 
    }
}

