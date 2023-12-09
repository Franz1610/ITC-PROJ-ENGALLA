document.getElementById("openTempBtn").addEventListener("click", function () {
    openConverter('temp-popup-container');
});

document.getElementById("openHeightBtn").addEventListener("click", function () {
    openConverter('height-popup-container');
});

document.getElementById("convertBtn").addEventListener("click", convertTemperature);
document.getElementById("clearBtn").addEventListener("click", clearValues);
document.getElementById("returnBtn").addEventListener("click", returnToMenu);

document.getElementById("convertHeightBtn").addEventListener("click", convertHeight);
document.getElementById("clearHeightBtn").addEventListener("click", clearHeightValues);
document.getElementById("returnHeightBtn").addEventListener("click", returnToMenu);

function openConverter(popupId) {
    closeConverter('temp-popup-container');
    closeConverter('height-popup-container');
    document.getElementById(popupId).style.display = "block";
}

function closeConverter(popupId) {
    document.getElementById(popupId).style.display = "none";
}

function convertTemperature() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);

    if (!isNaN(celsius)) {
        document.getElementById("fahrenheitInput").value = (celsius * 9 / 5) + 32;
    } else if (!isNaN(fahrenheit)) {
        document.getElementById("celsiusInput").value = (fahrenheit - 32) * 5 / 9;
    }
}

function clearValues() {
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
}

function convertHeight() {
    var meters = parseFloat(document.getElementById("meterInput").value);
    var feet = parseFloat(document.getElementById("feetInput").value);

    if (!isNaN(meters)) {
        document.getElementById("feetInput").value = meters * 3.28084;
    } else if (!isNaN(feet)) {
        document.getElementById("meterInput").value = feet / 3.28084;
    }
}

function clearHeightValues() {
    document.getElementById("meterInput").value = "";
    document.getElementById("feetInput").value = "";
}

function returnToMenu() {
    closeConverter('temp-popup-container');
    closeConverter('height-popup-container');
}