    function calcularTotal() {
      let cod = document.getElementById('codigo').value;
      let qtd = document.getElementById('quantidade').value;
      let resultado = document.getElementById('resultado');

      if (cod === "") {
        resultado.textContent = "Preencha os campos";
        return;
      }
      if (qtd === "") {
        resultado.textContent = "Preencha os campos";
        return;
      }

      cod = parseInt(cod);
      qtd = parseInt(qtd);

      if (cod === 1) preco = 11.00;
      else if (cod === 2) preco = 8.50;
      else if (cod === 3) preco = 8.00;
      else if (cod === 4) preco = 9.00;
      else if (cod === 5) preco = 10.00;
      else if (cod === 6) preco = 4.50;
      else {
        resultado.textContent = "Codigo invalido";
        return;
      }

      let total = preco * qtd;
      resultado.textContent = "Total R$ " + total.toFixed(2);
    }

// Marcos Luiz Taija Filho - 60009068
// Lucas Miguel Ramos - 60009407