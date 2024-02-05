const parametros = new URLSearchParams(window.location.search);
const nombreDeContacto = parametros.get('contacto');

document.getElementById('contacto').innerHTML = obteneDetalleContacto(nombreDeContacto);

function obteneDetalleContacto(contacto) {

    switch (contacto) {
        case 'contacto1':
            `<div onclick="contacto1">
                <h5 class="mb-0">Name : Anderson Uriel Sanchez Rogel</h5>
                <p class="mb-0">Correo : asanchez-2019130@kinal.edu.gt</p>
                <p class="mb-0">Telefono : +502 3246-0599</p>
            </div>`
            break;
        case 'contacto2':
            `<div onclick="contacto2">
                <h5 class="mb-0">Name : Elmer Rodrigo Santos García</h5>
                <p class="mb-0">Correo : esantos-2019254@kinal.edu.gt</p>
                <p class="mb-0">Telefono : +502 3246-0599</p>
            </div>`
            break;
        case 'contacto3':
            `<div onclick="contacto3">
                <h5 class="mb-0">Name : Diego Sebastian Siney García</h5>
                <p class="mb-0">Correo : dsiney-2021664@kinal.edu.gt</p>
                <p class="mb-0">Telefono : +502 3246-0599</p>
            </div>`
            break;
        case 'contacto4':
            `<div onclick="contacto4">
                <h5 class="mb-0">Name : Angel Kaled Rodriguez Soc</h5>
                <p class="mb-0">Correo : arodriguez-2019620@kinal.edu.gt</p>
                <p class="mb-0">Telefono : +502 1564-0065</p>
            </div>`
            break;
        case 'contacto5':
            `<div onclick="contacto3">
                <h5 class="mb-0">Name : Junior Marco Tulio Sanchez Melgar</h5>
                <p class="mb-0">Correo : jsanchez-2021387@kinal.edu.gt</p>
                <p class="mb-0">Telefono : +502 3246-0599</p>
            </div>`
            break;
    }

}