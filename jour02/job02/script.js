function showhide()
{
    var b = document.body;
    var button = document.getElementById('button');
    if(button.textContent == 'Afficher')
    {
        button.innerHTML = 'Masquer';
        var element = document.createElement('article');
        var text = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.");
        b.prepend(element);
        element.append(text);
    }
    else
    {
        button.innerHTML = 'Afficher';
        var article = document.getElementsByTagName('article')[0];
        article.parentNode.removeChild(article);
    }
}