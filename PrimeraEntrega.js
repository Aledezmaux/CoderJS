

function calcularCostoTotal() {
    let costoTotal = 0;
  
    // Use un bucle para permitir que el usuario ingrese los precios 
    while (true) {
      let precio = parseFloat(prompt("Ingrese el precio del producto y/o escriba 'fin' para terminar):"));
  
      // Si el usario ingresa el string "fin" el bucle finaliza y arroja el precio final
      if (isNaN(precio)) {
        break;
      }
  
      // Aca puse para valiadr que el precio sea un num positivo 
      if (precio >= 0) {
        costoTotal += precio; // Sumamos el precio al costo total
        alert("Total parcial: $" + costoTotal); // Mostramos el total parcial
      } else {
        alert("El precio ingresado no es válido. Por favor, ingrese un número positivo.");
      }
    }
  
    return costoTotal;
  }
  
  // Llamo a la función para calcular el costo total
  let costo = calcularCostoTotal();
  
  // Se muestra el costo total al usuario
  alert("El costo total de los productos y/o servicios seleccionados es: $" + costo);