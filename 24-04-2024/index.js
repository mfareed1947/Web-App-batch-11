// var currentDate = new Date();
// var currentDate = new Date().getDate();
// var currentDate = new Date().getDay();
// var currentDate = new Date().getTime();
// const currentDate = new Date().getHours();
// const currentDate = new Date().getFullYear();
// var currentDate = Date.parse('01 Jan 1970 00:00:00 GMT');
// console.log(currentDate)

// const event = new Date(1993, 6, 28, 14, 39, 7);

// console.log(event.toString());
// console.log(event.toDateString());

var events = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(events)
var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

// console.log(events.toLocaleDateString('de-DE', options));
// // Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012

// console.log(events.toLocaleDateString('ar-EG', options));
