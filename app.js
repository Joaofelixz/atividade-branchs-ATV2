// app.js

// BUG 1: Soma incorreta
function somar(a, b) {
  return a - b; // era para ser +
}

// BUG 2: Verifica se o número é par
function isPar(n) {
  return n % 2 === 1; // errado, deveria ser === 0
}

// BUG 3: Saudação com nome
function saudacao(nome) {
  return "Olá, " + nome; // Não adiciona ponto de exclamação
}
