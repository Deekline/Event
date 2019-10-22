let getTimeRemainig = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        'total': t,
        'seconds': seconds,
        'minutes': minutes,
        'hours': hours,
        'days': days
    };
}


let initClock = (endtime) => {
    let clock = document.getElementById('countdown')
    let daysSpan = clock.querySelector('.days');
    let hoursSpan = clock.querySelector('.hours');
    let minSpan = clock.querySelector('.minutes');
    let secSpan = clock.querySelector('.seconds');

    let updClock = () => {
            let t = getTimeRemainig(endtime);
            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secSpan.innerHTML = ('0' + t.seconds).slice(-2);
            
            if (t.total <=0) {
                clearInterval(timeinterval)
            }
    }

    updClock();
    let timeinterval = setInterval(updClock,1000);
}


let deadline = '2019-12-31';

initClock(deadline)