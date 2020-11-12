const entrepreneurs = [
    { first: "Steve", last: "Jobs", year: 1955 },
    { first: "Oprah", last: "Winfrey", year: 1954 },
    { first: "Bill", last: "Gates", year: 1955 },
    { first: "Sheryl", last: "Sandberg", year: 1969 },
    { first: "Mark", last: "Zuckerberg", year: 1984 },
    { first: "Beyonce", last: "Knowles", year: 1981 },
    { first: "Jeff", last: "Bezos", year: 1964 },
    { first: "Diane", last: "Hendricks", year: 1947 },
    { first: "Elon", last: "Musk", year: 1971 },
    { first: "Marissa", last: "Mayer", year: 1975 },
    { first: "Walt", last: "Disney", year: 1901 },
    { first: "Larry", last: "Page", year: 1973 },
    { first: "Jack", last: "Dorsey", year: 1976 },
    { first: "Evan", last: "Spiegel", year: 1990 },
    { first: "Brian", last: "Chesky", year: 1981 },
    { first: "Travis", last: "Kalanick", year: 1976 },
    { first: "Marc", last: "Andreessen", year: 1971 },
    { first: "Peter", last: "Thiel", year: 1967 },
];

console.log("Liste des connards nées en 70");
e, mais 
console.log("-------------------------------------");
console.log("Leurs noms et prenoms");
entrepreneurs.forEach((entrepreneur) => {
    console.log(entrepreneur.first + " " + entrepreneur.last);
});

console.log("-------------------------------------");
console.log("l'age des connards");
entrepreneurs.forEach((entrepreneur) => {
    console.log(
        entrepreneur.first +
        " " +
        entrepreneur.last +
        " " +
        "=>" +
        " " +
        (2020 - entrepreneur.year) +
        "ans"
    );
});
console.log("-------------------------------------");
console.log("affichage par ordre alphabetique");
let sortedEntrepreneurs = [];
entrepreneurs.forEach((entrepreneur) => {
    sortedEntrepreneurs.push(entrepreneur.last + " " + entrepreneur.first);
});
console.log(sortedEntrepreneurs.sort().join("\n"));

let weeksOfTHPArray = [
    "Semaine 1 - Introduction au Code",
    "Semaine 2 - Découverte de Ruby",
    "Semaine 3 - Programmation Orientée Objet",
    "Semaine 4 - Initiation à Rails",
];

console.log("**********Parcourons le array en forEach :");
weeksOfTHPArray.forEach((weekContent) => {
    console.log(weekContent);
});
