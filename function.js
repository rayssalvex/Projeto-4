// Exercício 1: Revisão de funções, spread e rest

// 1. Função tradicional
function sum(a, b) {
  return a + b;
}

// 2. Arrow function
const multiply = (a, b) => a * b;

// 3. Função com rest parameters
function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

// 4. Usando spread operator com arrays
const fruits = ["maçã", "banana", "laranja"];
const moreFruits = ["uva", "kiwi"];
const allFruits = [...fruits, ...moreFruits];

// 5. Usando spread com objetos
const person = { name: "Maria", age: 25 };
const employee = { ...person, id: 1001, department: "Engenharia" };

// Testando as funções
console.log("Soma:", sum(5, 3));
console.log("Multiplicação:", multiply(5, 3));
console.log("Média de 3 números:", calculateAverage(4, 6, 8));
console.log("Média de 5 números:", calculateAverage(4, 6, 8, 10, 12));
console.log("Frutas combinadas:", allFruits);
console.log("Objeto funcionário:", employee);

//Letra a resposta:

function addIsAdult(person) {
  return {
    ...person,
    isAdult: person.age >= 18
  };
}

const person1 = { name: "João", age: 17 };
const person2 = { name: "Ana", age: 22 };

console.log(addIsAdult(person1)); // { name: 'João', age: 17, isAdult: false }
console.log(addIsAdult(person2)); // { name: 'Ana', age: 22, isAdult: true }
