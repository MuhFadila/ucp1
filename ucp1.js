document.addEventListener("DOMContentLoaded", function () {
    var greetingElement = document.getElementById("greeting");
    var date = new Date();
    var hour = date.getHours();

    var greeting;

    if (hour < 12) {
        greeting = "Selamat pagi, Fadil";
    } else if (hour < 18) {
        greeting = "Selamat siang, Fadil";
    } else {
        greeting = "Selamat malam, Fadil";
    }

    greetingElement.textContent = greeting;
});

function updateTime() {
    var datetimeElement = document.getElementById("datetime");
    var currentDate = new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var formattedDatetime = currentDate.toLocaleString(undefined, options);

    datetimeElement.textContent = formattedDatetime;
}

document.addEventListener("DOMContentLoaded", function () {
    updateTime();
    setInterval(updateTime, 1000); // Perbarui setiap detik
});


