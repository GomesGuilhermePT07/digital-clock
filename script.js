const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const date = new Date();

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

hoursElement.textContent = fixTime(hours);
minutesElement.textContent = fixTime(minutes);
secondsElement.textContent = fixTime(seconds);

function fixTime(time){
    return time < 10 ? '0' + time : time;
}