$(document).ready(function(){
    var value = '{"name": "La Plateforme_", "address": "8 rue d\'Hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}';
    $('#getkey').click(function(){
        var key = $('#key').val();
        var result = jsonValueKey(key, value)
        alert(result);
    })


})

function jsonValueKey(key, value){
    var data = JSON.parse(value);
    if(data[key] == undefined)
    {
        return "Clé inexistante";
    }
    else
    {
        return data[key];
    }
}