export class Task {
    task;
    category;
    details;
    date;
    time

    constructor(task, category, details, date, time) {
        this.task = task;
        this.category = category;
        this.details = details;
        this.date = date;
        this.time = time;
    }

    createTaskElement() {
        // Создание строки таблицы
        const row = document.createElement("tr");

        // Создание и заполнение ячеек таблицы для каждого атрибута задачи
        row.appendChild(this.createCell(this.task));
        row.appendChild(this.createCell(this.category));
        row.appendChild(this.createCell(this.details));
        row.appendChild(this.createCell(this.date));
        row.appendChild(this.createCell(this.time));

        // Добавление ячеек для кнопок
        const btnCell = document.createElement("td");

        //add buttons
        const btn_start = this.createButton('Start', 'btn_start');
        const btn_finish = this.createButton('Finish', 'btn_finish');
        const btn_change = this.createButton('Change', 'btn_change');
        const btn_delete = this.createButton('Delete', 'btn_delete');

        // Добавление кнопок в ячейку
        btnCell.appendChild(btn_start);
        btnCell.appendChild(btn_finish);
        btnCell.appendChild(btn_change);
        btnCell.appendChild(btn_delete);

        row.appendChild(btnCell);

        return row;
    }

    // CALLBACK
    createCell(text) {
        const cell = document.createElement("td");
        cell.textContent = text;
        return cell;
    }

    // CALLBACK
    createButton(text, className) {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = `btn ${className}`;
        return button;
    }
    startTask() { }
    finishTask() { }
    change() { }

    deleteElement() {

    }

}