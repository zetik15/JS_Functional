//task_1

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

//task_2

function createCounter() {
    let count = 0;

    return {
        increment(){
            count++;
            return count;
        },

        decrement(){
            count--;
            return count;
        },

        getValue() {
            return count;
        }
    }
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getValue());

//task_3

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');

function findElementByClass(root, className) {
    if(!root) return null;

    if (root.classList.contains(className)) {
        return root;
    }
    
    for (let i = 0; i < root.children.length; i++) {
        const found = findElementByClass(root.children[i], className);
        if (found) {
            return found;
        }
    }
    return null;
}
console.log(targetElement);