const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var newNode = new Node(data);
        if (this.length == 0) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head != null)
            return this._head.data;
        else
            return null;
    }

    tail() {
        if (this._tail != null)
            return this._tail.data;
        else
            return null;
    }

    at(index) {
        var counter = 0;
        var currentNode = this._head;
        while(counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        var counter = 0;
        var currentNode = this._head;
        while(currentNode) {
            if (counter == index) {
                currentNode.data = data;
            }
            currentNode = currentNode.next;
            counter++;
        }
        return this;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        }
        else
            return false;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        var counter = 0;
        var currentNode = this._head;
        while(currentNode) {
            if (counter == index) {
                if (currentNode.prev != null)
                    currentNode.prev.next = currentNode.next;
                if (currentNode.next != null)
                    currentNode.next.prev = currentNode.prev;
                this.length--;
                break;
            }
            currentNode = currentNode.next;
            counter++;
        }
        return this;
    }

    reverse() {
        var node_head = this._head;
        var node_tail = this._tail;
        var i = 0;
        var tempData;
        while (i < Math.floor(this.length / 2)) {
            tempData = node_tail.data;
            node_tail.data = node_head.data;
            node_head.data = tempData;
            node_head = node_head.next;
            node_tail = node_tail.prev;
            i++;
        }
        return this;
    }

    indexOf(data) {
        var counter = 0;
        var currentNode = this._head;
        while(currentNode) {
            if (currentNode.data === data) {
                return counter;
            }
            currentNode = currentNode.next;
            counter++;
        }
        return -1;
    }
}

module.exports = LinkedList;
