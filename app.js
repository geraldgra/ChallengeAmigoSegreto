// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declarar variables

let nuevoAmigo;
let arrayAmigos= [];
let amigoSorteado;

//Para asignar variable de forma mas comoda a elementos dentro del documento
function asignarTextoElemento(elemento, texto) {
    let elementoHMTL = document.querySelector(elemento);
    elementoHMTL.innerHTML = texto;
    return;
}

//Para limpiar variable del campo amigo cuando se requiera
function limpiarCampo() {
    let valorCampo = document.querySelector('#amigo');
    valorCampo.value = '';
    return;
}

function agregarAmigo() {
    //Obteniendo el dato ingresado en el campo
    nuevoAmigo = document.querySelector('#amigo').value;
    //Agregando ese elemento a la variable de arreglo de amigos
    if (nuevoAmigo === '') {
        alert('Por favor ingresa un nombre ya que no pude estar vacio');
        return;
    }
    arrayAmigos.push(nuevoAmigo);
    //Aqui creamos una lista en el HTML para mostrar los amigos agregados
    //Selecciona el elemento <ul> donde se mostrarán los amigos
    let lista = document.querySelector('#listaAmigos');
    // Crea un nuevo elemento <li>
    let li = document.createElement('li');
    //aqui agregamos el nuevo li creado con el dato recine ingresado
    li.textContent = nuevoAmigo;
    // Agrega el nuevo elemento a la lista
    lista.appendChild(li);

    //Limpiamos el campo de texto para que se pueda ingresar el nuevo amigo.
    limpiarCampo();

    //mostramos en la consola como va el Arreglo de amigos
    console.log(arrayAmigos)
}

function sortearAmigo() {
    let lista = document.getElementById('listaAmigos');
    
    // Ocultar la lista con animación
    lista.classList.add('oculto');
    
    // esperamos a que termine la animación de ocultar
    setTimeout(() => {
        // Verificar que haya amigos en el array
        if (arrayAmigos.length === 0) {
            alert('No hay amigos agregados');
            lista.classList.remove('oculto');
            return;
        }
        
        // Obtener un número aleatorio entre 0 y el tamaño del array
        let indice = Math.floor(Math.random() * arrayAmigos.length);
        
        // Guardar el amigo sorteado
        let amigoSorteado = arrayAmigos[indice];
        
        //mostramos el amigo secreto en el elemento resultado
        document.getElementById('resultado').innerText = `El amigo sorteado es: ${amigoSorteado}`;
        // Mostrar alert con el amigo sorteado
        //alert(`El amigo sorteado es: ${amigoSorteado}`);

        //esconder el boton de sortear
        document.getElementById('botonSortear').style.display = 'none';
        //mostrar el boton de reiniciar
        document.getElementById('botonReiniciar').style.display = 'inline-block';
        
        // Mostrar la lista nuevamente con animación
        lista.classList.remove('oculto');
    }, 300); // Esperar 300ms (tiempo de la animación)
}

function reiniciarJuego() {
    // Limpiar el array de amigos
    arrayAmigos = [];
    
    // Vaciar la lista de amigos en la pantalla
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    // Limpiar el campo de agregar amigo
    document.getElementById('amigo').value = '';

    // Limpiamos el resultado mostrado
    document.getElementById('resultado').innerText = '';
    
    // Si hay un amigo sorteado, limpiar esa variable también
    amigoSorteado = null;
    
    // Mostrar el botón de sortear y ocultar el de reiniciar
    document.getElementById('botonSortear').style.display = 'flex';
    document.getElementById('botonReiniciar').style.display = 'none';
    // Mostrar un mensaje al usuario
    alert('El juego se Reiniciara!');
}