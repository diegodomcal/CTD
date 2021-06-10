function podeSubir (altura, acompanhada){
    if (altura > 1.39 && altura < 2.01) {
        return "Acesso autorizado";
    } else if (altura > 1.19 && altura < 1.40 && acompanhada == true) {
        return "Acesso autorizado somente com acompanhante";
    } else {
        return "Acesso negado";
    }
}

console.log (podeSubir(1.25,1));

