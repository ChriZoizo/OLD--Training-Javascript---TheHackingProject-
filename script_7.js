var user = prompt("kess tu veux ?")

if (user.substr(user.length -1) == "?" ) {
  console.log("Ouais Ouais...")
}
else if (user.match(/^[A-Z]+$/) ) {
  console.log("Pwa, calme-toi...")
}

else if (user.includes("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?")
}

else if (user.length == 0){
  console.log("t'es en PLS ?")
}
else {
  console.log("balek")
}

