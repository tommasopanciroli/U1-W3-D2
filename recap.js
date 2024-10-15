// ES6
// let & const
// arrow functions () => 'ciccio'
// spread operator
const obj = {
  color: 'blue',
  height: 50,
  width: 500,
}

const obj2 = obj // non è una vera copia!
const obj3 = { ...obj } // È una vera copia! è un nuovo oggetto con pari contenuto
// ...obj significa prendere TUTTE LE COPPIE CHIAVE:VALORE di obj!

const arr = [1, 2, 3]
const arr2 = arr // non è una vera copia!
const arr3 = [...arr] // È una vera copia! è un nuovo array con pari contenuto

const arr4 = [...arr, 4, 5] // [1, 2, 3, 4, 5]

// DESTRUCTURING
console.log(obj.height)
console.log(obj.width)

const { height, width } = obj
// come se avessi scritto:
// const height = obj.height
// const width = obj.width

console.log(height, width)

// NUOVI METODI PER LAVORARE CON GLI ARRAY
// forEach, map, filter, reduce, find, findIndex
// sono metodi che lanciano internamente un CICLO, sfogliano l'intero contenuto di
// un array e permettono di lanciare operazioni sui singoli elementi, trasformare
// l'array in un altro array, filtrare un array, ridurre un array, trovare un elemento
// o trovare l'indice di un elemento (a partire da una condizione)

const arrayOfPhones = [
  {
    model: 'iPhone 16',
    price: 990,
    color: 'black',
  },
  {
    model: 'Pixel 9',
    price: 900,
    color: 'lime',
  },
  {
    model: 'S24 Ultra',
    price: 1000,
    color: 'blue',
  },
  {
    model: 'Redmi 9 Pro',
    price: 700,
    color: 'pink',
  },
]

// for (let i = 0; i < arrayOfPhones.length; i++) {
//   arrayOfPhones[i] // <-- questo qui sarebbe currentElement!!
// }

arrayOfPhones.forEach((currentElement) => {
  // qui dentro le cose vengono eseguite 4 volte!
  console.log('CIAONE', currentElement.color)
})
// forEach non restituisce nessun risultato, non ha valore di ritorno

// map invece ha un valore di ritorno, e di fatto viene utilizzato
// per TRASFORMARE un array in un NUOVO array!
const arrayOfPrices = arrayOfPhones.map((currentElement) => {
  // noi vogliamo ottenere un array di soli prezzi! un array NUMERICO
  // [990, 900, 1000, 700]
  // quale sarà il risultato che ritorneremo?
  return currentElement.price
})

console.log(arrayOfPrices)

// creiamo un array con solamente i telefono più costosi di 900
const pricyPhones = arrayOfPhones.filter((currentElement) => {
  // filter ha bisogno di ritornare true/false per ogni elemento!
  // se torna TRUE -> il currentElement farà parte dell'array risultante
  // se torna FALSE -> il currentElement NON farà parte dell'array risultante

  if (currentElement.price > 900) {
    return true
  } else {
    // prezzo 900 o minore
    return false
  }

  //   return currentElement.price > 900
})

console.log(pricyPhones) // array di 2 elementi
