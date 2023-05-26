const Node = require('./Node');

class LinkedList {
  constructor(head = null) {
    this.head = head ? new Node(head) : null;
    this.length = head ? 1 : 0;
    this.createdAt = new Date().toLocaleString();
  }

  size() {
    if (this.head === null) { return 0; }
    let counter = 0;
    let currnode = this.head;
    while (currnode.next) { counter++; currnode = currnode.next; }
    return counter;
  }

  print() {
    let currNode = this.head;
    console.log('LIST LENGTH : ', this.length);
    console.log('CREATED AT : ', this.createdAt);

    if (currNode === null) { return this; }

    console.log('󱞪 ', currNode.data);

    while (currNode.next) {
      currNode = currNode.next;
      console.log('󱞪 ', currNode.data);
    }

    return this;

  }

  push(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.length++;
      return this;
    }
    let currnode = this.head;
    while (currnode.next) { currnode = currnode.next; }
    currnode.next = new Node(data)
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) return;
    if (this.head.next === null) { this.head = new Node(null); return; }

    let currnode = this.head;
    while (currnode && currnode.next && currnode.next.next) {
      currnode = currnode.next;
    }
    currnode.next = null;
    return;
  }

  insert(data, index) {
    if (index === 0 && this.head === null) {
      this.head = new Node(data);
      this.length++;
      return this;
    }

    if (index === this.length) {
      this.push(data);
      return this;
    }

    let currnode = this.head;
    let prevnode;
    let currindex = 0;


    while (currnode && currindex < index) {
      prevnode = currnode;
      currnode = currnode.next;
      currindex++;
    }

    if (!currnode) throw new Error(`reached the end of the list at index ${currindex - 1}, could not reach the ${index} node ... `);

    if (currindex === 0) {
      this.head = new Node(data);
      this.head.next = currnode;
      return;
    } else {
      prevnode.next = new Node(data);
      prevnode.next.next = currnode;
    }

  }

  concat(list) {
    if (!this.head) {
      this.head = list.head;
      this.length = list.length;
      return this;
    }

    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }

    currNode.next = list.head;
    this.length = this.length + list.length;
    return this;

  }

}

module.exports = LinkedList;

