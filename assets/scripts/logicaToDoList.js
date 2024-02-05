function addTask() {
    var taskInput = document.getElementById('taskInput');
    var prioritySelect = document.getElementById('prioritySelect');
    var takList = document.getElementById('taskList');

    var taskText = taskInput.value;
    var priority = prioritySelect.value;

    if(taskText === ""){
        alert('Por favor, ingresa una tarea.');
        return;
    }

    var listItem = document.createElement("li");
    listItem.innerHTML = '<strong>' + priority + ':</strong>' + taskText;
    takList.appendChild(listItem);

    taskInput.value = "";

}