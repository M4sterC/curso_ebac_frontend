$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
    })
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('form').validate({
        rules: {
            nome: {required: true},
            email: {required: true, email: true},
            telefone: {required: true},
            cpf: {required:true},
            endereco: {required:true},
            cep: {required:true},
        },
        messages: {
            nome: 'Por Favor Insira seu Nome Completo',
            telefone: 'Por Favor Insira seu telefone',
            email: 'Por Favor Insira um email valido',
            cpf: 'Por Favor insira Seu CPF',
            endereco: 'Por Favor digite seu endereco',
            cep: 'Por Favor digite seu CEP',
        },
        
        
        submitHandler: function(){
            alert('Cadastrado Com Sucesso')
            $('#nome').val('')
            $('#email').val('')
            $('#telefone').val('')
            $('#cpf').val('')
            $('#endereco').val('')
            $('#cep').val('')
        },
        
        
        invalidHandler: function(evento, validador) {
            let CamposIncorretos = validador.numberOfInvalids()
            if(CamposIncorretos) {
                alert(`Existe ${CamposIncorretos} campos Obrigatorios`)
            }
        }
    })



})