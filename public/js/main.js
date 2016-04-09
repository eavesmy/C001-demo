var show_li = function (par, el) {
    el = par.childNodes[1];
    if (el.style.display === 'block') {
        return el.style.display = 'none';
    }
    el.style.display = 'block';
}

window.onload = function (a, b, i) {
    a = document.getElementsByClassName('nav-judg');
    for (i = 0; i < a.length; i++) {
        if (location.href == a[i].href) {
            b = a[i];
            b.style.background = '#5db564';
            b.style.color = '#fff';
            b.parentNode.style.display = 'block';
            b.childNodes[1].innerHTML = '┗';
        }
    }
}