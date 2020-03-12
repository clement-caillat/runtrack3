$(document).ready(function(){
    
    $('#button').click(function(){
        $.ajax({
            url: "expression.txt",
            dataType: 'text',
            success: function(data) {
                $('body').append('<p>' + data + '</p>');
            }
        })
    })
})