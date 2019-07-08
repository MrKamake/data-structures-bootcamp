/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  const obj = new Tree(value);
  this.children.push(obj);
};

treeMethods.contains = function (target) {
  let check = false;
  if (target === this.children[0].value) check = true;
  // this.children.forEach(element => {
  //   if(element.value === target) check = true;
  // });
  return check;
};
