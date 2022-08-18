// datos
const object_1 = {
  value: "1",
};
const object_2 = {
  value: "2",
  id: 1,
};
const object_3 = {
  value: "3",
};
const object_4 = {
  value: "4",
};
const array_1 = [object_1, object_2, object_3, object_4];
const arrayPalabras = [
  "Hola",
  "Adios",
  "Inicio",
  "Final",
  "Ancla",
  "analisis",
  "Verdad",
];
const arrayNumbers = [2, 6, 5, 1, 7, 10];

// Función hasId
const hasId = (input) => {
  const { id } = input;
  return id !== undefined;
};
console.log(" - Funcion hasID:");
console.log(hasId(object_1));
console.log(hasId(object_2));

// Función head
const head = (input) => {
  const [first] = input;
  return first;
};
console.log("\n - Funcion head:");
console.log(head(array_1));

// Función tail
const tail = (input) => {
  const [first, ...resto] = input;
  return resto;
};
console.log("\n - Funcion tail:");
console.log(tail(array_1));

// Función swapFirstToLast
const swapFirstToLast = (input) => {
  const [first, ...resto] = input;
  const result = [];
  for (const iterator of resto) {
    result.push(iterator);
  }
  result.push(first);
  return result;
};
console.log("\n - Funcion swapFirstToLast:");
console.log(swapFirstToLast(array_1));

// Función excludeId
const excludeId = (input) => {
  const { id, ...resto } = input;
  return resto;
};
console.log("\n - Funcion excludeId:");
console.log(excludeId(object_1));
console.log(excludeId(object_2));

// Función wordsStartingWithA
const checkA = (word) => {
  const pattern = /^a./;
  return pattern.test(word.toLowerCase());
};
const wordsStartingWithA = (input) =>
  input.filter((input) => {
    const pattern = /^a./;
    return pattern.test(input.toLowerCase());
  });
console.log("\n - Funcion wordsStartingWithA:");
console.log(wordsStartingWithA(arrayPalabras));

// Función concat
const concat = (...input) =>
  input.reduce((result, item) => result + item + "|", "|");
console.log("\n - Funcion concat:");
console.log(concat("Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"));

// Función multArray
const multArray = (arr, x) => arr.map((item) => item * x);
console.log("\n - Funcion multArray:");
console.log(multArray(arrayNumbers, 3));

// Función calcMult
const calcMult = (...numbers) =>
  numbers.reduce((result, item) => result * item, 1);
console.log("\n - Funcion calcMult:");
console.log(calcMult(4, 2, 6, 7));

// EJERCICIOS EXTRA -------------------------------------------------------------------------

// Función swapFirstSecond
const swapFirstSecond = (input) => {
  const [first, second, ...resto] = input;
  const result = [];
  result.push(second);
  result.push(first);
  for (const iterator of resto) {
    result.push(iterator);
  }
  return result;
};
console.log("\n - Funcion swapFirstSecond:");
console.log(swapFirstSecond(array_1));

// Función firstEqual
const firstEqual = (letter, ...wordList) =>
  wordList.reduce((result, word) => {
    const wordArray = Array.from(word);
    const initial = wordArray.shift();
    return result && initial.toLowerCase() === letter.toLowerCase();
  }, true);
console.log("\n - Funcion firstEqual:");
console.log(firstEqual("h", "hada", "madrina"));
console.log(firstEqual("h", "hola", "HOTEL"));

// Función longest
const longest = (...arrayList) =>
  arrayList.reduce(
    (result, item) => (item.length > result.length ? item : result),
    []
  );
console.log("\n - Funcion longest:");
console.log(longest(array_1, arrayPalabras, arrayNumbers));

// Función searchInStringV1
const searchInStringV1 = (letter, word) => {
  const wordArray = Array.from(word);
  return wordArray.reduce(
    (result, current) =>
      result + (current.toLowerCase() === letter.toLowerCase() ? 1 : 0),
    0
  );
};
console.log("\n - Funcion searchInStringV1:");
console.log(searchInStringV1("a", "madrina"));
console.log(searchInStringV1("p", "madrina"));

// Función searchInStringV2
const searchInStringV2 = (letter, word) => {
  const wordArray = Array.from(word);
  return wordArray.filter((item) => item.toLowerCase() === letter.toLowerCase())
    .length;
};
console.log("\n - Funcion searchInStringV2:");
console.log(searchInStringV2("a", "madrina"));
console.log(searchInStringV2("p", "madrina"));

// Función sortCharacters
const sortCharacters = (word) => {
  const wordArray = Array.from(word);
  return wordArray.sort((a, b) => (a > b ? 1 : -1)).join("");
};
console.log("\n - Funcion sortCharacters:");
console.log(sortCharacters("esternocleidomastoideo"));

// Función shout
const shout = (...wordList) =>
  wordList.reduce(
    (result, word) => result + "¡" + word.toUpperCase() + "!",
    ""
  );
console.log("\n - Funcion shout:");
console.log(
  shout("Hola", "Adios", "Inicio", "Final", "Ancla", "analisis", "Verdad")
);

// LISTA DE LA COMPRA -------------------------------------------------------------------------

// datos
const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

// Función listIva
// Obtén una nueva lista donde aparezca el IVA (21%) de cada producto
const listIva = (shoppingList) =>
  shoppingList.map(
    (item) =>
      item.product +
      ": " +
      (item.price * 0.21).toFixed(2) +
      " €" +
      (item.units > 1
        ? ", para " +
          item.units +
          " unidades: " +
          (item.units * item.price * 0.21).toFixed(2) +
          " €"
        : "")
  );
console.log("\n - Funcion listIva:");
console.log(listIva(shoppingCart));

// Función sortUnits
// Ordena la lista de más a menos unidades
const sortUnits = (shoppingList) =>
  shoppingList.sort((a, b) => (a.units > b.units ? -1 : 1));
console.log("\n - Funcion sortUnits:");
console.log(sortUnits(shoppingCart));

// Función totalPerSection
// Obtén el subtotal gastado en droguería
const totalPerSection = (shoppingList, section) =>
  shoppingList
    .reduce(
      (result, item) =>
        result + (item.category === section ? item.units * item.price : 0),
      0
    )
    .toFixed(2);
console.log("\n - Funcion totalPerSection:");
console.log(totalPerSection(shoppingCart, "Droguería") + " €");

// Función DisplaySortedList
// Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría
const DisplaySortedList = (shoppingList) => {
  let sortedList = shoppingList.sort((a, b) =>
    a.category > b.category ? 1 : -1
  );
  sortedList.map((item) => {
    console.log(
      item.product + " -> " + (item.units * item.price).toFixed(2) + " €"
    );
  });
};
console.log("\n - Funcion DisplaySortedList:");
DisplaySortedList(shoppingCart);
