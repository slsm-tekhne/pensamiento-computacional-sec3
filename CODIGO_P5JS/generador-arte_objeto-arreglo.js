// Cada arreglo guarda muchas opciones posibles para construir 
//la justificación de una obra de arte conceptual

let inicios = [
  "Una crítica a",
  "Una reflexión sobre",
  "Una alegoría de",
  "Una reinterpretación de",
  "Una deconstrucción de"
];

let temas = [
  "la sociedad",
  "el consumo",
  "la cultura",
  "la tecnología",
  "la identidad"
];

let lugares = [
  "desde lo cotidiano",
  "desde lo postmoderno",
  "desde lo colectivo",
  "desde lo emocional",
  "desde lo digital"
];

let estilos = [
  "hipersensorial",
  "fragmentado/a",
  "minimalista",
  "experimental",
  "abstracto/a"
];

let finales = [
  "que cuestiona al espectador",
  "que rompe los límites",
  "que resignifica el espacio",
  "que explora la memoria",
  "que transforma lo común"
];


// El objeto "obra" guardará una obra final
// compuesta por un inicio, tema, lugar, estilo y final

let obra = { //el objeto parte vacío

  inicio: "",
  tema: "",
  lugar: "",
  estilo: "",
  final: ""
};


function setup() {

  createCanvas(800, 500);
  textAlign(CENTER, CENTER);

}


function draw() {

  background(240);

  fill(0);

  // titulo
  textSize(30);
  text("🎨 GENERADOR DE ARTE CONCEPTUAL 🎨", width / 2, 70);

  // texto de la obra
  textSize(24);

  //usamos las propiedades del objeto para escribir la obra en la pantalla
  text(obra.inicio, width / 2, 170);
  text(obra.tema, width / 2, 210);
  text(obra.lugar, width / 2, 250);
  text(obra.estilo, width / 2, 290);
  text(obra.final, width / 2, 330);

  // instrucciones
  push();
  textSize(16);
  textStyle(ITALIC);
  text("Haz click para generar una obra", width / 2, 430);
  pop();
}


// cuando hacemos click
function mousePressed() {
  // se corre la función generar obra
  generarObra();
}

// función para generar una nueva obra random
function generarObra() {

  // elige una opcion aleatoria de cada arreglo de componentes del objeto obra

  obra.inicio = random(inicios);
  obra.tema = random(temas);
  obra.lugar = random(lugares);
  obra.estilo = random(estilos);
  obra.final = random(finales);

}
