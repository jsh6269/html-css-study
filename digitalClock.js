var clock;

function preset(tt){
    if(tt < 10){
        return "0" + tt;
    }
    else{
        return tt;
    }
}
function stopClock(){
    setTimeout(clock);
}

function displayClock(){
    var now = new Date();
    var hourNow = preset(now.getHours());
    var minuteNow = preset(now.getMinutes());
    var secondNow = preset(now.getSeconds());

    document.digital_clock.time_val.value = hourNow + ":" + minuteNow + ":" + secondNow;
    clock = setTimeout(displayClock, 1000);
}