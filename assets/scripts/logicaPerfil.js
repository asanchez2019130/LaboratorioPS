document.getElementById('editarPerfil').addEventListener('click', editarPerfil)

function editarPerfil() {


    var nuevoApodo = prompt('Ingrese el nuevo apodo de usuario: ');
    if (nuevoApodo !== null) {
        document.getElementById('apodo').textContent = nuevoApodo;
    }


}