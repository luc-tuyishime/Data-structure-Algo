function LinkedList() {
    this.head = null,
        this.tail = null
}

function Node(value, next, prev) {
    this.value = value,
        this.next = next,
        this.prev = prev
}

// Add node to the head of linkedList
LinkedList.prototype.addToHead = function (value) {
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode
}

var ll = new LinkedList();

// Add node to the tail of linkedlist
LinkedList.prototype.addToTail = function (value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode
    else this.head = newNode;
    this.tail = newNode
}

// Remove the head node to retrieve the data
LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    var val = this.head.value
    this.head = this.head.next
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val
}

// Remove the tail to retrieve the data
LinkedList.prototype.removeTail = function () {
    if (!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.tail = null;
    return val
}

LinkedList.prototype.search = function (searchValue) {
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === searchValue) return currentNode.value
        console.log(currentNode.next);
        currentNode = currentNode.next // allow us to iterate in every node in our list
    }
    return null;
}

LinkedList.prototype.indexOf = function (value) {
    var indexes = [];
    var currentIndex = 0;
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === value) {
            indexes.push(currentIndex);
        }
        currentNode = currentNode.next;
        currentIndex++
    }
    return indexes;
}

var mySS = new LinkedList();

mySS.addToTail(1);
mySS.addToTail(4);
mySS.addToTail(5);
mySS.addToTail(4);
mySS.addToTail(9);
mySS.addToTail(4);

console.log('We programm ==>>', mySS.indexOf(4));