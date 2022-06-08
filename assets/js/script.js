// Date in Header
let today = new Date(); // gets today's date
let daySuffix = "" // empty string to be defined later
let date = today.getDate() + daySuffix // current date with suffix (1st, 2nd, 3rd)

const dateAndTime = () => {
    date === 1 || date === 21 || date === 31? // if certain days, set suffix to st, nd, rd, th
        daySuffix = "st":
    date === 2 || date === 22?
        daySuffix = "nd":
    date === 3 || date === 23?
        daySuffix = "rd":
    daySuffix = "th";

    const weekdayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; //days of weeks in array
    let dayOfWeek = weekdayList[today.getDay()]; // gets day of week depending on date
    const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"]; // name of months in array
    let month = monthList[today.getMonth()]; // gets month depending on date
    let year = today.getFullYear() // gets year
    const currentDay = $("#currentDay") // current day container

    currentDay.text(`Today is ${dayOfWeek}, ${month} ${date}, ${year}`);
}

dateAndTime(); // calls function


// Creating Time Blocks
let currentHour = today.getHours() // gets current hour

const timeBlocks = () => {
    const allHours = ["12 AM","1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM",
    "1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM"] // all of the hours as string in array
    let workStart = 9 // starts at 9 am
    let workEnd = 17 // ends at 5 pm
    const timeBlockDiv = $(".container"); // time block div

    for (workHour = workStart; workHour <= workEnd; i++) { //builds time blocks for each work hour
        let blocks = '<div class="row time-block"> ' + '<div class="col-md-1 col-2 hour">' + allHours[i] + '</div> '; // basic time block
        
        workHour < currentHour ? // if time in the past
            blocks = blocks + '<textarea class="col-md-10 col-8 description past" id="text' + allHours[i] + '"></textarea>' :
        workHour === currentHour ? // if current hour
            blocks = blocks + '<textarea class="col-md-10 col-8 description present" id="text' + allHours[i] + '"></textarea>' :
        blocks = blocks + '<textarea class="col-md-10 col-8 description future" id="text' + allHours[i] + '"></textarea> '; // if time in present
        
        blocks = blocks + '<button class="btn saveBtn col-md-1 col-2" value="' + allHours[i] + '"><i class="fas fa-save"></i></button>' + '</div>' // adds save button

        timeBlockDiv.append(blocks) // appends blocks to container div
    }
}

timeBlocks(); // calls function

// Add Entries

$(".saveBtn").click(function() {

})

// Saves to Local Storage