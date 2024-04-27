let currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

let fullDate = `${year} - ${month} - ${day}`;

document.getElementById('current-date').textContent = fullDate;