$(document).ready(function(){
    $('#button').click(function(){
        if($('#remove').length)
        {
            return;
        }
        else
        {
            $('body').append("<p>Le $ est un bon élément monétaire. Le # de twitter est une bonne ID. Il faudra faire le point avec la classe pour cacher cet élément.</p>");
            $('body').append('<button id="remove">Supprimer</button>')

            $('#remove').click(function(){
                $('p').remove();
                $('#remove').remove();
            })
        }
    })
})