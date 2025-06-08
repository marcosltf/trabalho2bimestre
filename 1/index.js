    function verificar() {
      let x = Number(document.getElementById('x').value);
      let y = Number(document.getElementById('y').value);
      let z = Number(document.getElementById('z').value);
      let resultado = document.getElementById('resultado');

      if (x <= 0 || y <= 0 || z <= 0) {
        resultado.innerText = "Os lados devem ser maiores que zero";
        return;
      }

      if (x < y + z && y < x + z && z < x + y) {
        if (x === y && y === z) {
          resultado.innerText = "Triangulo equilatero";
        } else if (x === y || x === z || y === z) {
          resultado.innerText = "Triangulo isosceles";
        } else {
          resultado.innerText = "Triangulo escaleno";
        }
      } else {
        resultado.innerText = "Os valores nao formam um triangulo";
      }
    }

// referencias https://br.neurochispas.com/geometria/triangulo-equilatero-isoceles-e-escaleno/
// https://www.w3schools.com/js/js_operators.asp
// Marcos Luiz Taija Filho - 60009068
// Lucas Miguel Ramos - 60009407