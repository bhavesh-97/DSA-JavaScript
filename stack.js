class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}
class Stack{
    constructor(value) { 
        const newNode = new Node(value);
        this.first = newNode;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length == 0) { 
            return undefined;
        }
        newNode.next = this.first;
        this.first = newNode; 
        this.length++;
        return newNode;
    }
    pop() {
        const temp = this.first;
        this.first = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

let myStack = new Stack(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
// console.log(myStack.pop());
console.log(myStack);