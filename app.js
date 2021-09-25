const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const result = document.querySelector("#result");

var sum = 0 ;
function checkButtonHandler(){
    var numArr = [] ;
    console.log(numArr) ;
    console.log(dateOfBirth.value);
    const dob = dateOfBirth.value ;
    var numDOB= dob.replaceAll('-','0');
    var numDOBValue = Number(numDOB) ;
    console.log(numDOB) ;
    for(let i=9 ; i>-1 ; i--){
        numArr[i] = Math.trunc(numDOBValue / Math.pow(10,i));
        numDOBValue = numDOBValue - (numArr[i]*(Math.pow(10,i))) ;
    }
    console.log(numArr);
    for(let j=0 ; j<10 ;j++){
        sum = numArr[j] + sum ;
    }
    if(sum%luckyNumber.value === 0){
        result.innerText = "Your Birthday is lucky !" ;
    }
    else{
        result.innerText = "Your Birthday is not so lucky !";
    }
}

checkButton.addEventListener("click",checkButtonHandler);
