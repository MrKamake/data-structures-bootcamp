/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  const currentNode = this;
  for (let i = 0; i < currentNode.children.length; i++) {
    if (currentNode.children[i].value === target) return true;
    else if (currentNode.children[i].children && currentNode.children[i].contains(target)) return true;
  }

  return false;
};
