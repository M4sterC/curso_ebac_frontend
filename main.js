$(document).ready(function(){


    $('form').on('submit',function(e) {
        e.preventDefault();
        const Tarefa = $('#Tarefa').val()
        const NovaTarefa = $('<li id="li"></li>')
        $(`<p>${Tarefa}</p>`).appendTo(NovaTarefa)
        $(NovaTarefa).appendTo('.lista')
        $('#Tarefa').val('')
    })


    $('ul').on('click', 'li' ,function(){
        $(this).css('text-decoration', 'line-through')
    })



})