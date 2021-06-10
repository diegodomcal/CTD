function estacao (e1) {
let mensagem;

    switch (e1) {
        case "verão" : mensagem = "O calor tá de rachar!";
        break;
        case "primavera" : mensagem = "Olha as frôzinha!";
        break;
        case "outono" : mensagem ="Outono é sempre igual, as folhas caem no quintal.";
        break;
        case "inverno" : mensagem = "Frio? Você não viu como é em Curitiba!";
        break;
        default : mensagem = "Cara, isso não é uma estação."
    } 

    return mensagem;
}

console.log(estacao("outono"));