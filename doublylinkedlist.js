// assignment: https://petlatkea.notion.site/datastruktur-Doubly-Linked-List-e00f99121e8c4130bb10e87ab2091c8c

export default class DoublyLinkedList {
  head = null;
  tail = null;

  // constructor(node) {
  //   this.head = node;
  //   this.tail = node;
  // }

  // ******************** metoder til data ***********************
  // - `addLast( data )` - tilføjer et element til slutningen af listen
  addLast(data) {
    const node = new Node(data);
    this.addNodeLast(node);
  }

  // - `addFirst( data )` - tilføjer et element til begyndelsen af listen
  addFirst(data) {
    const node = new Node(data);
    this.addNodeFirst(node);
  }

  // - `get( index )` - returnerer elementet på plads nummer *index*
  get(index) {}

  // - `indexOf( data )` - finder plads nummer for det angivne element (payload)
  indexOf(data) {}

  // - `insertAfter( index, data )` - indsætter et nyt element efter plads nummer *index*
  insertAfter(index, data) {}

  // - `insertBefore( index, data )` - indsætter et nyt element før plads nummer *index*
  insertBefore(index, data) {}

  // - `first()` - returnerer det første element i listen
  first() {}

  // - `last()` - returnerer det sidste element i listen
  last() {}

  // - `remove( data )` - fjerner elementet fra listen (hvis det altså var der)
  remove(data) {}

  // - `removeIndex( index )` - fjerner elementet på det pågældende *index*
  removeIndex(index) {}

  // - `removeFirst()` - fjerner det første element i listen - og returnerer elementet
  removeFirst() {
    const oldHead = this.head;

    if (oldHead?.next) {
      this.head = oldHead.next;
      this.head.prev = null;
    } else {
      this.clear();
    }
    return oldHead;
  }

  // - `removeLast()` - fjerner det sidste element i listen - og returnerer elementet
  removeLast() {
    const oldTail = this.tail;

    if (oldTail?.prev) {
      this.tail = oldTail.prev;
      this.tail.next = null;
    } else {
      this.clear();
    }
    return oldTail;
  }

  // ******************** metoder til nodes ***********************

  // - `addNodeLast( newNode )` - tilføjer en ny node til slutningen af listen
  addNodeLast(newNode) {
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // - `addNodeFirst( newNode )` - tilføjer en ny node i starten af listen
  addNodeFirst(newNode) {
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // - `insertAfterNode( newNode, existingNode )` - indsætter en ny node efter en eksisterende
  insertAfterNode(newNode, existingNode) {
    if (existingNode === this.tail) {
      this.addNodeLast(newNode);
    } else {
      const oldNext = existingNode.next;
      newNode.prev = existingNode;
      newNode.next = oldNext;
      oldNext.prev = newNode;
      existingNode.next = newNode;
    }
  }

  // - `insertBeforeNode( newNode, existingNode )` - indsætter en ny node før en eksisterende
  insertBeforeNode(newNode, existingNode) {
    if (existingNode === this.head) {
      this.addNodeFirst(newNode);
    } else {
      const oldPrev = existingNode.prev;
      newNode.prev = oldPrev;
      newNode.next = existingNode;
      oldPrev.next = newNode;
      existingNode.prev = newNode;
    }
  }

  // - `removeNode( existingNode )` - fjerner en eksisterende node fra listen
  removeNode(existingNode) {
    if (existingNode === this.head) {
      this.removeFirst();
    } else if (existingNode === this.tail) {
      this.removeLast();
    } else {
      const oldPrev = existingNode.prev;
      const oldNext = existingNode.next;
      oldNext.prev = existingNode.prev;
      oldPrev.next = existingNode.next;
    }
  }

  // - `nodeAt( index )` - returnerer noden på plads nummer *index*
  nodeAt(index) {}

  // - `swapNodes( nodeA, nodeB )` - bytter om på to nodes pladser i listen
  swapNodes(nodeA, nodeB) {}

  // ******************** metoder til hele listen ***********************
  // - `clear()` - fjerner alle elementer fra listen
  clear() {
    this.head = null;
    this.tail = null;
  }

  // - `size()` - returnerer antallet af nodes i listen
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // - `dumpList( )` - udskriver hele listen i console
  dumpList() {
    console.log(`
                Linked list
            ====================
            head: ${this.head.data}
            tail: ${this.tail.data}
            `);
    let current = this.head;
    while (current) {
      console.log(`
                Node: ${current.data}
                ---------------------
                prev: ${current.prev?.data}
                next: ${current.next?.data}
                `);
      current = current.next;
    }
  }
}

export class Node {
  data;
  next;
  prev;

  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
