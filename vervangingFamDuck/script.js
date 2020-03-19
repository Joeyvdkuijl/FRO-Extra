const opvul = document.querySelectorAll('.tekst button')
document.getElementsByClassName('info')[0].style.height = document.getElementsByClassName('tekst')[0].clientHeight +'px';

for(let i=0; i<opvul.length; i++) {
    opvul[i].addEventListener('click', click);
}

function click() {
    document.getElementById('informatie').innerHTML = document.getElementById('informatie').innerHTML + this.dataset.info;
}

function verwijder() {
    document.getElementById("informatie").innerHTML = " ";
}