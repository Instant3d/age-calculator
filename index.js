// let userInput = document.getElementById("date");
let calcBtn = document.getElementById("calculate");
let result = document.getElementById("result");
let userInput = document.querySelector(".date")

userInput.max = new Date().toISOString().split("T")[0];


calcBtn.addEventListener("click", calculateAge)

function calculateAge() {

    let birthDate = new Date(userInput.value);

    let currentDate = new Date();

    let birthDateDate = birthDate.getDate();
    let birthDateMonth = birthDate.getMonth() + 1;
    let birthDateYear = birthDate.getFullYear();

    let currentDateDate = currentDate.getDate();
    let currentDateMonth = currentDate.getMonth() + 1;
    let currentDateYear = currentDate.getFullYear();
    let ageYear, ageMonth, ageDay;
    ageYear = currentDateYear - birthDateYear

    if (currentDateMonth < birthDateMonth) {
        ageYear--;
        ageMonth = 12 + currentDateMonth - birthDateMonth;
    } else {
        ageMonth = currentDateMonth - birthDateMonth;
    }

    if (currentDateDate <= birthDateDate) {
        ageMonth--;
        ageDay = getDaysInAMonth(birthDateYear, birthDateMonth) + currentDateDate - birthDateDate
    } else {
        ageDay = currentDateDate - birthDateDate;
    }

    if (ageMonth < 0) {
        ageMonth = 11;
        ageYear--;
    }

    result.textContent = `You are ${ageYear} years, ${ageMonth} months and ${ageDay} days old.`

}

function getDaysInAMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

