window.onload = handleClicks

function handleClicks() {
    var nav = document.getElementById('diagnav');
    nav.onclick = function (e) {
        if (nav.classList.contains('open'))
            closeNav(e);
        else 
            openNav(e);
    }
    function closeNav(e) {
        nav.classList.remove('open');
        nav.removeAttribute('style');
    }
    function openNav(e) {
        console.log(nav);
        e.stopImmediatePropagation()
        nav.classList.add('open');
        document.body.onclick = closeNav;
        calcLegs(nav);
    }
}
function resizeNav(ul){
    var ww = document.body.clientWidth;
    if(ul.clientWidth >= ww){
        var fs = parseInt(window.getComputedStyle(ul, null).getPropertyValue('font-size'))-1;
        ul.style.fontSize = fs+'px';
        if(fs > 0){
            resizeNav(ul);
        }
    }
}
function calcLegs(nav) {
    var ul = nav.querySelector('ul');
    resizeNav(ul);
    var w = ul.clientWidth;
    var h = ul.clientHeight;
    var Topoffset = Math.sqrt(Math.pow(h, 2) / 2);
    var loffset = (w - Math.sqrt(Math.pow(w, 2) / 2)) + Topoffset;
    console.log(loffset);
    nav.style.top = -Topoffset + 'px';
    nav.style.right = -loffset + 'px';
}