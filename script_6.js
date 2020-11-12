var acid1 = "CCGUCGUUGCGCUACAGC"
var acid2 = "CCUCGCCGGUACUUCUCG"

var arn1 = []

var chain = acid1.split(/(?=(?:...)*$)/)
chain.forEach((arn) => {
    if (arn == "UCU" || arn == "UCC" || arn == "UCA" || arn == "UCG" || arn == "AGU" || arn == "AGC") {
        arn1.push("Sérine")
    }
    else if (arn == "CCU" || arn == "CCC" || arn == "CCA" || arn == "CCG") {
        arn1.push("Proline")
    }
    else if (arn == "UUA" || arn == "UUG") {
        arn1.push("Leucine")
    }
    else if (arn == "UUU" || arn == "UUC") {
        arn1.push("Phénylalaline")
    }
    else if (arn == "CGU" || arn == "CGC" || arn == "CGA" || arn == "CGG" || arn == "AGA" || arn == "AGG") {
        arn1.push("Arginine")
    }
    else if (arn == "UAU" || arn == "UAC") {
        arn1.push("Tyrosine")
    }
})
console.log(arn1)


var arn2 = []

var chain = acid2.split(/(?=(?:...)*$)/)
chain.forEach((arn) => {
    if (arn == "UCU" || arn == "UCC" || arn == "UCA" || arn == "UCG" || arn == "AGU" || arn == "AGC") {
        arn2.push("Sérine")
    }
    else if (arn == "CCU" || arn == "CCC" || arn == "CCA" || arn == "CCG") {
        arn2.push("Proline")
    }
    else if (arn == "UUA" || arn == "UUG") {
        arn2.push("Leucine")
    }
    else if (arn == "UUU" || arn == "UUC") {
        arn2.push("Phénylalaline")
    }
    else if (arn == "CGU" || arn == "CGC" || arn == "CGA" || arn == "CGG" || arn == "AGA" || arn == "AGG") {
        arn2.push("Arginine")
    }
    else if (arn == "UAU" || arn == "UAC") {
        arn2.push("Tyrosine")
    }
})
console.log(arn2)




