// Selecciona los botones por su identificador único
const boton1 = document.getElementById('ver-1');
const boton1CLASE = document.getElementById('ver-1_Clases');

const boton2 = document.getElementById('ver-2');
const boton2CLASE = document.getElementById('ver-2_Clases');

const boton3 = document.getElementById('ver-3');
const boton3CLASE = document.getElementById('ver-3_Clases');

const boton4 = document.getElementById('ver-4');
const boton4CLASE = document.getElementById('ver-4_Clases');

const boton5 = document.getElementById('ver-5');
const boton5CLASE = document.getElementById('ver-5_Clases');

const boton6 = document.getElementById('ver-6');
const boton6CLASE = document.getElementById('ver-6_Clases');


const boton7 = document.getElementById('ver-7');
const boton7CLASE = document.getElementById('ver-7_Clases');


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

boton2CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla2CLASE();
  
});

// Agrega un evento click al botón 3 para mostrar la tabla 3
boton3.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla3();
  
});

boton3CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla3CLASE();
  
});

// Agrega un evento click al botón 4 para mostrar la tabla 4
boton4.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla4();
  
});

boton4CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla4CLASE();
  
});

// Agrega un evento click al botón 5 para mostrar la tabla 5
boton5.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla5();
  
});

boton5CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla5CLASE();
  
});

// Agrega un evento click al botón 6 para mostrar la tabla 6
boton6.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla6();
  
});

boton6CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla6CLASE();
  
});

// Agrega un evento click al botón 7 para mostrar la tabla 7
boton7.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla7();
  
});

boton7CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla7CLASE();
  
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
  celda11.textContent = "Semana 01_Sistemas Inteligentes_Grupo 3.pdf";

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
    "https://drive.google.com/file/d/1mrFkO0MzWEBzTUfOzg9m6EoKh5xzIhyC/view",
    "https://drive.google.com/file/d/1P3Cpd4YXciA6dKS_cevTWlMbbn1rbkS_/view"
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 02_Sistemas Inteligentes_Grupo 3.pdf";

  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

  // Crear segunda fila
  const fila2 = tabla.insertRow();
  const celda21 = fila2.insertCell();
  const celda22 = fila2.insertCell();
  celda21.textContent = "Presentación del Tema_Sistemas Inteligentes_Grupo 3.pdf";
  
  const enlace2 = document.createElement("a");
  enlace2.href = enlaces[1];
  enlace2.target = "_blank";
  enlace2.textContent = "Ir al archivo";
  celda22.appendChild(enlace2);

}

function mostrarTabla2CLASE() {
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "SIMULACIÓN DE CONDUCCIÓN DE UN MÓVIL USANDOLÓGICA DIFUSA";
  const enlace1 = document.createElement("a");
  enlace1.href = "https://revistasinvestigacion.unmsm.edu.pe/index.php/sistem/article/view/3208/2676";
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);
}

// Función para mostrar la tabla 3
function mostrarTabla3() {
  const enlaces = [
    "https://drive.google.com/file/d/1Dg5gRil0NOp9JesTDNByNciM_EaDb6LM/view"
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 03_Sistemas Inteligentes_Grupo 3.pdf";

  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

}
function mostrarTabla3CLASE() {
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 03_Sistemas Inteligentes_Grupo 3.pdf";
  const enlace1 = document.createElement("a");
  enlace1.href = "https://drive.google.com/file/d/1Dg5gRil0NOp9JesTDNByNciM_EaDb6LM/view";
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);
}

// Función para mostrar la tabla 4
function mostrarTabla4() {
  const enlaces = [
    "https://drive.google.com/file/d/1QZZoKHoF--uZcgo6aXuKBdKTtA_HENB6/view",
    "https://drive.google.com/file/d/13toie1k_DcMJwhsmkH-Mgr8U5RC5IHrG/view",
    "https://docs.google.com/spreadsheets/d/1cfQ_A3O8pyg2tQ2VxiRmk49aDtSPQVkK/edit?usp=sharing&ouid=114433833571713201083&rtpof=true&sd=true"
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 04_Sistemas Inteligentes_Grupo 3.pdf";

  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

  // Crear segunda fila
  const fila2 = tabla.insertRow();
  const celda21 = fila2.insertCell();
  const celda22 = fila2.insertCell();
  celda21.textContent = "Informe_Control de velocidad de un ventilador según temperatura, humedad y CO2_Sistemas Inteligentes_Grupo 3.pdf";
    
  const enlace2 = document.createElement("a");
  enlace2.href = enlaces[1];
  enlace2.target = "_blank";
  enlace2.textContent = "Ir al archivo";
  celda22.appendChild(enlace2);

  // Crear tercera fila
  const fila3 = tabla.insertRow();
  const celda31 = fila3.insertCell();
  const celda32 = fila3.insertCell();
  celda31.textContent = "Conjuntos y Reglas difusas_Proyecto_Semana 04_Sistemas Inteligentes_Grupo 3";
    
  const enlace3 = document.createElement("a");
  enlace3.href = enlaces[2];
  enlace3.target = "_blank";
  enlace3.textContent = "Ir al archivo";
  celda32.appendChild(enlace3);
}
function mostrarTabla4CLASE() {
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "SIMULACIÓN DE CONDUCCIÓN DE UN MÓVIL USANDOLÓGICA DIFUSA (MATLAB)_Sistemas Inteligentes_Grupo 3";
  const enlace1 = document.createElement("a");
  enlace1.href = "https://drive.google.com/file/d/1w2SeRWMSLYYY01YaScaFS8HWyNG6FPrf/view";
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);
}

