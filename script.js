const botao = document.getElementById("botao");
function calcularINSS(){
    let salario = parseFloat(document.getElementById("salario").value);
    let resultado = 0;

/* Calculo da primeira faixa salarial*/

if (salario <= 1621){
       resultado= salario * 0.075

/* Calculo da segunda faixa salarial*/  

}else if (salario <=2902.85){
    resultado += 1621 * 0.075;
    let excedente = salario - 1621;
    resultado += excedente *0.09;


/* Calculo da terceira faixa salarial*/

}else if (salario<=4354.27){
    resultado += 1621 * 0.075;
    resultado +=(2902.85 - 1621) * 0.09;
    let excedente = salario - 2902.85;
    resultado += excedente * 0.12

/* Calculo da quarta faixa salarial*/
   
} else {
         resultado += 1621 * 0.075;
         resultado +=(2902.85 - 1621) * 0.09;
         resultado += (4354.27 - 2902.85) * 0.12
        let excedente = salario - 4354.27;
        resultado += excedente * 0.14;

/* Calculo do teto do INSS*/

    } if (resultado > 988.09){
        resultado = 988.09;
    }
return (resultado);
}



function calcularIRPF(){
    let salario = parseFloat(document.getElementById("salario").value);
    let INSS = calcularINSS();
    let base = salario - INSS;
    let resultadoIRPF = 0
    
if (base <= 5000){
    resultadoIRPF = 0;

}else {
    resultadoIRPF = (base - 5000) * 0.275;
}
return (resultadoIRPF);


}

function calcular(){
    let salario = parseFloat(document.getElementById("salario").value);

    if (isNaN(salario)) {
        alert("Digite um salário válido!");
        return;
    }

    let inss = calcularINSS();
    let ir = calcularIRPF();

    document.getElementById("inss").value = inss.toFixed(2);

    if (ir === 0){
        document.getElementById("ir").value = "Isento (R$ 0,00)";
    } else {
        document.getElementById("ir").value = ir.toFixed(2);
    }


    let liquido = salario - inss - ir;

    document.getElementById("liquido").innerText =
        "R$ " + liquido.toFixed(2);
}





botao.addEventListener("click", calcular);