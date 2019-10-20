class Node {
    constructor(data , prev, next ) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }

    setData(data) {
        this.data = data;
    }

    setPrev(prev) {
        this.prev = prev;
    }

    setNext(next) {
        this.next = next;
    }

}

module.exports = Node;
