let currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let day = currentDate.getDate();

let fullDate = `${year} - ${month} - ${day}`;

document.getElementById('current-date').textContent = fullDate;