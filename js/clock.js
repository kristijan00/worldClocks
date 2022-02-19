setInterval(setClock, 1000);

let secondHand = document.querySelector('[second-hand]');
let minuteHand = document.querySelector('[minute-hand]');
let hourHand = document.querySelector('[hour-hand]');

function setClock() {
    const currentDate = new Date();

    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = (minutes + currentDate.getHours()) / 12;

    setRotation(secondHand, seconds);
    setRotation(minuteHand, minutes);
    setRotation(hourHand, hours);

}

function setRotation(element, rotationRatio) {

    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();