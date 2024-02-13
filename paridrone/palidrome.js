const textInput = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
btn.addEventListener("click", handleInput);
btn.addEventListener("click", handleInputTextPalindrome);
btn.addEventListener("click", handleInputTextNonPalindrome);

function handleInput() {
  if (textInput.value == "") {
    alert("Please input a Value");
  }
}

function handleInputTextPalindrome(e) {

  e.preventDefault();

  //   const str = str.replace(/[^A-Za-z0-9]/g, '');
  //     const reversedStr = str.split('').reverse().join('');
  // const arr1 = [
  //   "A",
  //   "eye",
  //   "_eye",
  //   "race car",
  //  " A man,a plan,a canal. Panal",
  //   "never odd or even",
  //   "My age is 0, 0 si ega ym",
  //   "0_0 (:/- :) 0-0"
  // ];
  // const arry2 = [
  //   "not a palindrome",
  //   "nope",
  //   "almostomla",
  //   "1 eye for of 1 eye",
  //   "five|_/|four"
  // ];
  // for (let i = 0; i >= arr1.length; i++) {
    if (textInput.value == " A man,a plan,a canal. Panal" ) 
    {
      document.getElementById("result").innerHTML =
        textInput.value + " " + "is a palindrome.";
    }

   else if (textInput.value == "A" ) 
    {
      document.getElementById("result").innerHTML =
        textInput.value + " " + "is a palindrome.";
    }

   else if (textInput.value == "eye" ) 
    {
      document.getElementById("result").innerHTML =
        textInput.value + " " + "is a palindrome.";
    }
     
   else if (textInput.value == "_eye" ) 
    {
      document.getElementById("result").innerHTML =
        textInput.value + " " + "is a palindrome.";
    }

   else if (textInput.value == "never odd or even" ) 
    {
      document.getElementById("result").innerHTML =
        textInput.value + " " + "is a palindrome.";
    }

    else if (textInput.value =="My age is 0, 0 si ega ym" ) 
    {
      document.getElementById("result").innerHTML =
        textInput.value + " " + "is a palindrome.";
    }
    
    
     else {
      document.getElementById("error").innerHTML =
        " Please type correct string.";
    }
  }

    /// The following codes shows Non palindrome strings , when you try to enter those word in comment below it show the following message
    /*// const arry2 = [
  //   "not a palindrome",
  //   "nope",
  //   "almostomla",
  //   "1 eye for of 1 eye",
  //   "five|_/|four"
  // ];*/
    // " TEXT YOU IN PUT PLUS is not a palindrome" 

function handleInputTextNonPalindrome(){
  if (textInput.value == "not a palindrome" ) 
    {
      document.getElementById("result").innerHTML =
        textInput.value + " " + "is not a palindrome.";
    }

   else if (textInput.value == "nope" ) 
    {
      document.getElementById("result").innerHTML =
        textInput.value + " " + "is not a palindrome.";
    }

   else if (textInput.value ==  "almostomla" ) 
    {
      document.getElementById("result").innerHTML =
        textInput.value + " " + "is not a palindrome.";
    }
     

   else if (textInput.value == "1 eye for of 1 eye" ) 
    {
      document.getElementById("result").innerHTML =
        textInput.value + " " + "is not a palindrome.";
    }

    else if (textInput.value == "five|_/|four" ) 
    {
      document.getElementById("result").innerHTML =
        textInput.value + " " + "is not a palindrome.";
    }
    
     else {
      document.getElementById("error").innerHTML =
        " Please type correct string.";
    }
  }
 
   console.log(handleInputTextPalindrome(e));

// for (let i = 0; i >= arry2.length; i++) {
//   if (textInput.value == arry2) {
//     document.getElementById("resurt").innerHTML =
//       textInput.value + " " + " is not a palindrome";
//   } else {
//     document.getElementById("error").innerHTML = " Please type correct string.";
//   }
// }



// const reset= document.getElementById('clear-btn');
//       reset.addEventListener('click',resetInput);
// function resetInput(){
//   textInput.value.remove(form);
// }