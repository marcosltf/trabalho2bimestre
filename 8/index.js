    function calcular() {
      let nivel = document.getElementById('nivel').value;
      let aulas = document.getElementById('aulas').value;
      let resultado = document.getElementById('resultado');

      if (nivel === "") {
        resultado.textContent = "Preencha os campos";
        return;
      }
      if (aulas === "") {
        resultado.textContent = "Preencha os campos";
        return;
      }


      nivel = parseInt(nivel);
      aulas = parseInt(aulas);

      if (nivel === 1) {
        valorHora = 12;
      } else if (nivel === 2) {
        valorHora = 17;
      } else if (nivel === 3) {
        valorHora = 25;
      } else {
        resultado.textContent = "Nivel invalido.";
        return;
      }

      let salario = valorHora * aulas * 4.5;
      resultado.textContent = "Salario: R$ " + salario.toFixed(2);
    }