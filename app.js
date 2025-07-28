let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let numeroIntentos = 1;
let maximoIntentos = 3;

while (numeroUsuario !== numeroSecreto) {
  alert("Hola Jhustin");

  numeroUsuario = parseInt(
    prompt("Me indicas un número entre el 1 y 10, por favor")
  );

  console.log(`Intento ${numeroIntentos}: el usuario ingresó ${numeroUsuario}`);

  if (numeroUsuario === numeroSecreto) {
    alert(
      `Has acertado, el número secreto es: ${numeroSecreto}. Lo hiciste en ${numeroIntentos} ${
        numeroIntentos == 1 ? "vez" : "veces"
      }.`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor que el que has indicado");
    } else {
      alert("El número secreto es mayor que el que has indicado");
    }
    alert("No has acertado el número secreto");
    numeroIntentos++;

    if (numeroIntentos > maximoIntentos) {
      alert(
        `Has superado el número máximo de intentos (${maximoIntentos}). El número secreto era ${numeroSecreto}.`
      );
      break;
    }
  }
}