// Función para mostrar la tabla 5
function mostrarTabla5() {
  const enlaces = [
    "https://drive.google.com/file/d/1VlGWErS93ZYZ_4qFj1jcy3VbWFOI0BiT/view",
    "https://drive.google.com/file/d/1nUfaspfrbV4JORj1eKgeLWOpUrMSkP-H/view"
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 05_Sistemas Inteligentes_Grupo 3.pdf";

  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

  // Crear segunda fila
  const fila2 = tabla.insertRow();
  const celda21 = fila2.insertCell();
  const celda22 = fila2.insertCell();
  celda21.textContent = "Informe del proyecto_Sistemas Inteligentes_Grupo 3.pdf";
  
  const enlace2 = document.createElement("a");
  enlace2.href = enlaces[1];
  enlace2.target = "_blank";
  enlace2.textContent = "Ir al archivo";
  celda22.appendChild(enlace2);

}
function mostrarTabla5CLASE() {
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Villanueva_Zacarias_TareaAlgoritmoDifuso";
  const enlace1 = document.createElement("a");
  enlace1.href = "https://drive.google.com/file/d/1frG6W9rwE0c9xrlSGSyjSURAE45UwMm2/view";
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);
  //segunda fila
  const fila2 = tabla.insertRow();
  const celda21 = fila2.insertCell();
  const celda22 = fila2.insertCell();
  celda21.textContent = "Cruz_Vilca_TareaAlgoritmoDifuso";
  const enlace2 = document.createElement("a");
  enlace2.href = "https://drive.google.com/file/d/1CmLBhpUE4hfCTayZmBaxWYUXrTHbp60h/view";
  enlace2.target = "_blank";
  enlace2.textContent = "Ir al archivo";
  celda22.appendChild(enlace2);
  // Tercera fila
  const fila3 = tabla.insertRow();
  const celda31 = fila3.insertCell();
  const celda32 = fila3.insertCell();
  celda31.textContent = "Zapata_TareaAlgoritmoDifuso";
  const enlace3 = document.createElement("a");
  enlace3.href = "https://drive.google.com/file/d/1w_dOr4VU0fG0vttHEz7hFJM0m1pSZYRw/view";
  enlace3.target = "_blank";
  enlace3.textContent = "Ir al archivo";
  celda32.appendChild(enlace3);
  // Cuarta fila
  const fila4 = tabla.insertRow();
  const celda41 = fila4.insertCell();
  const celda42 = fila4.insertCell();
  celda41.textContent = "Campos_TareaAlgoritmoDifuso";
  const enlace4 = document.createElement("a");
  enlace4.href = "https://drive.google.com/drive/folders/1VdeV1v4fgfDE5ma1P1_W0MCk_2oTOmzG?usp=sharing";
  enlace4.target = "_blank";
  enlace4.textContent = "Ir al archivo";
  celda42.appendChild(enlace4);
  // Quinta fila
  const fila5 = tabla.insertRow();
  const celda51 = fila5.insertCell();
  const celda52 = fila5.insertCell();
  celda51.textContent = "Salvador_Veliz_TareaAlgoritmoDifuso";
  const enlace5 = document.createElement("a");
  enlace5.href = "https://drive.google.com/file/d/1oRq4mL25KZVCVuv4rFbku9XoTY_nR5sS/view?usp=sharing";
  enlace5.target = "_blank";
  enlace5.textContent = "Ir al archivo";
  celda52.appendChild(enlace5);
}

// Función para mostrar la tabla 6
function mostrarTabla6() {
  const enlaces = [
    "https://drive.google.com/file/d/1L2y9Q0H9itsmrBMUBypq-ove1jnqRVZi/view"
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 06_Sistemas Inteligentes_Grupo 3.pdf";

  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

}

function mostrarTabla6CLASE() {
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 06_Sistemas Inteligentes_Grupo 3.pdf";
  const enlace1 = document.createElement("a");
  enlace1.href = "https://drive.google.com/file/d/1L2y9Q0H9itsmrBMUBypq-ove1jnqRVZi/view";
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

}

// Función para mostrar la tabla 7
function mostrarTabla7() {
  const enlaces = [
    "https://drive.google.com/file/d/1hUDAlFjf9ljWHbraarNRljDxQFxHw75m/view"
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 07_Sistemas Inteligentes_Grupo 3.pdf";

  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

}

function ocultarVentanaEmergente() {
  ventanaEmergente.style.display = 'none';
}
function mostrarVentanaEmergente() {
  const ventanaEmergente = document.getElementById('ventana-emergente');
  ventanaEmergente.style.display = 'block';
}
