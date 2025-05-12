// Erros de exemplo para o Codacy/ESLint detectar

var resultado = soma(2,3)   // 1. Uso de var, 2. Ponto-e-vírgula ausente, 3. Espaços inconsistentes

function soma(a,b){
  return a +   b     // 4. Espaço extra antes de “b”
}

const dados = { nome: "Test", idade:30, ativo:true }   // 5. Vírgula final ausente, 6. Mistura de aspas duplas

console.log("Resultado da soma:", resultado)

let unused = 123  // 7. Variável declarada e não usada
