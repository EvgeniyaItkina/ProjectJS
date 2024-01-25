import { Task } from "../script/classTasks.js";

document.getElementById("addTask").addEventListener("click", addTask)

function addTask(event) {
    event.preventDefault();
    const task = document.getElementById("task");
    const category = document.getElementById("category");
    const details = document.getElementById("details");
    const date = document.getElementById("date");
    const time = document.getElementById("time");

    const newTask = new Task(task.value, category.value, details.value, date.value, time.value);

    const tableBody = document.querySelector(".users-table tbody");
    tableBody.appendChild(newTask.createTaskElement());

    // Сохранение задачи в localStorage
    saveTask(newTask);

    // Очистка полей ввода
    task.value = "";
    category.value = "home";
    details.value = "";
    date.value = "";
    time.value = "";
}

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


document.getElementById("deleteAll").addEventListener("click", () => {
    localStorage.clear();
    document.getElementById("task").value = "";
    document.getElementById("category").value = "";
    document.getElementById("details").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    const tableBody = document.querySelector(".users-table tbody");
    tableBody.innerHTML = "";

})

//+ לסדר את המשימה בצורה נכונה
//בלחיצה על מחיקה - הודעה על מחיכה כן/לא
//
//בלחיצה על כפתור סיום יש פרטי שעת סיום משימה
