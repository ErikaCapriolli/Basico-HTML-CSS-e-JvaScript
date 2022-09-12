const body = document.querySelector("body")

const productsCart = [
    {
        id: 0,
        name: "Uva Crimson",
        price: 40.99
    },
    {
        id: 1,
        name: "Vinho Canção",
        price: 14.98
    },
    {
        id: 2,
        name: "Água de coco",
        price: 6.99
    }, 
    {
        id: 3,
        name: "Mamão",
        price: 5.98
    }, 
    {
        id: 4,
        name: "Água tônica",
        price: 12.98
    },
]

const main = document.createElement("main")
const ul = document.createElement("ul")
const section = document.createElement("section")
const pSoma = document.createElement("p") 
const button = document.createElement("button")


main.classList.add("produtos")
ul.classList.add("listaProdutos")
section.classList.add("sectionFinalizar")
pSoma.classList.add("finalizar")
button.classList.add("button")

body.appendChild(main)
main.append(ul, section)
section.append(pSoma, button)


function criarListaProdutos(productsCart){
    for(let i = 0; i < productsCart.length; i++){
        let products = productsCart[i]
        let cards = card(products) 
        ul.appendChild(cards)
    }
}
criarListaProdutos(productsCart)


function card(productsCart){
    //criar elementos
    const li = document.createElement("li")
    const p = document.createElement("p") //name
    const span = document.createElement ("span") //price

    //criar classes
    li.classList.add("card")
    p.classList.add("name")
    span.classList.add("price")

    //genealogia
    li.append(p,span)

    // acessar dados produtos 
    p.innerText = productsCart.name
    span.innerText = `R$${productsCart.price.toFixed(2)}`

    return li
}


function somaItens(productsCart){
 let soma = 0
    for(let i = 0; i < productsCart.length; i++){
            soma += productsCart[i].price
        }

    return soma
}
somaItens(productsCart)


function sectionFinal(soma){
    
    pSoma.innerText = `Total                  R$${soma.toFixed(2)}`
    button.innerText = "Finalizar Compra"

}
sectionFinal(somaItens(productsCart))

