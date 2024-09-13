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
  inserAfter(index, data) {}

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
  removeFirdt() {}

  // - `removeLast()` - fjerner det sidste element i listen - og returnerer elementet
  removeLast() {}

  // ******************** metoder til nodes ***********************

  // - `addNodeLast( newNode )` - tilføjer en ny node til slutningen af listen
  addNodeLast(newNode) {
    const prevTail = this.tail;
    this.tail = newNode;

    if (prevTail) {
      this.tail.prev = prevTail;
      prevTail.next = this.tail;
    }
  }

  // - `addNodeFirst( newNode )` - tilføjer en ny node i starten af listen
  addNodeFirst(newNode) {
    const prevHead = this.head;
    this.head = newNode;

    if (prevHead) {
      this.head.next = prevHead;
      prevHead.prev = this.head;
    }
  }

  // - `insertAfterNode( newNode, existingNode )` - indsætter en ny node efter en eksisterende
  insertAfterNode(newNode, existingNode) {}

  // - `insertBeforeNode( newNode, existingNode )` - indsætter en ny node før en eksisterende
  insertBeforeNode(newNode, existingNode) {}

  // - `removeNode( existingNode )` - fjerner en eksisterende node fra listen
  removeNode(existingNode) {}

  // - `nodeAt( index )` - returnerer noden på plads nummer *index*
  nodeAt(index) {}

  // - `swapNodes( nodeA, nodeB )` - bytter om på to nodes pladser i listen
  swapNodes(nodeA, nodeB) {}

  // ******************** metoder til hele listen ***********************
  // - `clear()` - fjerner alle elementer fra listen
  clear() {}

  // - `size()` - returnerer antallet af nodes i listen
  size() {}

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
                prev: ${current.previous?.data}
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
