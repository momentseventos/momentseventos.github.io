// script.js

function cambiarFormulario() {
    const tipoEvento = document.getElementById('tipo-evento').value;
    const descripcionEvento = document.getElementById('descripcion-evento');

    const tituloEvento = document.getElementById('evento-seleccionado');
    const imagenEvento = document.getElementById('imagen-evento'); // Imagen del evento

    // Limpiar contenido anterior
    descripcionEvento.innerHTML = '';
  
    // Cambiar contenido según el tipo de evento
    if (tipoEvento === 'casamiento') {
      tituloEvento.textContent ='Casamiento';
      descripcionEvento.textContent = ` Si hablamos de un momento único en la vida, uno de ellos es cuando
      dos personas deciden ser una. Cuando ambos deciden sellar su amor, pasando así al siguiente nivel y comenzar
       a formar una familia como el gran equipo que son. No hay nada más hermoso que poder hacer realidad este sueño que hoy 
      tienen en su corazón y mente. Por ello te invito a que juntos llevemos a cabo este deseo de vivir un evento tan especial.`;
      imagenEvento.src = '/img/bodaevento.jpg' // Cambia por la ruta de tu imagen
      imagenEvento.alt = 'Imagen de una casamiento';

    } else if (tipoEvento === 'cumpleanos') {
      descripcionEvento.textContent =`Si hablamos de un día especial podemos resaltar el momento en cual hemos nacido y 
      que año tras años tenemos el agrado de poder festejarlo junto a nuestros seres queridos.
      Si se trata de este tipo de festejo estamos preparados para brindarte diferentes alternativas y que hagas de
      tu día un momento único.
      Nada más lindo que la dulce espera de ese niño por nacer y que como familia toman la decisión de festejarlo, un baby shower
      pero con un estilo netamente diferente hará de ese día un momento hermoso.
      Cuando llegan los 15 años es el momento de brillar para esa princesa que hoy le toca sobresalir, déjanos a nosotros
      la planificación y armado; y hagamos vivir a esa jovencita su día de una forma especial.`;
      tituloEvento.textContent ='Cumpleaños';
      imagenEvento.src = '/img/quinceevento.jpg'; // Cambia por la ruta de tu imagen
      imagenEvento.alt = 'Imagen de una cumpleaños';

    } else if (tipoEvento === 'show-musical') {
      descripcionEvento.textContent =`El arte siempre será la expresion de aquellos que con sus melodías y su música
      buscan llegar a otros para poder transmitirles un momento de disfrute pleno.
      Con sus diferentes géneros entendemos que el abanico es bastante amplio y es lo mejor de esta sección.
      Shows, espectáculos, presentaciones, audiciones y más, hagamos resonar estos eventos y que sean una realidad`;
      imagenEvento.src = '/img/musicalevento.jpg'; // Cambia por la ruta de tu imagen
      tituloEvento.textContent ='Show Musical';

    } else if (tipoEvento === 'feria') {
      descripcionEvento.textContent =`Si hablamos de diversidad uno de los eventos que hoy por hoy son un auge en diferentes
      barrios, localidades y ciudades son las ferias.
      Ya sean de tipo gastronómicas, informáticas, de exposición, educativas, de ropa, etc. Sea cuál sea su tipo
      te ofrecemos nuestra experiencia para llevar a cabo este tipo evento.`;
      tituloEvento.textContent ='Feria';
      imagenEvento.src = '/img/feriaevento.jpg'; // Cambia por la ruta de tu imagen
      imagenEvento.alt = 'Imagen de una feria';

    } else if (tipoEvento === 'protocolar') {
      descripcionEvento.textContent =`Este tipo de eventos son multifacéticos, aquí podemos ver los congresos, conferencias, 
      cenas ejecutivas y más. Cada una de ellas resaltan por sus detalles y su forma de ejecutarse. Te ofrecemos toda la
      experiencia para hacer que estos momentos puedan cumplirse y sobrepasar las expectativas de los invitados.`;
      tituloEvento.textContent ='Protocolar y ceremonial';
      imagenEvento.src = '/img/protocolarevento.jpg'; // Cambia por la ruta de tu imagen
      imagenEvento.alt = 'Imagen de evento protocolar y ceremonial';

    } else if (tipoEvento === 'aniversario') {
      descripcionEvento.textContent =`Siempre que exista la oportunidad de poder festejar, estará la excusa perfecta 
      para hacer que tú evento sea lo que esperabas.
      Un día se vuelve especial cuando un aniversario se tiene que festejar. Es por ello que contamos con
      la capacidad para ayudarte a vivir tu momento de felicidad.`;
      tituloEvento.textContent ='Aniversario';
      imagenEvento.src = '/img/aniversarioevento2.jpg'; // Cambia por la ruta de tu imagen
      imagenEvento.alt = 'Imagen de una aniversario';
    }
  }
  


  // Obtener el parámetro de la URL
const params = new URLSearchParams(window.location.search);
const eventoSeleccionado = params.get('evento');

// Seleccionar el dropdown y establecer la opción correcta
if (eventoSeleccionado) {
    const tipoEventoDropdown = document.getElementById('tipo-evento');
    tipoEventoDropdown.value = eventoSeleccionado;

    // Llamar a la función para actualizar el contenido automáticamente
    cambiarFormulario();
}
