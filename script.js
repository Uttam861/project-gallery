// JSON mapping of tasks
const tasks = [
    { name: "TASK 1", path: "project_directory/task1/task1.html" },
    { name: "TASK 2", path: "project_directory/task2/task2.html" },
    { name: "TASK 3", path: "project_directory/task3/task3.html" },
    { name: "TASK 4", path: "project_directory/task4/task4.html" },
    { name: "TASK 5", path: "project_directory/task5/task5.html" },
    { name: "TASK 6", path: "project_directory/task6/task6.html" },
    { name: "TASK 7", path: "project_directory/task7/task7.html" },
    { name: "TASK 8", path: "project_directory/task8/task8.html" },
    { name: "TASK 9", path: "project_directory/task9/task9.html" },
    { name: "TASK 10", path: "project_directory/task10/task10.html" },
    { name: "TASK 11", path: "project_directory/task11/task11.html" },
    { name: "TASK 12", path: "project_directory/task12/task12.html" },
    { name: "TASK 13", path: "project_directory/task13/task13.html" },
    { name: "TASK 14", path: "project_directory/task14/task14.html" },
    { name: "TASK 15", path: "project_directory/task15/task15.html" },
    { name: "TASK 16", path: "project_directory/task16/task16.html" }
  ];
  
  // Dynamically generate nav buttons
  const nav = document.getElementById('taskNav');
  const viewer = document.getElementById('taskViewer');
  
  tasks.forEach(task => {
    const button = document.createElement('button');
    button.textContent = task.name;
    button.addEventListener('click', () => {
      viewer.src = task.path;
    });
    nav.appendChild(button);
  });
  