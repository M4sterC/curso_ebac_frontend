const form = document.getElementById ('FormComparador')
const ValorA = document.getElementById ('NumeroA')
const ValorB = document.getElementById('NumeroB')
let BEMaior = false


function BMairoQueA(ValorA,ValorB) {
    const EMaior = ValorB > ValorA
    return EMaior
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    const MensagemSucesso = `SUCESSO: O número <b>${ValorB.value}</b> é maior que o número <b>${ValorA.value}</b>`
    const MensagemErro = `ERRO: O número <b>${ValorB.value}</b> é menor que o número <b>${ValorA.value}</b>`
    const ContainerMensagemSucesso = document.querySelector('.sucesso')
    ContainerMensagemSucesso.innerHTML = MensagemSucesso
    const ContainerMensagemErro = document.querySelector('.erro')
    ContainerMensagemErro.innerHTML = MensagemErro

    BEMaior = BMairoQueA(ValorA.value,ValorB.value)
    if (BEMaior) {
        ContainerMensagemSucesso.style.display = 'block'
        ContainerMensagemErro.style.display = 'none'

        ValorA.value = ''
        ValorB.value = ''
    }else {
    ContainerMensagemErro.style.display = 'block'
    ContainerMensagemSucesso.style.display = 'none'

    ValorA.value = ''
    ValorB.value = ''
    }
})