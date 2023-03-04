
window.addEventListener("load", init, false);

function init(){
    var p = document.getElementsByTagName('p');
    p[0].addEventListener('click', opensub, false);
    p[1].addEventListener('click', opensub2, false);
    
    function opensub(){
        window.open('sub.html', 'sub'); 
    }
    function opensub2(){
         window.open('sub2.html', 'sub2');
    }
}