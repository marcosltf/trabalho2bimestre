    function calcular() {
      let preco = document.getElementById('preco').value;
      let cod = document.getElementById('codigo').value;
      let resultado = document.getElementById('resultado');

      if (cod === "") {
        resultado.textContent = "Preencha os campos";
        return;
      }
      if (preco === "") {
        resultado.textContent = "Preencha os campos";
        return;
      }

      preco = parseFloat(preco);
      let total = preco;

      if (cod === "a") {
        total = preco * 0.9;
      } else if (cod === "b") {
        total = preco * 0.85;
      } else if (cod === "c") {
        total = preco;
      } else if (cod === "d") {
        total = preco * 1.1;
      } else {
        resultado.textContent = "Codigo invalido";
        return;
      }

      resultado.textContent = "a pagar: R$ " + total.toFixed(2);
    }

// Marcos Luiz Taija Filho - 60009068
// Lucas Miguel Ramos - 60009407