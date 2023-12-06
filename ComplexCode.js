// Filename: ComplexCode.js

// This complex code demonstrates advanced algorithms and data structures

// Example: Sorting Algorithm - Quick Sort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example: Data Structure - Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  addToTail(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  
  removeHead() {
    if (!this.head) {
      return null;
    }
    
    const removedHead = this.head;
    if (removedHead === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
    }
    
    return removedHead.data;
  }
  
  search(data) {
    let currentNode = this.head;
    
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      
      currentNode = currentNode.next;
    }
    
    return null;
  }
}

// Example: Complex Function - Calculate Fibonacci Sequence
function fibonacci(n) {
  const sequence = [0, 1];
  
  while (sequence.length < n) {
    const nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNum);
  }
  
  return sequence;
}

// Usage Examples
const unsortedArray = [5, 2, 9, 1, 7, 3];
const sortedArray = quickSort(unsortedArray);

console.log(sortedArray);

const linkedList = new LinkedList();
linkedList.addToTail(5);
linkedList.addToTail(2);
linkedList.addToTail(9);
console.log(linkedList.head.data);
console.log(linkedList.search(2));

console.log(fibonacci(10));

// ... continue with more complex code beyond the 200 lines