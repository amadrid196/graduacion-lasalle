// ============================================================
//  DATOS DE LOS GRADUADOS
//  Solo edita este archivo para agregar o quitar niños.
//
//  Para cada niño necesitas:
//    nombre: "Nombre completo"
//    foto_inicio: "fotos/NOMBRE-inicio.jpg"   ← foto de prekínder
//    foto_fin:    "fotos/NOMBRE-graduacion.jpg" ← foto de graduación
//    mensaje: "Mensaje personalizado (opcional)"
//
//  Las fotos deben estar en la carpeta /fotos/
// ============================================================

const GRADUADOS = [
  {
    nombre: "Emily Marie Madrid Mata",
    foto_inicio: "fotos/inicio/Emily Marie Madrid Mata.jpeg",
    foto_fin: "",
    mensaje: "Emily, tu sonrisa llenó de luz cada día de esta aventura.",
  },
  {
    nombre: "Elias Antonio Murillo Mata",
    foto_inicio: "fotos/inicio/Elias Antonio Murillo Mata.jpeg",
    foto_fin: "",
    mensaje: "Elias, tu alegría dejó huellas bonitas en todo el salón.",
  },
  {
    nombre: "Anaiah Micaela Hernández Licona",
    foto_inicio: "fotos/inicio/Anaiah Micaela Hernández Licona.jpeg",
    foto_fin: "",
    mensaje: "Anaiah, tu ternura hizo especial cada nuevo aprendizaje.",
  },
  {
    nombre: "Andrés Alejandro Herrera Rodriguez",
    foto_inicio: "fotos/inicio/Andrés Alejandro Herrera Rodriguez.jpeg",
    foto_fin: "",
    mensaje: "Andrés, tu curiosidad te llevará a descubrir grandes maravillas.",
  },
  {
    nombre: "Emma Valeria Lagos Sandoval",
    foto_inicio: "fotos/inicio/Emma Valeria Lagos Sandoval.jpeg",
    foto_fin: "",
    mensaje: "Emma Valeria, tus ocurrencias llenaron de alegría cada momento.",
  },
  {
    nombre: "Jade Julissa Mejía",
    foto_inicio: "fotos/inicio/Jade Julissa Mejía.jpeg",
    foto_fin: "",
    mensaje: "Jade, tu valentía creció con cada pequeño paso.",
  },
  {
    nombre: "Julia Yolanda Yanes Castillo",
    foto_inicio: "fotos/inicio/Julia Yolanda Yanes Castillo.jpeg",
    foto_fin: "",
    mensaje: "Julia, llevas en el corazón todo lo necesario para seguir brillando.",
  },
  {
    nombre: "Khalessy Mancia Rivera",
    foto_inicio: "fotos/inicio/Khalessy Mancia Rivera.jpeg",
    foto_fin: "",
    mensaje: "Khalessy, tus sueños tienen un camino lleno de aventuras.",
  },
  {
    nombre: "Lucrecia Marie Torres",
    foto_inicio: "fotos/inicio/Lucrecia Marie Torres.jpeg",
    foto_fin: "",
    mensaje: "Lucrecia, tu alegría convirtió los días comunes en recuerdos especiales.",
  },
  {
    nombre: "Mario Gabriel Fuentes Banegas",
    foto_inicio: "fotos/inicio/Mario Gabriel Fuentes Banegas.jpeg",
    foto_fin: "",
    mensaje: "Mario, tu entusiasmo demuestra que puedes llegar muy lejos.",
  },
  {
    nombre: "Pedro Antonio Villatoro",
    foto_inicio: "fotos/inicio/Pedro Antonio Villatoro.jpeg",
    foto_fin: "",
    mensaje: "Pedro, cada logro tuyo merece una celebración enorme.",
  },
  {
    nombre: "Richard Guandique Ictech",
    foto_inicio: "fotos/inicio/Richard Guandique Ictech.jpeg",
    foto_fin: "",
    mensaje: "Richard, tu espíritu aventurero te abrirá puertas maravillosas.",
  },
  {
    nombre: "Royer Josue Mejia",
    foto_inicio: "fotos/inicio/Royer Josue Mejia.jpeg",
    foto_fin: "",
    mensaje: "Royer, tu energía hizo más felices los días de tus compañeros.",
  },
  {
    nombre: "Sofía Desireé Osorio",
    foto_inicio: "fotos/inicio/Sofía Desireé Osorio.jpeg",
    foto_fin: "",
    mensaje: "Sofía Desireé, tu dulzura permanecerá en nuestros mejores recuerdos.",
  },
  {
    nombre: "Williams Alexander Enamorado Caballero",
    foto_inicio: "fotos/inicio/Williams Alexander Enamorado Caballero.jpeg",
    foto_fin: "",
    mensaje: "Williams, tu determinación te ayudará a alcanzar cada sueño.",
  },
  {
    nombre: "Alaia Martínez",
    foto_inicio: "fotos/inicio/Alaia Martínez.jpeg",
    foto_fin: "",
    mensaje: "Alaia, tu manera de aprender llenó de esperanza cada jornada.",
  },
  {
    nombre: "Amy Inestroza",
    foto_inicio: "fotos/inicio/Amy Inestroza.jpeg",
    foto_fin: "",
    mensaje: "Amy, tu entusiasmo hizo florecer la alegría a tu alrededor.",
  },
  {
    nombre: "Athenas Diaz",
    foto_inicio: "fotos/inicio/Athenas Diaz.jpeg",
    foto_fin: "",
    mensaje: "Athenas, nunca pierdas esa curiosidad que te hace tan especial.",
  },
  {
    nombre: "Didier Noa Rami Barzayo",
    foto_inicio: "fotos/inicio/Didier Noa Rami Barzayo.jpeg",
    foto_fin: "",
    mensaje: "Didier, tu imaginación convirtió cada actividad en una aventura.",
  },
  {
    nombre: "Emma Marian Vanegas Pineda",
    foto_inicio: "fotos/inicio/Emma Marian Vanegas Pineda.jpeg",
    foto_fin: "",
    mensaje: "Emma Marian, tu sonrisa acompañará siempre este hermoso recuerdo.",
  },
  {
    nombre: "Eunice María Muñoz",
    foto_inicio: "fotos/inicio/Eunice María Muñoz Preparatoria.jpeg",
    foto_fin: "",
    mensaje: "Eunice, cada cosa que aprendiste será una semilla para tu futuro.",
  },
  {
    nombre: "Evan David Lara Osorio",
    foto_inicio: "fotos/inicio/Evan David Lara Osorio.jpeg",
    foto_fin: "",
    mensaje: "Evan, tu nobleza y entusiasmo te llevarán hacia nuevos horizontes.",
  },
  {
    nombre: "Gael Castillo",
    foto_inicio: "fotos/inicio/Gael Castillo.jpeg",
    foto_fin: "",
    mensaje: "Gael, tu esfuerzo constante mostró todo lo que eres capaz de lograr.",
  },
  {
    nombre: "Jimena María Carballo",
    foto_inicio: "fotos/inicio/Jimena María Carballo.jpeg",
    foto_fin: "",
    mensaje: "Jimena, tu ternura llenó de cariño cada rincón del aula.",
  },
  {
    nombre: "Lauren Sophia Carballo García",
    foto_inicio: "fotos/inicio/Lauren Sophia  Carballo García Prepa.jpeg",
    foto_fin: "",
    mensaje: "Lauren Sophia, tu confianza te acompañará en cada nuevo desafío.",
  },
  {
    nombre: "Mateo Pineda",
    foto_inicio: "fotos/inicio/Mateo Pineda.jpeg",
    foto_fin: "",
    mensaje: "Mateo, tu imaginación siempre encontró caminos para explorar.",
  },
  {
    nombre: "Mía Isabella Deras",
    foto_inicio: "fotos/inicio/Mía Isabella Deras Enamorado.jpeg",
    foto_fin: "",
    mensaje: "Mía Isabella, tu dulzura hizo inolvidable este año compartido.",
  },
  {
    nombre: "Rebeca Icaza Rodriguez",
    foto_inicio: "fotos/inicio/Rebeca Icaza Rodriguez.jpeg",
    foto_fin: "",
    mensaje: "Rebeca, cada nuevo paso tuyo anuncia una aventura maravillosa.",
  },
  {
    nombre: "Rocio Marianne Brizo Lara",
    foto_inicio: "fotos/inicio/Rocio Marianne Brizo Lara.jpeg",
    foto_fin: "",
    mensaje: "Rocio Marianne, tu energía nos enseñó que todo puede hacerse con alegría.",
  },
  {
    nombre: "Sara Valentina Dubon",
    foto_inicio: "fotos/inicio/Sara Valentina Dubon.jpeg",
    foto_fin: "",
    mensaje: "Sara Valentina, tu sonrisa será un recuerdo querido para todos.",
  },
  {
    nombre: "Sofía Valentina Palacios Giron",
    foto_inicio: "fotos/inicio/Sofía Valentina Palacios Giron.jpeg",
    foto_fin: "",
    mensaje: "Sofía Valentina, qué bonito fue verte crecer, aprender y soñar.",
  },
  {
    nombre: "Victoria Jimena Paz",
    foto_inicio: "fotos/inicio/Victoria Jimena Paz.jpeg",
    foto_fin: "",
    mensaje: "Victoria, tu valentía será la brújula de todos tus nuevos caminos.",
  },
  {
    nombre: "Zoe Nathalia Cáceres",
    foto_inicio: "fotos/inicio/Zoe Nathalia Cáceres.jpeg",
    foto_fin: "",
    mensaje: "Zoe, el mundo espera con ilusión todo lo bueno que llevas dentro.",
  },
  {
    nombre: "Adriel Matias Q Carcamo",
    foto_inicio: "fotos/inicio/Adriel Matias Q Carcamo.jpeg",
    foto_fin: "",
    mensaje: "Adriel, tu espíritu soñador te prepara para grandes aventuras.",
  },
  {
    nombre: "Anamaria Turcios Leiva",
    foto_inicio: "fotos/inicio/Anamaria Turcios Leiva.jpeg",
    foto_fin: "",
    mensaje: "Anamaria, tu sonrisa hizo más brillantes nuestros días juntos.",
  },
  {
    nombre: "Bella Valentina Caraccioli Tróchez",
    foto_inicio: "fotos/inicio/Bella Valentina Caraccioli Tróchez.jpeg",
    foto_fin: "",
    mensaje: "Bella Valentina, tu alegría llenó de color cada experiencia.",
  },
  {
    nombre: "Daniel Redondo",
    foto_inicio: "fotos/inicio/Daniel Redondo.jpeg",
    foto_fin: "",
    mensaje: "Daniel, tienes todo un mundo de posibilidades esperando por ti.",
  },
  {
    nombre: "David Boquin",
    foto_inicio: "fotos/inicio/David Boquin.jpeg",
    foto_fin: "",
    mensaje: "David, tus avances nos recordaron que cada paso cuenta.",
  },
  {
    nombre: "Freddy Santhiago Rodríguez Calix",
    foto_inicio: "fotos/inicio/Freddy Santhiago Rodríguez Calix.jpeg",
    foto_fin: "",
    mensaje: "Freddy Santhiago, tu espíritu explorador hizo único cada día.",
  },
  {
    nombre: "Henry Daniel Zelaya Medina",
    foto_inicio: "fotos/inicio/Henry Daniel Zelaya Medina.jpeg",
    foto_fin: "",
    mensaje: "Henry Daniel, tu esfuerzo y tu alegría dejaron una hermosa marca.",
  },
  {
    nombre: "Henry Matías Zelaya Medina",
    foto_inicio: "fotos/inicio/Henry Matías Zelaya Medina.jpeg",
    foto_fin: "",
    mensaje: "Henry Matías, conserva siempre esa curiosidad que te impulsa a aprender.",
  },
  {
    nombre: "Jose Angel Fajardo Martinez",
    foto_inicio: "fotos/inicio/Jose Angel Fajardo Martinez.jpeg",
    foto_fin: "",
    mensaje: "Jose Angel, cada nuevo paso te acerca a sueños extraordinarios.",
  },
  {
    nombre: "Leah Camille Rodriguez Coto",
    foto_inicio: "fotos/inicio/Leah Camille Rodriguez Coto.jpg",
    foto_fin: "",
    mensaje: "Leah Camille, tu ternura convirtió cada jornada en un momento especial.",
  },
  {
    nombre: "Micaela Fernández",
    foto_inicio: "fotos/inicio/Micaela Fernández.jpeg",
    foto_fin: "",
    mensaje: "Micaela, tu dulzura seguirá acompañando todos tus logros.",
  },
  {
    nombre: "Miguel Andrés Lagos",
    foto_inicio: "fotos/inicio/Miguel Andrés Lagos.jpeg",
    foto_fin: "",
    mensaje: "Miguel Andrés, tu valentía y entusiasmo te llevarán muy lejos.",
  },
  {
    nombre: "Santiago Dubón",
    foto_inicio: "fotos/inicio/Santiago Dubón.jpeg",
    foto_fin: "",
    mensaje: "Santiago, qué alegría verte crecer con tanta ilusión y confianza.",
  },
];

// Mensaje principal que aparece en la portada
const MENSAJE_PRINCIPAL = {
  titulo: "Pequeños Grandes Pasos",
  subtitulo: "Promoción Prebásica 2024 – 2026",
  colegio: "Instituto Experimental La Salle",
  mensaje:
    "Hoy no solo celebramos una graduación — celebramos el valor de cada primero: el primer amigo, la primera letra, el primer logro. Estos niños llegaron como semillas llenas de posibilidad, y hoy florecen ante nosotros listos para el mundo que les espera.",
};
