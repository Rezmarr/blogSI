// Selecciona los botones por su identificador único
const boton1 = document.getElementById('ver-1');
const boton2 = document.getElementById('ver-2');

// Selecciona la ventana emergente por su identificador único
const ventanaEmergente = document.getElementById('ventana-emergente');

// Agrega un evento click al botón 1 para mostrar la tabla 1
boton1.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla1();
  
});

// Agrega un evento click al botón 2 para mostrar la tabla 2
boton2.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla2();
  
});

ventanaEmergente.addEventListener('click', (event) => {
  if (event.target === ventanaEmergente) {
    ocultarVentanaEmergente();
  }
});






function ocultarVentanaEmergente() {
  ventanaEmergente.style.display = 'none';
}
function mostrarVentanaEmergente() {
  const ventanaEmergente = document.getElementById('ventana-emergente');
  ventanaEmergente.style.display = 'block';
}
// Función para mostrar la tabla 1
function mostrarTabla1() {
  const enlaces = [
    'https://drive.google.com/file/d/1Q4eCGxQKcyU3NCT9_6Tsm0Joh8JDMYSh/view',
    'https://drive.google.com/file/d/1Q4eCGxQKcyU3NCT9_6Tsm0Joh8JDMYSh/view'
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';

  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 01_Sistemas Inteligentes_Grupo.pdf";

  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Descargar";
  celda12.appendChild(enlace1);

  // Crear segunda fila
  const fila2 = tabla.insertRow();
  const celda21 = fila2.insertCell();
  const celda22 = fila2.insertCell();
  celda21.textContent = "tarea2.xlsx";
  const enlace2 = document.createElement("a");
  enlace2.href = enlaces[1];
  enlace1.target = "_blank";
  enlace2.textContent = "Descargar";
  celda22.appendChild(enlace2);

}

// Función para mostrar la tabla 2
function mostrarTabla2() {
  const enlaces = [
    'https://drive.google.com/file/d/1Q4eCGxQKcyU3NCT9_6Tsm0Joh8JDMYSh/view',
    'https://drive.google.com/file/d/1Q4eCGxQKcyU3NCT9_6Tsm0Joh8JDMYSh/view'
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 02_Sistemas Inteligentes_Grupo.pdf";

  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Descargar";
  celda12.appendChild(enlace1);

}

