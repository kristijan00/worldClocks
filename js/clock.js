setInterval(setClock, 1000);

var localTime = require("date-timezones");

let secondHand = document.querySelector('[second-hand]');
let minuteHand = document.querySelector('[minute-hand]');
let hourHand = document.querySelector('[hour-hand]');

async function setClock() {


    let offset = await loadTimezones();
    // const ezlocalTime = await require(['ez-local-time']);

    const currentDate = new Date();

    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = ((minutes + currentDate.getHours() + offset) / 12);

    setRotation(secondHand, seconds);
    setRotation(minuteHand, minutes);
    setRotation(hourHand, hours);

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

async function loadTimezones() {
    let offset = 0;
    // let continent = -2;
    let rawData = await fetch('timezones.json');
    let timezones = await rawData.json();

    for (let timezone of timezones) {
        // console.log(timezone.utc)
        if (timezone.utc.toString().includes("Zagreb")) {
            offset = timezone.offset;
            console.log("Success dude the offset is:" + offset)
        }
    }
    return offset;
}

setClock();