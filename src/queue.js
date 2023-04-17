const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  queue = []
  getUnderlyingList() {
    class ListNode {
      constructor(x) {
        this.value = x;
        this.next = null;
      }
    }
    function convertArrayToList(arr) {
      return arr.reverse().reduce((acc, cur) => {
        if (acc) {
          const node = new ListNode(cur);
          node.next = acc;
          return node;
        }
  
        return new ListNode(cur);
      }, null);
    }
    return convertArrayToList(this.queue)
  }

  enqueue(val) {
    this.queue.push(val);
  
   
  }

  dequeue() {
    var first = this.queue[0]
    this.queue.splice(0,1)
    return first

  }
}

module.exports = {
  Queue
};
