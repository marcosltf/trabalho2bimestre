    function calcularCredito() {
      let saldoInput = document.getElementById('saldo').value;
      let resultado = document.getElementById('resultado');

      if (saldoInput === "") {
        resultado.textContent = "Preencha o saldo.";
        return;
      }

      let saldo = parseFloat(saldoInput);

      if (saldo <= 200) {
        percentual = 0;
      } else if (saldo <= 400) {
        percentual = 0.20;
      } else if (saldo <= 600) {
        percentual = 0.30;
      } else {
        percentual = 0.40;
      }

      let credito = saldo * percentual;

      resultado.textContent = "Saldo: " + saldo + "Crédito: " + credito;
    }

// Marcos Luiz Taija Filho - 60009068
// Lucas Miguel Ramos - 60009407