//Declaração das variáveis
let operacao = (prompt("Informe a operação desejada: "))
let numero1 = (prompt("Informe o primeiro número: "))
let numero2 = (prompt("Informe o segundo número: "))

//Veificar a operação matemática selecionada
if (operacao == "+") {
    let resultado = numero1 + numero2
    console.log("O resultado da soma é " + resultado + ".")
}
else if (operacao == "-"){
    let resultado = numero1 - numero2
    console.log(O resultado da subtração é + resultado + ".")
}
else if (operacao == "*") {
    let resultado = numero1 * numero2
    console.log("O resultado da multiplicação é" + resultado + ".")
}

