/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

const BinarySearchTree = function (value) {
  const bst = Object.create(bstPrototype);

  bst.value = value;
  bst.left = null;
  bst.right = null;

  return bst;
};

const bstPrototype = {};

bstPrototype.insert = function (value) {
  const currentNode = this;
  const currentValue = currentNode.value;
  const newNode = BinarySearchTree(value);

  if (currentValue > newNode.value) {
    !currentNode.left ? currentNode.left = newNode : currentNode.left.insert(value);
  }
  if (currentValue < newNode.value) {
    !currentNode.right ? currentNode.right = newNode : currentNode.right.insert(value);
  }
};

bstPrototype.contains = function (value) {
  const currentNode = this;
  const currentValue = currentNode.value;

  if (currentValue === value) return true;
  if (currentValue > value) {
    return !currentNode.left ? false : currentNode.left.contains(value);
  }
  if (currentValue < value) {
    return !currentNode.right ? false : currentNode.right.contains(value);
  }
};
bstPrototype.depthFirstLog = function (func) {
  const currentNode = this;

  func(currentNode.value);
  if (currentNode.left) currentNode.left.depthFirstLog(func);
  if (currentNode.right) currentNode.right.depthFirstLog(func);
};
