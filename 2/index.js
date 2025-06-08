function calcularIMC() {
  let pesoInput = document.getElementById('peso').value;
  let alturaInput = document.getElementById('altura').value;
  let resultado = document.getElementById('resultado');

  if (pesoInput === "") {
    resultado.textContent = "Preencha o peso corretamente.";
    return;
  }
  if (alturaInput === "") {
    resultado.textContent = "Preencha a altura corretamente.";
    return;
  }

  let peso = parseFloat(pesoInput);
  let altura = parseFloat(alturaInput);

  if (peso <= 0) {
    resultado.textContent = "Peso deve ser maior que zero.";
    return;
  }
  if (altura <= 0) {
    resultado.textContent = "Altura deve ser maior que zero.";
    return;
  }

  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    resultado.textContent = "IMC: " + imc + " - Abaixo do peso";
  } else if (imc < 25) {
    resultado.textContent = "IMC: " + imc + " - Peso normal";
  } else if (imc < 30) {
    resultado.textContent = "IMC: " + imc + " - Sobrepeso";
  } else if (imc < 35) {
    resultado.textContent = "IMC: " + imc + " - Obesidade grau 1";
  } else if (imc < 40) {
    resultado.textContent = "IMC: " + imc + " - Obesidade grau 2";
  } else {
    resultado.textContent = "IMC: " + imc + " - Obesidade grau 3";
  }
}

// esse final ficou extremamente feio, mas eu NAO sei outra maneira de fazer isso
// Marcos Luiz Taija Filho - 60009068
// Lucas Miguel Ramos - 60009407