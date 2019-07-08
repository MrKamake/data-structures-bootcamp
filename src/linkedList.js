/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    this.tail = Node(value);
    if (!this.head) this.head = Node(value);
    else this.head.next = value;
  };

  list.removeHead = function () {
    this.head.value = this.head.next;
    this.head.next = this.tail.value;

    return this.head.next;
  };

  list.contains = function (target) {
    let check = false;

    Object.values(this.head).forEach(element => {
      if (target === element) check = true;
    });

    return check;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
