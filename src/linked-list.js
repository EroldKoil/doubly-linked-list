const Node = require('./node');

class LinkedList {
    constructor() {
        this.list = [];
    }

    get length(){
        return this.list.length;
    }

    append(data) {
        let node = new Node(data, null, null);
        this.list.push(node);
        let prev = this.list.length == 1 ? node : this.list[this.list.length - 2];
        let next = this.list[0];
        node.setPrev(prev);
        node.setNext(next);
        if (this.list.length > 1) {
            prev.setNext(node);
            next.setPrev(node);
        }
        return this;
    }

    head() {
        if (this.list.length>0 ) {
            return this.list[0].data;
        }
        else {
            return null;
        }
    }

    tail() {
        if (this.list.length>0 ) {
            return this.list[this.list.length-1].data;
        }
        else {
            return null;
        }
    }

    get _head() {
        return this.list[0];
    }

    get _tail() {
        return this.list[this.list.length-1];
    }

    at(index) {
        if(index < this.list.length && index>=0) {
            return this.list[index].data;
        }
    }

    insertAt(index, data) {
        if (index >=0 ) {
            let node = new Node(data , null , null);
            this.list.splice(index , 0 , node);
            let prev = index==0?this.list[this.list.length]:this.list[index-1];
            let next = index<this.list.length-1?this.list[index+1]:this.list[0];
            node.setPrev(prev);
            node.setNext(next);
            if (this.list.length > 1) {
                prev.setNext(node);
                next.setPrev(node);
            }
        }
        return this;
    }


    isEmpty() {
        if(this.list.length==0){
            return true;
        }
        else return false;
    }

    clear() {
        this.list = [];
        return this;
    }

    deleteAt(index) {
        if (index < this.list.length && index >= 0) {
            let node = this.list[index];
            node.next.setPrev(node.prev);
            node.prev.setNext(node.next);
            this.list.splice(index, 1);
        }
        return this;
    }

    reverse() {
        this.list.reverse();
        this.list.forEach(function (element) {
           let center = element.next;
           element.next = element.prev;
           element.prev = center;
        });
        return this;
    }

    indexOf(data) {
        for(let i = 0; i<this.list.length; i++){
            if (this.list[i].data == data){
                return i;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
