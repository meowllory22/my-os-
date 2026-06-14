
function updateTime() {
    var Time = new Date().toLocaleString();

    var timeText = document.querySelector("#timeelement")

    timeText.innerHTML = Time;
}

setInterval(updateTime, 1000);