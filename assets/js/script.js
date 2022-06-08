// Date in Header
const dateAndTime = () => {
    const currentDay = $("#currentDay") // current day container
    currentDay.text(moment().format('dddd, MMMM Do YYYY')); // ex. Tuesday June 6th, 2022 via moment.js
}

dateAndTime(); // calls function

// Creating Time Blocks
let currentHour = moment().hour() // gets current hour

const timeBlocks = () => {
    const allHours = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM",
        "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"] // all of the hours as string in array
    let workStart = 9 // starts at 9 am
    let workEnd = 17 // ends at 5 pm
    const timeBlockDiv = $(".container"); // time block div

    for (workHour = workStart; workHour <= workEnd; workHour++) { //builds time blocks for each work hour
        let blocks = '<div class="row time-block" id="' + allHours[workHour] + '"><div class="col-md-1 col-2 hour">' + allHours[workHour] + '</div> '; // basic time block

        workHour < currentHour ? // if time in the past
            blocks = blocks + '<textarea class="col-md-10 col-8 description past"></textarea>' :
        workHour === currentHour ? // if current hour
            blocks = blocks + '<textarea class="col-md-10 col-8 description present"></textarea>' :
        blocks = blocks + '<textarea class="col-md-10 col-8 description future"></textarea> '; // if time in present

        blocks = blocks + '<button class="btn saveBtn col-md-1 col-2" value="' + allHours[workHour] + '"><i class="fas fa-save"></i></button>' + '</div>' // adds save button

        timeBlockDiv.append(blocks) // appends blocks to container div
    }
}

timeBlocks(); // calls function

// Creates to Local Storage Entry
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));

//Creates Entry when Saved
$(".saveBtn").click(function () {
    let schedule = $(this).siblings(".description").val();  //saves textarea
    let timeId = $(this).parent().attr("id") //sets key to parent id
    localStorage.setItem(timeId, schedule)
})