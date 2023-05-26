const LinkedList = require('./LinkedList');


describe("testing LinkedList sizing", () => {
  test("adding three items should give a size of three", () => {
    const list = new LinkedList();
    list.push(2).push(4).push(6);
    expect(list.length).toBe(3);
    expect(list.size()).toBe(3);
  });
  test("test sizing when you add, remove then add some more", () => {
    const list = new LinkedList();
    list.push(2).push(4).pop().push(6);
    expect(list.length).toBe(2);
    expect(list.size()).toBe(2);
  });
});


describe("combining linked lists", () => {
  test("can combine two lists", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list1.push(1).push(3).push(5);
    list2.push(2).push(4).push(6);
    list1.concat(list2);
    expect(list1.size()).toBe(6);
    expect(list1.length).toBe(6);
  });
});


