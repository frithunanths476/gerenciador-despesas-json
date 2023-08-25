var receitas = JSON.parse(localStorage.getItem("receitas")) || []
var gastos = JSON.parse(localStorage.getItem("gastos")) || []
var totalGastos = 0
var totalReceitas = 0

var form_receita = document.getElementById("form_receita")
var form_gastos = document.getElementById("form_gastos")
var textoR = document.getElementById("textoR")
var textoG = document.getElementById("textoG")
var eqg = document.getElementById("eqg")
var mR = document.getElementById("mR")
var result = document.getElementById("result")
var apagar = document.getElementById("apagar")


form_receita.addEventListener('submit', function(event){
    event.preventDefault()

    var nomeR = document.getElementById("nomeR")
    var numR = document.getElementById("numR")

    receitas.push({
        valor: parseFloat(numR.value),
        nome: nomeR.value
    })


    var string = JSON.stringify(receitas)
    localStorage.setItem("receitas", string)

    calcularReceitas()
    verReceitas()
    
})


function calcularReceitas() {
    var itens = localStorage.getItem("receitas")
    itens = JSON.parse(itens) || []

    totalReceitas = 0

    for(receita of itens) {
        totalReceitas += receita.valor
    }
    
    textoR.innerHTML =  "R$" + totalReceitas
    console.log(totalReceitas)
}

form_gastos.addEventListener('submit', function(event){
    event.preventDefault()

    var nomeG = document.getElementById("nomeG")
    var numG = document.getElementById("numG")

    gastos.push({
        valor: parseFloat(numG.value),
        nome: nomeG.value
    })

    var string = JSON.stringify(gastos)
    localStorage.setItem("gastos", string)

    calcularGastos()
    verGastos()
})

function calcularGastos() {
    var itens = localStorage.getItem("gastos")
    itens = JSON.parse(itens) || []

    totalGastos = 0

    for(gasto of itens) {
        totalGastos += gasto.valor
    }
    
    textoG.innerHTML = "R$" + totalGastos
    
    console.log(totalGastos)
}

function verGastos() {
    var itens = localStorage.getItem("gastos")
    itens = JSON.parse(itens) || []

    eqg.innerHTML = ""

    for(gasto of itens) {
        eqg.innerHTML  += gasto.nome + " = R$" + gasto.valor + "<br>"
    }
}

function verReceitas() {
    var itens = localStorage.getItem("receitas")
    itens = JSON.parse(itens) || []

    mR.innerHTML = ""

    for(receita of itens) {
        mR.innerHTML += receita.nome + " = R$" + receita.valor + "<br>"
    }
}

const calcDivida = () =>{
    const d = totalReceitas - totalGastos

    if (d < 0){
        mensagem = "Você está com dívida"
    }else{
        mensagem = "Você não têm dívidas"
    }

    result.innerHTML = `R$${d} (${mensagem})`

}

apagar.addEventListener("click", function(event){
    event.preventDefault()

    localStorage.clear()

    receitas = []
    gastos = []
    totalGastos = 0
    totalReceitas = 0

    mR.innerHTML = ""
    eqg.innerHTML = ""
    result.innerHTML = ""
    

    calcularReceitas()
    calcularGastos()
})

calcularReceitas()
calcularGastos()
verGastos()
verReceitas()

//

var btnDalto = document.querySelector(".daltonicoBtn")
btnDalto.addEventListener("click", function(){
    var body = document.querySelector("body")

    if(body.classList.contains("dalto")) {
        body.className = ""
    } else {
        body.className = "dalto"
    }
})