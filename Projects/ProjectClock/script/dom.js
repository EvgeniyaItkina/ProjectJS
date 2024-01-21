import { getNameCountries, search } from "./countryData.js";

document.getElementById('searchButton').addEventListener('click', async () => {
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

const updateCurrentTime = (timezone = "") => {
    // console.log(timezone);
    const sign = timezone[3]; //+
    const countHoursString = timezone.substring(4, 6);
    const countHoursNumber = Number(countHoursString);
    //console.log(typeof (countHoursNumber), countHoursNumber);

    let newHours = 0;
    if (sign == "+") {
        newHours = countHoursNumber;

    } else {
        newHours = -countHoursNumber;
    }

    updateTime(newHours);
    setInterval(updateTime, 1000, newHours);
}

const updateTime = (offSet) => {
    const nowTime = new Date();
    const hoursFromDate = nowTime.getHours();
    const newHours = hoursFromDate + offSet;
    nowTime.setHours(newHours);
    console.log(nowTime);

    /* const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: timezone }); */
    document.getElementById('currentTime').innerHTML = `Current Time: ${nowTime}`;
}