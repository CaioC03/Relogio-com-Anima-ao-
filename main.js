const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const ampmElement = document.querySelector(".ampm");

function convertDate (value) {
    return String(value).padStart(2, '0')
}


function getDate () {
    const date = new Date();
    const hours = date.getHours() > 12 
        ? convertDate(date.getHours() - 12) 
        : convertDate(date.getHours());
    const minutes = convertDate(date.getMinutes());
    const seconds = convertDate(date.getSeconds());
    const ampm = date.getHours() > 12 ? 'PM' : 'AM';
    return {hours, minutes, seconds, ampm};
}

function mountDOM () {
    const {hours, minutes, seconds, ampm} = getDate();
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
    ampmsElement.innerHTML = ampm;
}

function enableClock () {
    const init = () => setInterval(mountDOM, 1000);
    return{ init };
}

const clock = enableClock();
clock.init();
