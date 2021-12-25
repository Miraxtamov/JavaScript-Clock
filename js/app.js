function time() {
    var timeNow = new Date();

    document.querySelector(".hours").textContent = timeNow.getHours();
    document.querySelector(".minutes").textContent = timeNow.getMinutes();
    document.querySelector(".seconds").textContent = timeNow.getSeconds();
}

time();

setInterval(function() {
    time();
}, 1000);