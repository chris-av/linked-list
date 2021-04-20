const util = require('util');
const LinkedList = require('./utils/LinkedList');

const list = new LinkedList();
// list.push('first item!');
// list.push('second item!');
// list.pop();
console.log( util.inspect(list, { depth: null, colors: true }) );

// let currnode = list.head;
// let prevnode = list.head;
// 
// while (currnode.next) {
//   if (currnode === list.head) { currnode = currnode.next; continuecurrnode = currnode.next; continue;; } 
//   console.log(`currnode : ${JSON.stringify(currnode)}`);
//   prevnode = prevnode.next;
//   currnode = currnode.next;
// }
// 
// console.log(`prevnode out of loop : ${JSON.stringify(prevnode)}`);
// console.log(`currnode out of loop : ${JSON.stringify(currnode)}`);
// prevnode.next = null;
// console.log(util.inspect(list, { colors: true, depth: null }));
