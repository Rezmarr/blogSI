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

const boton8 = document.getElementById('ver-8');
const boton8CLASE = document.getElementById('ver-8_Clases');

const boton9 = document.getElementById('ver-9');
const boton9CLASE = document.getElementById('ver-9_Clases');

const boton10 = document.getElementById('ver-10');
const boton10CLASE = document.getElementById('ver-10_Clases');

const boton11 = document.getElementById('ver-11');
const boton11CLASE = document.getElementById('ver-11_Clases');

const boton12 = document.getElementById('ver-12');
const boton12CLASE = document.getElementById('ver-12_Clases');

const boton13 = document.getElementById('ver-13');
const boton13CLASE = document.getElementById('ver-13_Clases');

const boton14 = document.getElementById('ver-14');
const boton14CLASE = document.getElementById('ver-14_Clases');

const boton15 = document.getElementById('ver-15');
const boton15CLASE = document.getElementById('ver-15_Clases');

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

// Agrega un evento click al botón 8 para mostrar la tabla 8
boton8.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla8();
  
});

boton8CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla8CLASE();
  
});

// Agrega un evento click al botón 9 para mostrar la tabla 9
boton9.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla9();
  
});

boton9CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla9CLASE();
  
});

// Agrega un evento click al botón 10 para mostrar la tabla 10
boton10.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla10();
  
});

boton10CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla10CLASE();
  
});

// Agrega un evento click al botón 11 para mostrar la tabla 11
boton11.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla11();
  
});

boton11CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla11CLASE();
  
});

// Agrega un evento click al botón 12 para mostrar la tabla 12
boton12.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla12();
  
});

boton12CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla12CLASE();
  
});

// Agrega un evento click al botón 13 para mostrar la tabla 13
boton13.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla13();
  
});

boton13CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla13CLASE();
  
});

// Agrega un evento click al botón 14 para mostrar la tabla 14
boton14.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla14();
  
});

boton14CLASE.addEventListener('click', () => {
  mostrarVentanaEmergente();
  mostrarTabla14CLASE();
  
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

// Función para mostrar la tabla 8
function mostrarTabla8() {
  const enlaces = [
    "https://drive.google.com/file/d/14PuC2PK2LRzk1C-lxUYOzFLQ5t-z4wN4/view"
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "ProyectoFuzzy_Código en Arduino IDE_Sistemas Inteligentes_Grupo 3.pdf";

  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

}

function mostrarTabla8CLASE() {
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Informe_Examen Parcial_Sistemas Inteligentes_Grupo 3_Subgrupo01.pdf";
  const enlace1 = document.createElement("a");
  enlace1.href = "https://drive.google.com/file/d/11FCONZakfNk_kowc6VhpTxjw6ssB_V3p/view";
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

   // Crear segunda fila
  const fila2 = tabla.insertRow();
  const celda21 = fila2.insertCell();
  const celda22 = fila2.insertCell();
  celda21.textContent = "Informe_Examen Parcial_Sistemas Inteligentes_Grupo 3_Subgrupo02.pdf";
  const enlace2 = document.createElement("a");
  enlace2.href = "https://drive.google.com/file/d/15SIzSa5r6BKmuAGUsYPwWDBHJRMcUM3L/view?usp=sharing";
  enlace2.target = "_blank";
  enlace2.textContent = "Ir al archivo";
  celda22.appendChild(enlace2);
}


// Función para mostrar la tabla 9
function mostrarTabla9() {
  const enlaces = [
    "https://drive.google.com/file/d/1UNzz4-zTF3QP9P9GHE2V8gicNt8FMk1K/view?usp=sharing"
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 09_Sistemas Inteligentes_Grupo 3.pdf";

  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

}

function mostrarTabla9CLASE() {
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Examen Parcial_Sistemas Inteligentes 2023-1_Grupo 03_Subgrupo01.pdf";
  const enlace1 = document.createElement("a");
  enlace1.href = "https://drive.google.com/file/d/1JAKm1AWF8ukalzkrv5BDTEb7jA9Q6NlD/view?usp=sharing";
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);
}

// Función para mostrar la tabla 10
function mostrarTabla10() {
  const enlaces = [
    "https://drive.google.com/file/d/1ZGjRVqU2UKKwWugFXLBsuoXn6O7Ei5O2/view?usp=sharing"
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 10_Sistemas Inteligentes_Grupo 3.pdf";

  const enlace1 = document.createElement("a");
  enlace1.href = enlaces[0];
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

}

function mostrarTabla11CLASE() {
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 11_Sistemas Inteligentes_Grupo 3.pdf";
  const enlace1 = document.createElement("a");
  enlace1.href = "https://drive.google.com/file/d/1Zwcu_NfsO6wyRnJjrK2ebbSJOF0cfs5Q/view?usp=sharing";
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);
}

function mostrarTabla12CLASE() {
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 12_Sistemas Inteligentes_Grupo 3.pdf";
  const enlace1 = document.createElement("a");
  enlace1.href = "https://drive.google.com/file/d/1WL5tiRwnJb8NbQoZjFi6VLsd4_j2Bh7Y/view?usp=sharing";
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);
}

function mostrarTabla13CLASE() {
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 13_Sistemas Inteligentes_Grupo 3.pdf";
  const enlace1 = document.createElement("a");
  enlace1.href = "https://drive.google.com/file/d/1TbHl8e8lpqqVQMg9TdDhab2D9IEUc1gt/view";
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);
}
<<<<<<< HEAD
=======
// Función para mostrar la tabla 14
function mostrarTabla14() {
  const enlaces = [
    "https://drive.google.com/drive/u/0/folders/17zIZjmTJi2sQcZv25z6aKiKJH4IFxUzo"
  ];
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
  celda11.textContent = "Semana 14_Sistemas Inteligentes_Grupo3";
>>>>>>> 1aff542feadafb7f1c7ab3ffb0ffe44f675d3082

function mostrarTabla14CLASE() {
  const tabla = document.getElementById('tablaDinamica');
  // Borrar todas las filas de la tabla
  tabla.innerHTML = '';
  // Crear primera fila
  const fila1 = tabla.insertRow();
  const celda11 = fila1.insertCell();
  const celda12 = fila1.insertCell();
<<<<<<< HEAD
  celda11.textContent = "Semana 14_Sistemas Inteligentes_Grupo 3.pdf";
=======
  celda11.textContent = "Semana 14_Sistemas Inteligentes_Grupo3";
>>>>>>> 1aff542feadafb7f1c7ab3ffb0ffe44f675d3082
  const enlace1 = document.createElement("a");
  enlace1.href = "https://drive.google.com/file/d/1CZNolvSu6lUzT3rnZdHcY7on7IIo-m7A/view";
  enlace1.target = "_blank";
  enlace1.textContent = "Ir al archivo";
  celda12.appendChild(enlace1);

  function mostrarTabla15CLASE() {
    const tabla = document.getElementById('tablaDinamica');
    // Borrar todas las filas de la tabla
    tabla.innerHTML = '';
    // Crear primera fila
    const fila1 = tabla.insertRow();
    const celda11 = fila1.insertCell();
    const celda12 = fila1.insertCell();
    celda11.textContent = "Semana 15_Sistemas Inteligentes_Grupo 3.pdf";
    const enlace1 = document.createElement("a");
    enlace1.href = "https://drive.google.com/file/d/1PqWTtLzdGwHoFRJGzE_ZTZUU4m69GeL_/view";
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
