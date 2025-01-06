//task_1

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    };

    displayInfo = () => {
        console.log(`Название: ${this.title}, Автор: ${this.author}, Страниц: ${this.pages}`);
    }
};

const book = new Book('1984', 'Джордж Оруэлл', 328);
book.displayInfo();

//task_2

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    };

    displayInfo = () => {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}, Оценка: ${this.grade}`);
    }
}

const student = new Student('Makar', 16, '4.7');
student.displayInfo();
const student2 = new Student ('Sergei', 35, '5.0');
student2.displayInfo();