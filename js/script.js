/*const listaUsuarios = document.getElementById('listaUsuarios')

const generarEdadAleatoria = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function obtenerUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (!response.ok) {
            throw new Error('La solicitud no ha sido exitosa')
        }
        return response.json()
    })
    .then((data) => {
        
        console.log(data.)

        
    })
}


obtenerUsuarios()
*/

// Selecciona el contenedor en el DOM
const listaUsuarios = document.getElementById('listaUsuarios');

// Función para generar un número aleatorio en un rango
const generarEdadAleatoria = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Función para obtener usuarios de la API
async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!respuesta.ok) throw new Error('Error al obtener los datos');
        const usuarios = await respuesta.json();

        // Procesar usuarios
        const usuariosConDetalles = usuarios.map((usuario, index) => {
            const edad = generarEdadAleatoria(18, 65); // Edad aleatoria
            const img = `./assets/img/${index + 1}.jpeg`; // Asignar imagen por ID
            const { street, suite, city } = usuario.address; // Destructuring de address
            const address = `${street}, ${suite}, ${city}`;

            // Retornar el nuevo usuario con los datos adicionales
            return {
                ...usuario,
                edad,
                img,
                address,
            };
        });

        // Mostrar usuarios en el DOM
        mostrarUsuarios(usuariosConDetalles);
    } catch (error) {
        console.error('Hubo un problema al cargar los usuarios:', error);
    }
}

// Función para mostrar los usuarios en el DOM
function mostrarUsuarios(usuarios) {
    usuarios.forEach(({ name, edad, username, img, phone, email, company, address }) => {
        // Crear el elemento de la lista
        const li = document.createElement('li');

        // Crear el contenido HTML del usuario
        li.innerHTML = `
            <div class="user-info">
                <img src="${img}" alt="Imagen de ${name}">
                <div class="datos">
                <p><stron>Nombre:<strong> ${name}<p> 
                <p><strong>Edad:<strong> ${edad}<p>
                <p><strong>Username:</strong> ${username}</p>
                <p><strong>Teléfono:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                </div>
                <p><strong>Compañía:</strong> ${company.name}</p>
                <p><strong>Dirección:</strong> ${address}</p>
            </div>
        `;

        // Agregar el elemento a la lista
        listaUsuarios.appendChild(li);
    });
}

// Llamar a la función para cargar los usuarios
obtenerUsuarios();






    