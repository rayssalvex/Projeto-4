//resolução exercicio 1 letra B 

function combineArrays(...arrays) {

  return [].concat(...arrays);
}

const array1 = [1, 2, 3];
const array2 = [4, 5];
const array3 = [6, 7, 8, 9];
const combinado = combineArrays(array1, array2, array3);

console.log("Array combinado:", combinado);

