/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.find(ele => ele === item)) return;
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  if (this._storage.find(element => element === item)) return true;
  return false;
};

setPrototype.remove = function(item) {
  this._storage.find((element, index) => {
    if (element === item) this._storage[index] = undefined;
  })
};
