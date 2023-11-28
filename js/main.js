function juego(){
let mensaje = "ADIVINA EL NUMERO DEL 1 AL 100"
console.log(mensaje)
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos= 1
let adivinanza = Number(prompt("Adivina el numero del 1 al 100"))
while(adivinanza != numeroAleatorio){
    console.log("__________________________________________")
    intentos++ 
    if(adivinanza < numeroAleatorio){
        console.log("El numero elegido fue " + adivinanza)
        console.log("¡El número es muy bajo!")
        adivinanza=prompt("Intenta de nuevo")
    }
    else if(adivinanza > numeroAleatorio){
        console.log("El numero elegido fue " + adivinanza)
        console.log("¡El número es muy alto!")
        adivinanza=prompt("Intenta de nuevo")  
    }
}
console.log("_______________¡GANASTE!_________________")
console.log("El numero era " + numeroAleatorio )
console.log("ADIVINASTE EN " + intentos + " INTENTOS")
}
console.log(juego())
