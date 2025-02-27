let notes = [];

let taskElement = document.getElementById('list-task');

function renderTask() {
    taskElement.innerHTML = "";
    notes.forEach((note, index) => {
        const newElement = `
            <div class = "note">
                <h3>${note.title}</h3>
                <p class = "desc-task">${note.description}<p>
                <p class = "Deadline-task">Deadline: ${note.deadline}</p>
                <button onclick="deleteTask(${index})">Hapus</button>
            </div>
        `
        taskElement.innerHTML += newElement;
    })
}

function addTask() {
    const newTitle = document.getElementById('nama-tugas').value;
    const newDescription = document.getElementById('deskripsi-tugas').value;
    const newDeadline = document.getElementById('deadline-tugas').value;
    if (newTitle && newDescription && newDeadline && newTitle.length > 1 && newDescription.length > 1 && newDeadline != null) {
        const newData = {
            title: newTitle,
            description: newDescription,
            deadline: newDeadline
        };
        notes.push(newData);
        renderTask();
    }
}

function deleteTask(index) {
    notes.splice(index, 1);
    renderTask();
}

renderTask();