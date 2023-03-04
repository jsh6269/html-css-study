window.addEventListener("load", init, false);

function init(){
    var intervalID;
    var divList = document.querySelectorAll('div:not(#wrapper)');
    var styleList = ['red1', 'red2', 'red3'];
    var counter = 0;
    var startButton = document.getElementById('start');
    var stopButton = document.getElementById('stop');
    startButton.addEventListener('click', start, false);
    stopButton.addEventListener('click', stop, false);
    
    function setStyle(){
        divList[counter].setAttribute('class', styleList[0]);
        divList[(counter+1)%15].setAttribute('class', styleList[1]);
        divList[(counter+2)%15].setAttribute('class', styleList[2]);
        divList[(counter+3)%15].setAttribute('class', styleList[1]);
        divList[(counter+4)%15].setAttribute('class', styleList[0]);
        for(var i=5; i<=14; i++){
            divList[(counter+i)%15].setAttribute('class', 'trans');
        }
        counter = (counter + 1) % 15;
    }
    
    function start(){
        if(!intervalID){
            intervalID = window.setInterval(setStyle, 50);            
        }
    }
    function stop(){
        window.clearInterval(intervalID);
        intervalID = null;
    }
}