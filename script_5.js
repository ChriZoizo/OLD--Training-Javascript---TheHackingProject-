const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
console.log("/n");
var result = [];
books.forEach((book) => {
  if (book.rented !== 0) {
    result.push(true);
  } else result.push(false);
});
if (result.includes(false)) {
  console.log(false)
}
else { console.log(true) }


console.log("Quel est livre le plus emprunté ?");
console.log("/n");


var maxRented = Math.max.apply(Math, books.map(function (o) { return o.rented }))


books.forEach((book) => {
  if (book.rented === maxRented) {
    console.log(book.title + " " + maxRented);
  }
  
})







console.log("Quel est le livre le moins emprunté ?");
console.log("/n");


var maxRentedMin = Math.min.apply(Math, books.map(function (o) { return o.rented }))


books.forEach((book) => {
  if (book.rented === maxRentedMin) {
    console.log(book.title + " " + maxRentedMin);
  }
  
})

console.log("Trouve le livre avec l'ID: 873495");
console.log("/n");

books.forEach((book) => {
  if (book.id === 873495) {
    console.log(book);
  }
  
})


console.log("Supprime le livre avec l'ID: 133712");



let toRemove = 133712
  var filteredBooks = books.filter( book => book.id !== toRemove)
  console.log("Liste Filtrer")
console.log(filteredBooks)

let removeBook = books.findIndex(book => {
  return book.id == toRemove
})

books.splice(removeBook, 1)

console.log("ellement supprimé")
console.log(books)


console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")

console.log(books.sort((a, b) => a.title.localeCompare(b.title)))