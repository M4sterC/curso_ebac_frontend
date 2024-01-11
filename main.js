const form = document.getElementById ('FormComparador')

function BMairoQueA(ValorA,ValorB) {
    return ValorA < ValorB
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    const ValorA = document.getElementById ('NumeroA')
    const ValorB = document.getElementById('NumeroB')
    const ValorA2 = parseInt(ValorA.value)
    const ValorB2 = parseInt(ValorB.value)
    const MensagemSucesso = `SUCESSO: O número <b>${ValorB2}</b> é maior que o número <b>${ValorA2}</b>`
    const MensagemErro = `ERRO: O número <b>${ValorB2}</b> é menor que o número <b>${ValorA2}</b>`
    const ContainerMensagemSucesso = document.querySelector('.sucesso')
    const ContainerMensagemErro = document.querySelector('.erro')
    let BEMaior = false


    BEMaior = BMairoQueA(ValorA2,ValorB2)
    if (BEMaior) {
        ContainerMensagemSucesso.innerHTML = MensagemSucesso
        ContainerMensagemSucesso.style.display = 'block'
        ContainerMensagemErro.style.display = 'none'
        ValorA.value = ""
        ValorB.value = ""
    }else {
    ContainerMensagemErro.innerHTML = MensagemErro
    ContainerMensagemErro.style.display = 'block'
    ContainerMensagemSucesso.style.display = 'none'
    ValorA.value = ""
    ValorB.value = ""
    }
})