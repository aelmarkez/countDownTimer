function getTimeRemaining(endTime){
    var t = Date.parse(endTime) -Date.parse(new Date());
    var seconds = Math.floor((t/1000)%60);
    var munites = Math.floor(t/(1000*60)%60);
    var hours = Math.floor(t/(1000*60*60)%24);
    var days = Math.floor(t/(1000*60*60*24));
    return {  'total':t,
            'days' :days,
            'hours' : hours,
            'minutses' : munites,
           'seconds'  : seconds 
};}

function initializeClock(id,endtime){
    var clock = document.getElementById(id);
    var daysSpan = clock.getElementById('.days');
    var hoursSpan = clock.getElementById('.hours');
    var minutesSpan = clock.getElementById('.minutes');
    var secondsSpan = clock.getElementById('.seconds');

    function updateClock(){
        var t= getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0){
            clearInterval(timeInterval);
        }
    }
        updateClock();
        var timeIntareval = setInterval(updateClock,1000);

    }
var deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
initializeClock('timer', deadline);
