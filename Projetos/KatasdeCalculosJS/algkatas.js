
// Sabendo que o vendedor de uma loja, recebe uma comissão de 3% sobre o total das vendas que realizar até R$ 1.200,00. 
// E mais 5% sobre o que ultrapassar este valor.
// Crie uma função que:
// Receba o salário fixo e o valor das vendas efetuadas pelo vendedor;
// E então calcule e retorne o seu salário total.
//calculateSalary()

function calculateSalary(salario, venda){
    let salarioTotal= 0
        if(venda > 1200 ){
            let diferenca= venda - 1200
            let comissaoFixa= 1200 * 0.03
            salarioTotal= diferenca * 0.05 + salario + comissaoFixa
            return salarioTotal
        }
        else {
            salarioTotal= venda * 0.03 + salario 
            return salarioTotal
        }
}
console.log(calculateSalary(1000, 1500))



// Cria uma função que receba um inteiro que representa o valor de um saque em reais (R$). 
// E então apresente a composição desse valor, pelas notas existentes. Sempre opte primeiro, por notas de maior valor.
// Recebe como parâmetro:
// valor do saque;
// valor do salário fixo;
// valor das vendas feitas pelo vendedor;
// Deve Calcular:
// A quantidade de notas de cada valor necessária para o saque. 
// Exemplo: 2 notas de R$200, 1 nota de R$100, 1 nota de R$50;
// O restante do seu salário após o saque.
// Retorne os resultado dos dois calculos em formato de string. 
// Exemplo: Notas sacadas: 2 notas de R$200, 1 nota de R$100, 1 nota de R$50, Saldo Atual: R$500
// cashMachine()

function cashMachine(valorSaque, salario, venda){
    let notas = [200, 100, 50, 20, 10, 5, 2]
    let valorRecebido = calculateSalary(salario, venda)
    let saque= []
    let totalConta= valorRecebido - valorSaque

        for(let i = 0; i < notas.length ; i++){
            if (Math.floor(valorSaque / notas[i]) > 0) {  
                saque.push(`${Math.floor(valorSaque / notas[i])} nota de R$ ${notas[i]}`)
                valorSaque = valorSaque % notas[i]
            }
            else if(valorSaque == 1 && i == notas.length-1){             
               console.log(`Valor de saque arredondado, ${valorSaque} voltou para sua conta`)
               
            }
        }
        return `Valor recebido: ${valorRecebido} .
Saldo atual: R$ ${totalConta + valorSaque}.
Notas sacadas: ${saque.join(", ")}.`
    
}
console.log(cashMachine(351, 1000, 1500))



// Dada a quantidade de estoque de uma loja de produtos. Crie uma função que receba como parâmetro:
// a quantidade atual em estoque
// a quantidade máxima em estoque
// a quantidade mínima em estoque de um produto
// E então faça com que a sua função:
// Calcule a quantidade média dos produtos. ((quantidade média = quantidade máxima + quantidade mínima)/2)
// se a quantidade em estoque for maior ou igual à quantidade média, retorne a mensagem: 'Não efetuar compra'
// senão retorne: 'Efetuar compra'
//calculateStock()

function calculateStock(quantidadeAtual, quantidadeMaxima, quantidadeMinima){
    let mediaEstoque = ((quantidadeMaxima + quantidadeMinima) /2)

        if(quantidadeAtual >= mediaEstoque){
            return "Não efetuar compra"
        }
        else{
            return "Efetuar compra"
        }
}
console.log(calculateStock(80, 200, 50))



// Crie uma função que receba o ano de nascimento de uma pessoa e o ano atual, calcule e retorne:
// a idade dessa pessoa em anos
// a idade dessa pessoa em meses
// a idade dessa pessoa em dias
// a idade dessa pessoa em semanas
//calculateAge()

function calculateAge(anoAtual, anoNascimento){
    let idAnos= anoAtual - anoNascimento
    let idMeses= idAnos * 12
    let idDias= idAnos * 365
    let idSemana= idDias / 7

    return `Idade dessa pessoa em anos: ${idAnos} anos. 
Idade dessa pessoa em meses: ${idMeses}.
Idade dessa pessoa em dias: ${idDias}.
Idade dessa pessoa em semanas: ${idSemana}`

}  
console.log(calculateAge(2022, 1983))



// Crie uma função que receba uma matriz quadrada NxN e retorne um vetor com sua diagonal principal.
// Por exemplo: matrizQuadrada3x3 = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ], saída => 1, 5, 9
//getDiagonal()
 
function getDiagonal(arrayNum) {
    let num = [];
        for (let i = 0; i < arrayNum.length; i++) {
            for (let j = 0; j < arrayNum.length; j++) {
                if (arrayNum[i] === arrayNum[j]) {
                num.push(arrayNum[i][j]);
                }
            }
        }
    
        return num
}
  console.log(getDiagonal([[1, 2, 3],
                           [4, 5, 6],
                           [7, 8, 9]]))
















