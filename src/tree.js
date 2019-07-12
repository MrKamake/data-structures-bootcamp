/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
  const currentNode = this;
  for (let i = 0; i < currentNode.children.length; i++) {
    if (currentNode.children[i].value === target) return true;
    else if (currentNode.children[i].children && currentNode.children[i].contains(target)) return true;
  }

  return false;
};
