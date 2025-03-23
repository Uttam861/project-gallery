const works = {
    "task1": { "title": "Task 1", "color": "red" },
    "task2": { "title": "Task 2", "color": "green" },
    "task3": { "title": "Task 3", "color": "blue" }
    };
    function loadWork(task) {
    const displayArea = document.getElementById("displayArea");
    const taskTitle = document.getElementById("taskTitle");
    displayArea.style.backgroundColor = works[task].color;
    taskTitle.textContent = works[task].title;
    }