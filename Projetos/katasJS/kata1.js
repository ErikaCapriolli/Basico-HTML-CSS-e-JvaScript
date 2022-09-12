 //oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,...,19, 20)
function oneThroughTwenty(){
    let contador = []
    for(let i =1 ; i <=20 ; i++){
        contador.push(i)
    }
    return contador
}
console.log(oneThroughTwenty())



//evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,...,18, 20)
function evensToTwenty(){
    let contador = []
    for(let i = 1 ; i <= 20 ; i++){
        if(i % 2 == 0){
            contador.push(i)
        }
    }
    return contador
}
console.log(evensToTwenty())



//oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,...,17, 19)
function oddsToTwenty(){
    let contador = []
    for(let i = 1 ; i <= 20 ; i++){
        if(i % 2 !== 0){
            contador.push(i)
        }
    }
    return contador
}
console.log(oddsToTwenty())



// multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10,15,..., 95, 100)
function multiplesOfFive(){
    let contador = []
    for(let i = 1 ; i <= 100 ; i++){
        if(i % 5 == 0){
            contador.push(i)
        }
    }
    return contador
}
console.log(multiplesOfFive())



// squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, ..., 81, 100)
function squareNumbers(){
    let contador = []
    for(let i = 1 ; i <= 10 ; i++){
        contador.push(i * i)
    }
    return contador
}
console.log(squareNumbers())



//countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, ..., 2, 1)
function countingBackwards(){
    let contador = []
    for(let i = 20 ; i >= 1 ; i--){
        contador.push(i)
    }
    return contador
}
console.log(countingBackwards())



//evenNumbersBackwards - Retornar os números pares de 20 até 1. (20,18, 16, ..., 4, 2)
function evenNumbersBackwards(){
    let contador = []
    for(let i = 20 ; i >= 1 ; i--){
        if(i % 2 == 0){
            contador.push(i)
        }
    }
    return contador
}
console.log(evenNumbersBackwards())



// oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, ..., 3, 1)
function oddNumbersBackwards(){
    let contador = []
    for(let i = 20 ; i >= 1 ; i--){
        if(i % 2 !== 0){
            contador.push(i)
        }
    }
    return contador
}
console.log(oddNumbersBackwards())



// multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, ..., 10, 5)
function multiplesOfFiveBackwards(){
    let contador = []
    for(let i = 100 ; i >= 1 ; i--){
        if(i % 5 == 0){
            contador.push(i)
        }
    }
    return contador
}
console.log(multiplesOfFiveBackwards())


//squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, ..., 4, 1)
function squareNumbersBackwards(){
    let contador = []
    for(let i = 10 ; i >= 1 ; i--){
        contador.push(i * i)
    }
    return contador
}
console.log(squareNumbersBackwards())

