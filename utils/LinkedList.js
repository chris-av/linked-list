const Node = require('./Node');

class LinkedList {
  constructor(head = null) {
    this.head = head ? new Node(head) : null;
    this.length = head ? 1 : 0;
    this.createdAt = new Date().toLocaleString();
  }

  size() {
    if (this.head.data === null) { return 0; }
    let counter = 0;
    let currnode = this.head;
    while (currnode) { counter++; currnode = currnode.next; }
    return counter;
  }

  push(data) {
    if (this.head.data === null) { this.head = new Node(data); return; }
    let currnode = this.head;
    while (currnode && currnode.next) { currnode = currnode.next; }
    currnode.next = new Node(data)
    return currnode.next;
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
    if (index === 0 && this.head.data === null) {
      this.head = new Node(data);
      return;
    }

    let currnode = this.head;
    let prevnode;
    let currindex = 0;


    while (currnode && currindex < index) {
      prevnode = currnode;
      currnode = currnode.next;
      currindex++;
    }

    if (!currnode) throw new Error(`reached the end of the list at index ${currindex-1}, could not reach the ${index} node ... `);

    if (currindex === 0) {
      this.head = new Node(data);
      this.head.next = currnode;
      return;
    } else {
      prevnode.next = new Node(data);
      prevnode.next.next = currnode;
    }

  }

}

module.exports = LinkedList;

