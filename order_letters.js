let lista = ["manzana", 10, 20, "pera", "banana", "naranja", "uva"];

let palabras = [];

for (let i = 0; i < lista.length; i ++){
    if(typeof(lista[i]) == "string"){
    palabras.push(lista[i])
    }
}

for (let i = 0; i < palabras.length - 1; i++) {
    for (let j = 0; j < palabras.length - 1 - i; j++) {
        if (palabras[j] > palabras[j + 1]) {
            let temp = palabras[j];
            palabras[j] = palabras[j + 1];
            palabras[j + 1] = temp;
        }
    }
}

console.log('Palabras ordenadas:', palabras);