// Class
// ---------------

class Task {
    constructor(title = Task.getDefaultTitle(), isCompleted = false) {
        this.title = title,
            //название свойства не должно совпадать с названием метода
            this._isCompleted = isCompleted,
            Task.counter += 1
    }

    static getDefaultTitle() {
        return 'Title text';
    }

    completed() {
        this._isCompleted = true;
    }

    get isCompleted() {
        return this._isCompleted === true ? 'task is completed' : 'task is not completed'
    }
}
//статическое свойство
Task.counter = 0;

let task = new Task('Learn ES6', false);

console.log(task.isCompleted, task._isCompleted);