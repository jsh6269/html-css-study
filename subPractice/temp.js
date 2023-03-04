window.addEventListener('load', init, false);

function init(){
    var h = document.getElementById('c');
    h.addEventListener('click', closure, false);
    
    function closure(){
        window.close();
    }
}