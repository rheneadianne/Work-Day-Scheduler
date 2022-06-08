let today = new Date();
let daySuffix = ""
let date = today.getDate() + daySuffix
const currentDay = $("#currentDay")

const dateAndTime = () => {

    date === 1 || date === 21 || date === 31?
        daySuffix = "st":
    date === 2 || date === 22?
        daySuffix = "nd":
    date === 3 || date === 23?
        daySuffix = "rd":
    daySuffix = "th";

    const weekdayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayOfWeek = weekdayList[today.getDay()];
    const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = monthList[today.getMonth()];
    
    currentDay.text(`${dayOfWeek}, ${month} ${date}`);
}

let currentHour = today.getHours()
console.log(currentHour);

dateAndTime()