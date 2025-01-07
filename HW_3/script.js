//task_1

class Employee {
    constructor (name) {
        this.name = name;
    }

    displayinfo() {
        console.log(`Имя: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super (name);
        this.department = department;
    }

    displayinfo() {
        console.log(`Имя: ${this.name}, Департамент: ${this.department}`);
    }
}

const employee = new Employee('Макар');
const manager = new Manager('Макар', 'LSPD');

employee.displayinfo();
manager.displayinfo();

//task_2

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor (orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        return this.products.reduce((total, elem) => total + elem.price, 0);
    }
}

const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice());