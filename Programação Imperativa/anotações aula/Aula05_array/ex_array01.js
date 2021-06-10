let diego = ["Jéssica", "Inês", 1.65, "Corinthians", ["Panthers", "Hornets", "Hurricanes"]]; //dá pra colocar array dentro de array

console.log(diego.length); //comprimento do array
console.log(diego[0]); 

let timesSP = ["Corinthians", "Palmeiras", "São Paulo", "Santos"];

// .push() adiciona elementos no final da array
    timesSP.push("Portuguesa", "Ponte Preta"); 
    console.log(timesSP);


// .pop() retira o último elemento da array e dá pra armazenar o que foi retirado em uma variável
    oUltimo = timesSP.pop(); 
    console.log(timesSP);
    console.log(oUltimo);

let nba = ["Sixers", "Bucks", "Nuggets"];

// .unshift() adiciona um elemento no ínicio da array
    nba.unshift("Nets", "Jazz", "Clippers");
    console.log("\n", nba);

// .shift() retira o primeiro elemento da array e dá pra armazenar o que foi retirado em uma variável
    oPrimeiro = nba.shift();
    console.log("\n",nba);
    console.log(oPrimeiro);

// .indexof()  busca a posição do elemento que está na array. Caso vc coloque algo que não está na array, ele devolve o valor -1
    console.log("\n",nba.indexOf("Bucks"));

// .lastIndexOf() faz exatamente o que o anterior faz, só que contando  a partir do final da array
    console.log(nba.lastIndexOf("Nuggets"));

// .includes() é similar ao indexOF, mas retorna um valor booleano (true / false)
    console.log("\n",nba.includes("Hornets"));     

/* .join() mostra tudo o que tem na array como uma string. Por padrão ele mostra os elementos separados por vírgula, mas 
mas dá pra colocar hífen, ponto, etc, basta colocar o que se que nos parênteses*/
    console.log("\n",nba.join());
    console.log(nba.join("-"));