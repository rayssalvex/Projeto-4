# Projeto-4

# Aula Prática: Métodos de Array em JavaScript

## Objetivos de Aprendizagem

- Relembrar os conceitos de funções, spread e rest
- Utilizar corretamente os métodos de array: map, filter, find, findIndex, forEach, every e some
- Resolver problemas do mundo real usando métodos de array
- Combinar diferentes métodos para soluções mais elegantes

## Exercício 1: Relembrando Funções, Spread e Rest

```js
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
```

DESAFIO PARA OS ALUNOS:

a. Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

b. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)

## Exercício 2: forEach e map

```js
// Exercício 2: forEach e map

const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

// 1. Usando forEach para imprimir todos os produtos
console.log("Lista de Produtos:");
products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - R$${product.price}`);
});

// 2. Usando map para criar um novo array apenas com nomes dos produtos
const productNames = products.map((product) => product.name);
console.log("\\nNomes dos Produtos:", productNames);

// 3. Usando map para criar um array de produtos com desconto de 10%
const discountedProducts = products.map((product) => {
  return {
    ...product,
    price: product.price * 0.9, // 10% de desconto
  };
});

console.log("\\nProdutos com 10% de desconto:");
discountedProducts.forEach((product) => {
  console.log(
    `${product.name} - Original: R$${(product.price / 0.9).toFixed(
      2
    )}, Com desconto: R$${product.price.toFixed(2)}`
  );
});
```

DESAFIO PARA OS ALUNOS:

a. Use map para criar um array de strings formatadas como "Nome do produto - Categoria" para cada produto

b. Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)

c. Combine forEach com um acumulador externo para calcular o valor total de todos os produtos

## Exercício 3: filter e find

```js
// Exercício 3: filter e find

const students = [
  { id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
  { id: 2, name: "Maria", age: 19, grades: [92, 95, 89], active: true },
  { id: 3, name: "Pedro", age: 21, grades: [70, 65, 80], active: false },
  { id: 4, name: "Ana", age: 18, grades: [60, 75, 68], active: true },
  { id: 5, name: "Carlos", age: 22, grades: [90, 88, 92], active: false },
];

// 1. Usando filter para encontrar estudantes com idade >= 20
const olderStudents = students.filter((student) => student.age >= 20);
console.log("Estudantes com 20 anos ou mais:", olderStudents);

// 2. Usando find para encontrar o primeiro estudante com nota > 90
const studentWithHighGrade = students.find((student) => {
  return student.grades.some((grade) => grade > 90);
});
console.log(
  "\\nPrimeiro estudante com nota acima de 90:",
  studentWithHighGrade.name
);

// 3. Usando filter para encontrar estudantes ativos com média acima de 80
const highPerformingActiveStudents = students.filter((student) => {
  // Calculando a média das notas
  const average =
    student.grades.reduce((sum, grade) => sum + grade, 0) /
    student.grades.length;

  return student.active && average > 80;
});

console.log("\\nEstudantes ativos com média acima de 80:");
highPerformingActiveStudents.forEach((student) => console.log(student.name));
```

DESAFIO PARA OS ALUNOS:

a. Use filter para encontrar estudantes inativos

b. Use find para encontrar o estudante com id = 3

c. Use filter para encontrar estudantes que tiraram pelo menos uma nota abaixo de 70

d. Combine filter e map para obter apenas os nomes dos estudantes com média > 85


## Exercício 4: findIndex, some e every 

```js
// Exercício 4: findIndex, some e every

const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
    { id: 2, title: "Ler emails", completed: true, priority: "média" },
    { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
    { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
    { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

// 1. Usando findIndex para encontrar a posição da tarefa "Participar da reunião"
const meetingIndex = tasks.findIndex(task => task.title === "Participar da reunião");
console.log("Índice da tarefa 'Participar da reunião':", meetingIndex);

// 2. Usando some para verificar se há pelo menos uma tarefa de alta prioridade
const hasHighPriorityTask = tasks.some(task => task.priority === "alta");
console.log("\\nExiste pelo menos uma tarefa de alta prioridade:", hasHighPriorityTask);

// 3. Usando every para verificar se todas as tarefas estão completas
const allTasksCompleted = tasks.every(task => task.completed);
console.log("\\nTodas as tarefas concluídas:", allTasksCompleted);

// 4. Combinando some e filter para encontrar tarefas incompletas de alta prioridade
const incompleteHighPriorityTasks = tasks.filter(
    task => !task.completed && task.priority === "alta"
);
console.log("\\nTarefas incompletas de alta prioridade:", incompleteHighPriorityTasks);
```

DESAFIO PARA OS ALUNOS:

a. Use findIndex para encontrar a posição da primeira tarefa incompleta

b. Use some para verificar se existe alguma tarefa de baixa prioridade completa

c. Use every para verificar se todas as tarefas de alta prioridade estão incompletas

d. Use findIndex para encontrar a posição de uma tarefa com id = 10. Lide com o caso em que a tarefa não existe (dica: findIndex retorna -1 quando não encontra)

## Exercício 5: Desafio Integrador 
```js
// Exercício 5: Desafio Integrador - E-commerce

const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];
```

DESAFIO PARA OS ALUNOS:

Imagine que você está criando um sistema para uma loja online.

Use os métodos de array para implementar as seguintes funcionalidades:

a. Mostrar uma lista formatada de todos os produtos usando forEach

b. Filtrar produtos que estão em estoque (stock > 0)

c. Filtrar produtos da categoria "Eletrônicos" com preço < 1000

d. Verificar se há algum produto sem estoque

e. Verificar se todos os produtos têm pelo menos uma avaliação (review)

f. Encontrar o índice do produto "Cafeteira"

g. Encontrar o primeiro produto da categoria "Vestuário"

h. Criar uma função de busca que retorna produtos cujo nome contenha um termo específico

i. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"

j. Encontrar o produto com a maior média de avaliações
