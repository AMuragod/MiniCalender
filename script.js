
const monthName=document.getElementById("month_name");
const dayName=document.getElementById("day_name");
const dayNumber=document.getElementById("day_number");
const yearEl=document.getElementById("year");

const date=new Date();
const month=date.getMonth();
monthName.innerText=date.toLocaleString("en",{month:"long"});
dayName.innerText=date.toLocaleString("en",{weekday:"long"});
dayNumber.innerText=date.getDate();
yearEl.innerText=date.getFullYear();



