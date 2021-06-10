let filmes = ["star wars", "clube da luta", "o poderoso chefão", "top gun", "interstelar"]
console.log(filmes);

let cartoons = ["toy story", "procurando nemo", "kung-fu panta", "wall-e", "fortnite"]

function addCartoons() {
    filmes.push(cartoons[0]);
    filmes.push(cartoons[1]);
    filmes.push(cartoons[2]);
    filmes.push(cartoons[3]);
    filmes.push(cartoons[4]);
}

addCartoons();
console.log("\n",filmes);

let retirado = filmes.pop();
console.log("\n",filmes);
console.log("\n","O elemento retirado foi: ", retirado);

