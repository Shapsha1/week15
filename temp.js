let temperatures = document.getElementsByClassName("temperature");
let maxTemperature = document.querySelector(".max-temperature");
let minTemperaturee = document.querySelector(".min-temperature");
let cities = ["Москва", "Питер", "Новосибирск", "Самара", "Владивосток"];
let temperaturesValues = [];
for (let city of cities) {
    let temperatureValue = prompt(`Какая температруа в городе ${city}?`);
    temperatureValue = Number(temperatureValue);
    if (isNaN(temperatureValue)) {
        alert("Ошибка. Обновите страницу, чтобы заново ввести значения");
        break;
    } else {
        temperaturesValues.push(temperatureValue);
        for (let i = 0; i < temperatures.length; i++) {
            temperatures[i].textContent = temperaturesValues[i];
        }
        maxTemperature.textContent = Math.max.apply(null, temperaturesValues);
        minTemperaturee.textContent = Math.min.apply(null, temperaturesValues);
    }
}
