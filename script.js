document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = input.value.trim();
        if (task) {
            addTodo(task);
            input.value = '';
        }
    });

    function addTodo(task, completed = false) {
        const li = document.createElement('li');
        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = completed;
        li.appendChild(checkbox);

        // Task text span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = task;
        taskSpan.className = 'task-text' + (completed ? ' completed' : '');
        li.appendChild(taskSpan);

        // Checkbox toggle
        checkbox.addEventListener('change', function() {
            taskSpan.classList.toggle('completed', checkbox.checked);
            if (checkbox.checked) {
                taskSpan.style.color = '#aaa';
                taskSpan.style.textDecoration = 'line-through';
            } else {
                taskSpan.style.color = '';
                taskSpan.style.textDecoration = '';
            }
            updateFooter();
        });

        // Rename icon button (Material Icon: edit)
        const renameBtn = document.createElement('button');
        renameBtn.innerHTML = '<span class="material-icons" style="font-size:18px;vertical-align:middle;">edit</span>';
        renameBtn.className = 'icon-btn rename-btn';
        renameBtn.title = 'Rename';
        renameBtn.onclick = function() {
            const inputEdit = document.createElement('input');
            inputEdit.type = 'text';
            inputEdit.value = taskSpan.textContent;
            inputEdit.className = 'task-edit-input';
            inputEdit.style.flex = '1';
            li.replaceChild(inputEdit, taskSpan);
            inputEdit.focus();
            function finishEdit() {
                const newValue = inputEdit.value.trim();
                if (newValue) {
                    taskSpan.textContent = newValue;
                }
                li.replaceChild(taskSpan, inputEdit);
            }
            inputEdit.addEventListener('blur', finishEdit);
            inputEdit.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    inputEdit.blur();
                } else if (e.key === 'Escape') {
                    li.replaceChild(taskSpan, inputEdit);
                }
            });
        };
        li.appendChild(renameBtn);

        // Delete icon button (Material Icon: delete)
        const delBtn = document.createElement('button');
        delBtn.innerHTML = '<span class="material-icons" style="font-size:18px;vertical-align:middle;">close</span>';
        delBtn.className = 'icon-btn delete-btn';
        delBtn.title = 'Delete';
        delBtn.onclick = function() {
            li.classList.add('removing');
            setTimeout(() => {
                li.remove();
                updateFooter();
            }, 300);
        };
        li.appendChild(delBtn);

        list.appendChild(li);
        updateFooter();
    }

    function updateFooter() {
        const all = Array.from(document.querySelectorAll('#todo-list li'));
        const remaining = all.filter(li => !li.querySelector('.task-checkbox').checked).length;
        document.querySelector('.remaining').textContent = `Your remaining todos : ${remaining}`;
    }

    // Date display at the top
    function formatDate(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        // Suffix for day
        const getSuffix = n => {
            if (n > 3 && n < 21) return 'th';
            switch (n % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };
        return `${dayName} <b>${day}${getSuffix(day)}</b>, <span class="date-month">${month}</span>`;
    }

    const dateDisplay = document.getElementById('date-display');
    if (dateDisplay) {
        const today = new Date();
        dateDisplay.innerHTML = formatDate(today);
    }

    // Load tasks from localStorage
    function loadTasks() {
        const data = localStorage.getItem('todo-tasks');
        if (!data) return;
        try {
            const tasks = JSON.parse(data);
            tasks.forEach(t => addTodo(t.text, t.completed));
        } catch {}
    }

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = Array.from(document.querySelectorAll('#todo-list li')).map(li => {
            return {
                text: li.querySelector('.task-text').textContent,
                completed: li.querySelector('.task-checkbox').checked
            };
        });
        localStorage.setItem('todo-tasks', JSON.stringify(tasks));
    }

    // Patch addTodo to call saveTasks
    const origAddTodo = addTodo;
    addTodo = function(task, completed = false) {
        origAddTodo(task, completed);
        saveTasks();
    };

    // Patch delete and edit to call saveTasks
    // (delete is already handled by addTodo override)
    // Edit: update saveTasks after editing
    document.addEventListener('blur', function(e) {
        if (e.target.classList && e.target.classList.contains('task-edit-input')) {
            setTimeout(saveTasks, 10);
        }
    }, true);

    // Save on checkbox change
    document.addEventListener('change', function(e) {
        if (e.target.classList && e.target.classList.contains('task-checkbox')) {
            saveTasks();
        }
    });

    // Save on delete (after animation)
    document.addEventListener('click', function(e) {
        if (e.target.closest && e.target.closest('.delete-btn')) {
            setTimeout(saveTasks, 350);
        }
    });

    // Load tasks on page load
    loadTasks();
});


