class WorldClock {
    constructor() {
    }

    chasy(timezone) {
        let time = new Date().toLocaleString('en-US', { timeZone: timezone });
        /*  let hr = time.getHours();
         let mn = time.getMinutes();
         let sc = time.getSeconds();
         let clock = `${hr}:${mn}:${sc}` */
        document.getElementById('currentTime').innerHTML = time;
    }

}

const wordClock = new WorldClock()

let timeZone = 'America/Toronto';
function chooseTimezone(country) {


}

setInterval(() => {
    wordClock.chasy(timeZone)

}, 1000);
