// Single LinkList
// Node
// LinkList is  collection of Node (Data, Reference)
class Node {
    constructor(data) {
        this.head = data;
        this.reference = null;
    }
}
class LinkList {
    constructor(data) {
        this.head = new Node(data);
        this.tail = this.head;
        this.length = 1;
    }
    push(value){
        let newNode = new Node(value);
        this.tail.reference = newNode;
        this.tail = newNode;
        this.length++;
    }
    pop() {
        if (!this.head) {
          return undefined;    
        }
        let temp = this.head;
        let prev = this.head;
        while (temp.reference) {
            prev = temp;
            temp = prev.reference;
        }
        this.tail = prev;
        this.tail.reference = null;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.reference = this.head;
        this.head = newNode;

        this.length++;
        return this;
    }
    shift() {
        if (!this.head) {
            return undefined;    
        }
        let temp = this.head;
        this.head = this.head.reference;
        temp.references = null;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    GetFirst() {
        return this.head;
    }
    GetLast() {
        let temp = this.head;
        while (temp) {
            if (!temp.references) {
                return temp;
            }
        }
        temp = temp.references;
    }
    Get(index) {
        let counter = 0;
        let temp = this.head;
        while (temp) {
            if (counter === index) {
                return temp;
            }
        
            counter++;
            temp = temp.reference;
        }
        return null;
    }
    
    Set(index, value) {
        let temp = this.Get(index);
        if(temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    Insert(index, value) {
        if (index === 0) {
            return this.unshift(value);
        }
        if (index === this.length) {
            return this.push(value);
        }
        let newNode = new Node(value);
        const temp = this.Get(index - 1);
        
        newNode.reference = temp.reference;
        temp.reference = newNode;
        this.length++;
        return true;
    }
    size() {
        let counter = 0;
        let temp = this.head;
        while (temp){
            counter++;
            temp = temp.reference;
        }
        return counter;
    }
    clear() {
        this.head = null;
    }
}

const Mylist = new LinkList(1);
Mylist.push(10);
Mylist.push(50);
Mylist.push(30);
// Mylist.unshift(1111);
// Mylist.shift();
// Mylist.pop();
// console.log(Mylist.GetFirst());
// console.log(Mylist.GetLast());
// console.log(Mylist.Get(2));
// console.log(Mylist.Set(0,200));
console.log(Mylist.Insert(1,500));
console.log(Mylist.size());
console.log(Mylist.clear());