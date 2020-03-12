$(document).ready(function(){
    generate();
    
    $('img').click(function(){
        if($(this).parent().attr('id') == "melangees")
            {
                $(this).appendTo("#rangees");
                return;
            }
            else($(this).parent().attr('id') == "rangees")
            {
                $(this).appendTo("#melangees")
                return;
            }
    })

    $('#button').click(function(){
        generate();
        $('img').click(function(){
            if($(this).parent().attr('id') == "melangees")
            {
                $(this).appendTo("#rangees");
                return;
            }
            else($(this).parent().attr('id') == "rangees")
            {
                $(this).appendTo("#melangees")
                return;
            }
        })
    });
    
})

function generate()
{
    $('img').remove()

    var image = ['arc1.png', 'arc2.png', 'arc3.png', 'arc4.png', 'arc5.png', 'arc6.png'];

    var max = 6;
    var current = 0;
    var T1 = ['0', '1', '2', '3', '4', '5'];
    var T2 = [];

    for(var i = 0; i < image.length; i++)
    {   
        var x = Math.floor((Math.random() * max)); // Tirage 3 pour exemple
        T2[current] = T1[x]; // Index 0 de T2 prend 3 T2 = ['3']
        max = max - 1; // Max = 5
        current++; //current = 1
        T1[x] = T1[max];
        $('#melangees').append('<img src="' + image[T2[i]] +'"/>');
    }
}