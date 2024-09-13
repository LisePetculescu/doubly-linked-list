import DoublyLinkedList, { Node } from "./doublylinkedlist.js";

window.addEventListener("load", start);

function start() {
  console.log("test is running");

  createNodes();
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
  const list = new DoublyLinkedList();
  list.addNodeFirst(node2);
  list.addNodeFirst(node1);
  list.addNodeLast(node4);
  const list2 = new DoublyLinkedList();
  list2.addFirst("a");
  list2.addFirst("c");
  list2.addLast("r");

  window.list = list;
  window.list2 = list2;
}
