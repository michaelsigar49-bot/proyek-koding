const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Silakan masukkan tugas!');
        return;
    }

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    // Menandai tugas selesai
    span.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // Tombol hapus
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.classList.add('delete');

    deleteButton.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}

// Bisa menekan Enter untuk menambah tugas
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
