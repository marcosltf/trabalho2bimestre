    function calcularImposto() {
      let anoInput = document.getElementById('ano').value;
      let valorInput = document.getElementById('valor').value;
      let resultado = document.getElementById('resultado');

      if (anoInput === "") {
        resultado.textContent = "preencha o ano do carro";
        return;
      }
      if (valorInput === "") {
        resultado.textContent = "preencha o valor de tabela";
        return;
      }

      let ano = parseInt(anoInput);
      let valor = parseFloat(valorInput);

      if (ano <= 0) {
        resultado.textContent = "ano invalido.";
        return;
      }
      if (valor <= 0) {
        resultado.textContent = "valor de tabela invalido.";
        return;
      }


      if (ano < 1990) {
        taxa = 0.01; // 1%
      } else {
        taxa = 0.015; // 1.5%
      }

      let imposto = valor * taxa;

      resultado.textContent = "imposto a pagar: R$ " + imposto.toFixed(2);
    }

// referencia https://www.w3schools.com/jsref/jsref_tofixed.asp
// Marcos Luiz Taija Filho - 60009068
// Lucas Miguel Ramos - 60009407