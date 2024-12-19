class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}
class Queue{
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) { 
            this.first = newNode;
            this.last = newNode;
        }
        this.last.next = newNode;
        this.last = newNode;
        return newNode;
    }
    dequeue(value) { 
        const temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp;

    }
}
let queue = new Queue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue);