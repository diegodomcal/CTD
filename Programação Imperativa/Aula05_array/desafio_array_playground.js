let produtos = ["Sabonete", "Arroz", "Lâmpada", "Toalha"];

// Join
    console.log("O join mostra tudo o que tem na array como uma string");
    console.log(produtos.join());

// POP
    console.log("\n","O pop retira o último elemento da array e dá pra armazenar o que foi retirado em uma variável");
    console.log(produtos.pop());

//Shift
    console.log("\n","Shift retira o primeiro elemento da array e dá pra armazenar o que foi retirado em uma variável");
    console.log(produtos.shift());

//Unshift
    produtos.unshift("Banana", "Café");    
    console.log("\n","Unshift adiciona elementos no ínicio da array")
    console.log(produtos.join());