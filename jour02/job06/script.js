var string = "";
var b = document.body;
window.addEventListener('keydown', function(event)
{
    var key = event.key;
    string += key;
    if(string == "ArrowLeftArrowRightArrowUpArrowDown")
    {
        console.log('Code utilisé');
        var footer = document.createElement('footer');
        b.prepend(footer);
        var main = document.createElement('main');
        b.prepend(main);
        var header = document.createElement('header');
        var title = document.createTextNode('La Plateforme.io');
        var titlefooter = document.createTextNode('Footer');
        var titlemain = document.createTextNode('Main');
        b.prepend(header);
        header.append(title);
        main.append(titlemain);
        footer.append(titlefooter);
    }
})