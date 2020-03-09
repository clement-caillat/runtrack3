var year = prompt("Année : ");

var result = bisextile(year);

alert(result);

function bisextile(année)
{
    var jours = new Date(année,2,0).getDate();
    if( jours == 29)
    {
        document.write(année + ' est bissextile');
        return(true);
    }
    else
    {
        document.write(année + " n'est pas bissextile");
        return(false);
    }
}