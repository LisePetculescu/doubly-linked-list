import DoublyLinkedList, { Node } from "./doublylinkedlist.js";

window.addEventListener("load", start);

function start() {
  console.log("test is running");

  const nodes = createNodes();
  testAddNode(nodes);
  testAddData(nodes);

}

function createNodes() {
  const node1 = new Node("C");
  const node2 = new Node("A");
  const node3 = new Node("R");
  const node4 = new Node("T");
  const node5 = new Node("S");
  node1.next = node2;
  node2.next = node4;
  node2.prev = node1;
  node4.prev = node2;

  return { node1, node2, node3, node4, node5 };
}

function testAddNode({ node2, node1, node4 }) {
  const list = new DoublyLinkedList();
  list.addNodeFirst(node2);
  list.addNodeFirst(node1);
  list.addNodeLast(node4);
  console.log("List 1: addNode");
  list.dumpList();
}

function testAddData() {
  const list2 = new DoublyLinkedList();
  list2.addFirst("a");
  list2.addFirst("c");
  list2.addLast("r");
  console.log("List 2: addData");
  list2.dumpList();
  const list3 = new DoublyLinkedList();
  list3.addLast("C");
  list3.addLast("A");
  list3.addLast("T");
  console.log("List 3: addData");
  list3.dumpList();
  const list4 = new DoublyLinkedList();
  list4.addFirst("T");
  list4.addFirst("A");
  list4.addFirst("C");
  console.log("List 4: addData");
  list4.dumpList();
  testRemove(list4);
  list4.dumpList();

}

function testRemove(list) {
  list.addNodeLast(list.removeLast());
}
