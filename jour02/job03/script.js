var button = document.getElementById('button');
var compteur = document.getElementById('compteur');
button.onclick = addone;

var x = 0;
compteur.innerHTML = x;

function addone()
{
    x++;
    compteur.innerHTML = x;
}