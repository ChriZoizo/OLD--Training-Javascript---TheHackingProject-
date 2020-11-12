console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

let number = prompt("Combien d'etages tu veux ! ")

let n = 1;
let pyram = number--;

let blank = " ";
let hashtag = "#";
while (number !== 0) {
    console.log(blank.repeat(pyram) + hashtag.repeat(n));
    n++ ;
    pyram-- ;
    number--
}



