const form = document.getElementById ('FormComparador')

function BMairoQueA(ValorA,ValorB) {
    return ValorA < ValorB
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    const ValorA2 = document.getElementById ('NumeroA')
    const ValorB2 = document.getElementById('NumeroB')
    const ValorA = parseInt(ValorA2.value)
    const ValorB = parseInt(ValorB2.value)
    let BEMaior = false
    const MensagemSucesso = `SUCESSO: O número <b>${ValorB}</b> é maior que o número <b>${ValorA}</b>`
    const MensagemErro = `ERRO: O número <b>${ValorB}</b> é menor que o número <b>${ValorA}</b>`
    const ContainerMensagemSucesso = document.querySelector('.sucesso')
    const ContainerMensagemErro = document.querySelector('.erro')


    BEMaior = BMairoQueA(ValorA,ValorB)
    if (BEMaior) {
        ContainerMensagemSucesso.innerHTML = MensagemSucesso
        ContainerMensagemSucesso.style.display = 'block'
        ContainerMensagemErro.style.display = 'none'
        ValorA2.value = ""
        ValorB2.value = ""
    }else {
    ContainerMensagemErro.innerHTML = MensagemErro
    ContainerMensagemErro.style.display = 'block'
    ContainerMensagemSucesso.style.display = 'none'
    ValorA2.value = ""
    ValorB2.value = ""
    }
})