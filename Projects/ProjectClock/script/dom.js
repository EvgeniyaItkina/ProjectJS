import { getNameCountries, search } from "./countryData.js";


document.getElementById('searchButton').addEventListener('click', async () => {
    document.getElementById('countryInfo').style.display = "block";
    const countryName = document.getElementById('countryInput').value;
    const countryInfo = await search(countryName);

    if (countryInfo) {
        document.getElementById('countryName').textContent = `Country: ${countryInfo.name.common}`;
        document.getElementById('countryCapital').textContent = `Capital: ${countryInfo.capital}`;
        document.getElementById('countryFlag').innerHTML = `<img src="${countryInfo.flags.svg}" alt="Flag" width="100">`;
        updateCurrentTime(countryInfo.timezones[0]);
    } else {
        alert("Country not found!");
    }
});

let timeInterval;

const updateCurrentTime = (timezone = "") => {
    if (timeInterval) {
        clearInterval(timeInterval); // Очищаем предыдущий интервал
    }

    const sign = timezone[3]; //+
    const countHoursString = timezone.substring(4, 6);
    const countHoursNumber = Number(countHoursString);

    let newHours = 0;
    if (sign == "+") {
        newHours = countHoursNumber;

    } else {
        newHours = -countHoursNumber;
    }
    updateTime(newHours);
    timeInterval = setInterval(() => updateTime(newHours), 1000);
    /* setInterval(updateTime, 1000, newHours); */
}

/* const updateTime = (offSet) => {
    const nowTime = new Date();
    const hoursFromDate = nowTime.getHours();
    const newHours = hoursFromDate + offSet;
    nowTime.setHours(newHours);
    console.log(nowTime);

    document.getElementById('currentTime').innerHTML = "";
    document.getElementById('currentTime').innerHTML = `Current Time: ${nowTime}`;
} */

const updateTime = (offSet) => {
    const nowTime = new Date();
    nowTime.setHours(nowTime.getHours() + offSet);

    // Форматирование времени для отображения только часов и минут
    const formattedTime = nowTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById('currentTime').textContent = `Current Time: ${formattedTime}`;
}