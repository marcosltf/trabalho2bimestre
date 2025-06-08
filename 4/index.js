    function calcularSalario() {
      let salarioInput = document.getElementById('salario').value;
      let codigoInput = document.getElementById('codigo').value;
      let resultado = document.getElementById('resultado');

      if (salarioInput === "") {
        resultado.textContent = "Preencha o salario.";
        return;
      }
      if (codigoInput === "") {
        resultado.textContent = "Preencha o codigo";
        return;
      }

      let salario = parseFloat(salarioInput);
      let codigo = parseInt(codigoInput);

      if (codigo === 101) {
        percentual = 0.10;
      } else if (codigo === 102) {
        percentual = 0.20;
      } else if (codigo === 103) {
        percentual = 0.30;
      } else {
        percentual = 0.40;
      }

      let aumento = salario * percentual;
      let novoSalario = salario + aumento;

      resultado.textContent = "Antigo: " + salario + " Novo: " + novoSalario + " Diferenca: " + aumento;
    }

// Marcos Luiz Taija Filho - 60009068
// Lucas Miguel Ramos - 60009407