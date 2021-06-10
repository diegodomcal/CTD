function calcularIndiceDeMassaCorporal (peso,altura){
    altura = altura / 100;
 return (peso / Math.pow(altura,2)).toFixed(2);
}

console.log("O IMG é de: " + calcularIndiceDeMassaCorporal (140, 167));