/* let date1 = new Date("September 2, 2019 09:00:00")

let date2 = new Date(0)

let date3 = new Date(31556908800)

let date4 = new Date(86400000)

console.log(date1, date2, date3, date4) */

let day = document.getElementById("day")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let date1 = new Date()


day.innerHTML = wochenTag[date1.getDay()]
hours.innerHTML = date1.getHours()
minutes.innerHTML = date1.getMinutes()
seconds.innerHTML = date1.getSeconds()

/* console.log(date1)
console.log(date1.getFullYear())
console.log(date1.getMonth())

console.log(date1.getMonth(), monate[date1.getMonth()])

console.log(date1.getDay(), wochenTag[date1.getDay()])

console.log(date1.getHours(), "Stunde")
console.log(date1.getMinutes(), "Minute")
console.log(wochenTag[date1.getDay()])
console.log(monate[date1.getMonth()]) */
