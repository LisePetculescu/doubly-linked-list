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
  list.addFirst(node2);
  list.addFirst(node1);
  list.addLast(node4);

  //   list.tail = node4;
  //   console.log("node 1: ", node1);
  //   console.log("list: ", list);

  window.list = list;
}
