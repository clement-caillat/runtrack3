$(document).ready(function(){
    generate();

    $('img').click(function(){
        if($(this).parent().next().is(':empty'))
        {
            var next = $(this).parent().next();
            $(this).appendTo(next);
            console.log('Droite');
        }
        else if($(this).prev().is(':empty'))
        {
            var prev = $(this).parent().prev();
            $('img').appendTo(prev);
            console.log('Gauche');
        }
        else
        {
            console.log('Aucun');
        }
    })

    function generate()
    {
        var image = ['part1.jpg', 'part2.jpg', 'part3.jpg', 'part4.jpg', 'part5.jpg', 'part6.jpg', 'part7.jpg', 'part8.jpg'];

        var max = 8;
        var current = 0;
        var T1 = ['0', '1', '2', '3', '4', '5', '6', '7'];
        var T2 = [];
        var tableid = [];
        var board = [1,1,1,1,1,1,1,1,0];
        
        for(var i = 0; i < image.length; i++)
        {   
            var ib = i;
            var x = Math.floor((Math.random() * max));
            T2[current] = T1[x];
            max = max - 1;
            current++;
            T1[x] = T1[max];
            ib++;
            $('#'+ib).append('<img src="'+image[T2[i]]+'" id="'+T2[i]+'" />');
            tableid.push(T2[i]);
            console.log(tableid);
        }
    }
})
