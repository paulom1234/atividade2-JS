let pontos = Number(prompt("Quantos pontos?"));
let anoDeCliente = Number(prompt("Quantos anos de casa?"));
let resultado = "";

if ( pontos <= 99 ) {
    resultado = "Bronze"
} else if ( pontos  <= 499 ) {
    resultado = "Prata"
} else if ( pontos<= 999 ) {
    resultado = "Ouro"
} else if ( anoDeCliente >= 1 ) {
    resultado ="Diamante"
} 



alert(`A classificação é ${resultado}`)