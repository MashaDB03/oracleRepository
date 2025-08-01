let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignTextoElemento(
      "p",
      `¡Acertaste en ${intentos} ${intentos === 1 ? "vez" : "veces"}!`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroDeUsuario > numeroSecreto) {
    asignTextoElemento("p", "El número secreto es menor");
  } else {
    asignTextoElemento("p", "El número secreto es mayor");
  }

  intentos++;
  LimpiarCaja();
}

function LimpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignTextoElemento("p", "Todos los números ya han sido sorteados. Reinicia el juego.");
    document.getElementById("valorUsuario").disabled = true;
    return null;
  }

  let numeroGenerado;
  do {
    numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  } while (listaNumerosSorteados.includes(numeroGenerado));

  listaNumerosSorteados.push(numeroGenerado);
  return numeroGenerado;
}

function condicionesIniciales() {
  asignTextoElemento("h1", "Adivina el número");
  asignTextoElemento("p", `Indica un número entre el 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  document.getElementById("valorUsuario").disabled = false;
}

function reiniciarJuego() {
  LimpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
