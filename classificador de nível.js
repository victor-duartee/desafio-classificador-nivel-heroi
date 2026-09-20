let nome = "Vitinho"
let XP = 1000000
let nivel = ""

if (XP < 1000){
    nivel = "ferro"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel) 
} else if (XP > 1000 && XP <= 2000){
    nivel = "bronze"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel) 
} else if (XP > 2000 && XP <= 5000){
    nivel = "prata"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel) 
} else if (XP > 5000 && XP <= 7000){
    nivel = "ouro"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel) 
} else if (XP > 7000 && XP <= 8000){
    nivel = "platina"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)   
} else if (XP > 8000 && XP <= 9000){
    nivel = "ascendente"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
} else if (XP > 9000 && XP <= 10000){
    nivel = "imortal"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
} else if (XP > 10000){
    nivel = "radiante"
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
}