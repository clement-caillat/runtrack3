$(document).ready(function(){
    $.ajax({
        url: 'pokemon.json',
        dataType: 'json',
        success: function(data){
            var types = []
            for(var pokemon of data){
                for(var type of pokemon.type){
                    if(!types.includes(type)){
                        types.push(type);
                    }
                }
            }
            for(type of types)
            {
                $('#type').append(`<option value="${type}">${type}</option>`);
            }
        },
        error: ()=>{
            console.log('Error');
        }
    })

    $('#filter').click( ()=> {
        $('#resultat').empty();
        var sid = $('#id').val();
        var sname = $('#name').val();
        var stype = $('#type').val();

         $.ajax({
            url: 'pokemon.json',
            dataType: 'json',
            error: function(){
                alert('Erreur');
            },
            success: function(data){
                $.each(data, function(pokemon){
                    if(sid != ''){
                        if(data[pokemon].id == sid){
                            $('#resultat').append("ID : " + data[pokemon].id + "<br/><br/>");
                            $('#resultat').append("Name : <br/>");
                            $.each(data[pokemon].name, function(name){
                                $('#resultat').append(data[pokemon].name[name]+'<br />');
                            })
                            $('#resultat').append("<br/>");
                            $('#resultat').append("Type : <br/>");
                            $.each(data[pokemon].type, function(type){
                                $('#resultat').append(data[pokemon].type[type]+'<br />');
                            })
                            $('#resultat').append("<br/>");
                            $('#resultat').append("Base : <br/>");
                            $.each(data[pokemon].base, function(key, base){
                                $('#resultat').append(data[pokemon]+'<br/>');
                            })
                        }
                    }
                    if(sname != ''){
                        if(data[pokemon].name['french'] == sname){
                                $('#resultat').append("ID : " + data[pokemon].id + "<br/><br/>");
                                $('#resultat').append("Name : <br/>");
                                $.each(data[pokemon].name, function(name){
                                    $('#resultat').append(data[pokemon].name[name]+'<br />');
                                })
                                $('#resultat').append("<br/>");
                                $('#resultat').append("Type : <br/>");
                                $.each(data[pokemon].type, function(type){
                                    $('#resultat').append(data[pokemon].type[type]+'<br />');
                                })
                                $('#resultat').append("<br/>");
                                $('#resultat').append("Base : <br/>");
                                $.each(data[pokemon].base, function(base){
                                    $('#resultat').append(data[pokemon].base[base]+'<br/>');
                                })
                            
                        }
                        else if(data[pokemon].name['english'] == sname){
                                $('#resultat').append("ID : " + data[pokemon].id + "<br/><br/>");
                                $('#resultat').append("Name : <br/>");
                                $.each(data[pokemon].name, function(name){
                                    $('#resultat').append(data[pokemon].name[name]+'<br />');
                                })
                                $('#resultat').append("<br/>");
                                $('#resultat').append("Type : <br/>");
                                $.each(data[pokemon].type, function(type){
                                    $('#resultat').append(data[pokemon].type[type]+'<br />');
                                })
                                $('#resultat').append("<br/>");
                                $('#resultat').append("Base : <br/>");
                                $.each(data[pokemon].base, function(base){
                                    $('#resultat').append(data[pokemon].base[base]+'<br/>');
                                })
                            
                        }
                        else if(data[pokemon].name['chinese'] == sname){
                
                                $('#resultat').append("ID : " + data[pokemon].id + "<br/><br/>");
                                $('#resultat').append("Name : <br/>");
                                $.each(data[pokemon].name, function(name){
                                    $('#resultat').append(data[pokemon].name[name]+'<br />');
                                })
                                $('#resultat').append("<br/>");
                                $('#resultat').append("Type : <br/>");
                                $.each(data[pokemon].type, function(type){
                                    $('#resultat').append(data[pokemon].type[type]+'<br />');
                                })
                                $('#resultat').append("<br/>");
                                $('#resultat').append("Base : <br/>");
                                $.each(data[pokemon].base, function(base){
                                    $('#resultat').append(data[pokemon].base[base]+'<br/>');
                                })
                            
                        }
                        else if(data[pokemon].name['japanese'] == sname){
                           
                                $('#resultat').append("ID : " + data[pokemon].id + "<br/><br/>");
                                $('#resultat').append("Name : <br/>");
                                $.each(data[pokemon].name, function(name){
                                    $('#resultat').append(data[pokemon].name[name]+'<br />');
                                })
                                $('#resultat').append("<br/>");
                                $('#resultat').append("Type : <br/>");
                                $.each(data[pokemon].type, function(type){
                                    $('#resultat').append(data[pokemon].type[type]+'<br />');
                                })
                                $('#resultat').append("<br/>");
                                $('#resultat').append("Base : <br/>");
                                $.each(data[pokemon].base, function(base){
                                    $('#resultat').append(data[pokemon].base[base]+'<br/>');
                                })
                            
                        }
                    }
                    if(data[pokemon].type[0] == stype){
                            $('#resultat').append("ID : " + data[pokemon].id + "<br/><br/>");
                            $('#resultat').append("Name : <br/>");
                            $.each(data[pokemon].name, function(name){
                                $('#resultat').append(data[pokemon].name[name]+'<br />');
                            })
                            $('#resultat').append("<br/>");
                            $('#resultat').append("Type : <br/>");
                            $.each(data[pokemon].type, function(type){
                                $('#resultat').append(data[pokemon].type[type]+'<br />');
                            })
                            $('#resultat').append("<br/>");
                            $('#resultat').append("Base : <br/>");
                            $.each(data[pokemon].base, function(base){
                                $('#resultat').append(data[pokemon].base[base]+'<br/>');
                            })
                        
                    }
                })
            }
        }) 
       
    })



})
