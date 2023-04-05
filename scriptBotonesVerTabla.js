// Selecciona los botones por su identificador único
const boton1 = document.getElementById('ver-1');
const boton1CLASE = document.getElementById('ver-1_Clases');

const boton2 = document.getElementById('ver-2');
const boton2CLASE = document.getElementById('ver-2_Clases');

// Selecciona la ventana emergente por su identificador único
const ventanaEmergente = document.getElementById('ventana-emergente');

// Agrega un evento click al botón 1 para mostrar la tabla 1
boton1.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla1();
  
});

boton1CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla1CLASE();
  
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

// Función para mostrar la tabla 1
function mostrarTabla1() {
  const enlaces = [
    "https://drive.google.com/file/d/1b1rtcdOmgScOx4TU0GLvxdojtCibBtGL/view",
    "https://drive.google.com/file/d/1_HqBK5ip37FImpJlmfQ4GRrTft_G8RYm/view"
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Presentación(PPT)_Semana 01_Sistemas Inteligentes_Grupo.pdf";

  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

    // Crear segunda fila
    const fila2 = tabla.insertRow();
    const celda21 = fila2.insertCell();
    const celda22 = fila2.insertCell();
    celda21.textContent = "Informe_Semana 01_Sistemas Inteligentes_Grupo.pdf";
  
    const enlace2 = document.createElement("a");
    enlace2.href = enlaces[1];
    enlace2.target = "_blank";
    enlace2.textContent = "Ir al archivo";
    celda22.appendChild(enlace2);

}

function mostrarTabla1CLASE() {
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Silabo-Sistemas Inteligentes-P2018-CE-Semipresencial-20118086-2023-I.docx";
  const enlace1 = document.createElement("a");
  enlace1.href = "https://docs.google.com/document/d/1fJ2UFcRzAk-ztFE4u-JzF8yrm3eLBlRG/edit?usp=sharing&ouid=106095924712021991417&rtpof=true&sd=true";
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);
  //segunda fila
  const fila2 = tabla.insertRow();
  const celda21 = fila2.insertCell();
  const celda22 = fila2.insertCell();
  celda21.textContent = "Silabo-Sistemas Inteligentes-P2014-CE-Semipresencial-2011110-2023-I.docx";
  const enlace2 = document.createElement("a");
  enlace2.href = "https://docs.google.com/document/d/1sYsmctmTOSAKIh0F4k8V2nh-4S-W5bQP/edit?usp=sharing&ouid=106095924712021991417&rtpof=true&sd=true";
  enlace2.target = "_blank";
  enlace2.textContent = "Ir al archivo";
  celda22.appendChild(enlace2);
}

// Función para mostrar la tabla 2
function mostrarTabla2() {
  const enlaces = [
    'https://docs.google.com/spreadsheets/d/1VFTTKeHW7Ua-3kr6W1v8jAK85VxMiDPW/edit?usp=sharing&ouid=106095924712021991417&rtpof=true&sd=true',
    'https://docs.google.com/spreadsheets/d/1NReRaMURU_hVgwCBPr2MsbL2OSRxsl6s/edit?usp=sharing&ouid=106095924712021991417&rtpof=true&sd=true'
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "";
  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

  // Crear segunda fila
  const fila2 = tabla.insertRow();
  const celda21 = fila2.insertCell();
  const celda22 = fila2.insertCell();
  celda21.textContent = "tarea2.xlsx";
  const enlace2 = document.createElement("a");
  enlace2.href = enlaces[1];
  enlace2.target = "_blank";
  enlace2.textContent = "Ir al archivo";
  celda22.appendChild(enlace2);

}






function ocultarVentanaEmergente() {
  ventanaEmergente.style.display = 'none';
}
function mostrarVentanaEmergente() {
  const ventanaEmergente = document.getElementById('ventana-emergente');
  ventanaEmergente.style.display = 'block';
}
