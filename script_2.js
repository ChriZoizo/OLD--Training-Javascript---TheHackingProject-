let number = console.prompt("Quelle nombre veux tu factoriser?")

function factor(number) {
    let prout = number;
    if (number < 0) {
        return "####PROUT####";
    } else if (number == 0 || number == 1) {
        return 1;
    } else {
        while (number > 1) {
            number--;
            prout *= number;
        }
        return prout;
    }
   
}
console.log(factor(1));
console.log(factor(20));
console.log(factor(132));
console.log(factor(-2));





