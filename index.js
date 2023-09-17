// let userInput = document.getElementById("date");
let calcBtn = document.getElementById("calculalte");
let result = document.getElementById("result");
let userInput = document.querySelector(".date")

userInput.max = new Date().toISOString().split("T")[0];

function calculateAge(){

let birthDate = new Date(userInput.value);
console.log (userInput.value);
console.log(birthDate);

let currentDate = new Date();

let birthDateDate = birthDate.getDate();
let birthDateMonth = birthDate.getMonth()+1;
let birthDateYear = birthDate.getFullYear();

let currentDateDate = currentDate.getDate();
let currentDateMonth = currentDate.getMonth() + 1;
let currentDateYear = currentDate.getFullYear();
let ageYear, ageMonth, ageDay;
ageYear = currentDateYear - birthDateYear

    if (currentDateMonth < birthDateMonth){
        ageYear--;
        ageMonth = 12 + currentDateMonth - birthDateMonth;
    }
    else {
        ageMonth = currentDateMonth - birthDateMonth;
    }

    if (currentDateDate <= birthDateDate){
        ageMonth--;
        ageDay = getDaysInAMonth(birthDateYear, birthDateMonth) + currentDateDate - birthDateDate
    }
    else{
        ageDay = currentDateDate - birthDateDate;
    }

    if (ageMonth<0){
        ageMonth = 11;
        ageYear--;
    }

    
console.log(`You are ${ageYear} years, ${ageMonth} months and ${ageDay} days old.`); 

}

function getDaysInAMonth(year, month){
    return new Date(year, month, 0).getDate();
}

calcBtn.addEventListener("click", calculateAge);