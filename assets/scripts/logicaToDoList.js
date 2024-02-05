function addTask() {
    var taskInput = document.getElementById("taskInput");
    var prioritySelect = document.getElementById("prioritySelect");
    var taskList = document.getElementById("taskList");

    var taskText = taskInput.value;
    var priority = prioritySelect.value;

    if (taskText === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    var listItem = document.createElement("li");
    listItem.innerHTML = '<strong>' + priority + ':</strong> ' + taskText +
        ' <span class="editBtn" onclick="editTask(this)">Editar</span>' +
        ' <span class="deleteBtn" onclick="deleteTask(this)">Eliminar</span>';
    taskList.appendChild(listItem);

    // Limpiar el campo de entrada
    taskInput.value = "";
}

function editTask(element) {
    var newText = prompt("Editar tarea:", element.parentNode.innerText.trim());
    if (newText !== null) {
        element.parentNode.innerHTML = newText +
            ' <span class="editBtn btn btn-warning" onclick="editTask(this)">Editar</span>' +
            ' <span class="deleteBtn btn btn-danger" onclick="deleteTask(this)">Eliminar</span>';
    }
}

function deleteTask(element) {
    if (confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
        element.parentNode.remove();
    }
}

function handleListClick(event) {
    var targetElement = event.target;
    if (targetElement.classList.contains("editBtn")) {
        editTask(targetElement);
    } else if (targetElement.classList.contains("deleteBtn")) {
        deleteTask(targetElement);
    }

}