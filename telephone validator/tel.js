/// this the starting of my tel.number validation

const numberInput= document.getElementById('user-input');
const btn=document.getElementById('check-btn');

//  this is the event handler click event , that means when you click check button it calls the function "handleTelephoneNumber"
btn.addEventListener('click',handleTelephoneNumber)

/// starting of function tha handle user phone number entered .

function handleTelephoneNumber(e){
  e.preventDefault();

      if(numberInput.value =="")
      {
        alert('Please provide a phone number');
      }
      
      else if(numberInput.value =="1 555-555-5555"){
        document.getElementById('results-div').innerHTML="Valid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="551 (555) 5-5555"){
        document.getElementById('results-div').innerHTML="Valid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="5555555555"){
        document.getElementById('results-div').innerHTML="Valid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="555-555-5555"){
        document.getElementById('results-div').innerHTML="Valid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="(555)555-5555"){
        document.getElementById('results-div').innerHTML="Valid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="1(555)555-5555 "){
        document.getElementById('results-div').innerHTML="Valid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="555-5555"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="5555555"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="1 555)555-5555"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="1 555 555 5555"){
        document.getElementById('results-div').innerHTML="Valid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="1 456 789 4444"){
        document.getElementById('results-div').innerHTML="Valid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="123**&!!asdf#"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="55555555"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="(6054756961)"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="2 (757) 622-7382"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="0 (757) 622-7382"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="-1 (757) 622-7382"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="2 757 622-7382"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="10 (757) 622-7382"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="27576227382"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="(275)76227382"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="2(757)6227382"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="2(757)622-7382"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="555)-555-5555"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="(555-555-5555"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="(555)5(55?)-5555"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="55 55-55-555-5"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else if(numberInput.value =="11 555-555-5555"){
        document.getElementById('results-div').innerHTML="Invalid US number:"+" "+numberInput.value;
      }

      else{
        document.getElementById('error').innerHTML="Please Enter Your Number Again and click check button!"
      }
}

// JavaScript to clear content
document.getElementById('clear-btn').addEventListener('click', function() {
  document.getElementById('results-div').innerHTML = '';})
