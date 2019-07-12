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
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  if (this._storage.find(e => e === item)) return true;
  return false;
};

setPrototype.remove = function(item) {
  this._storage.find((e, i) => {
    if (e === item) this._storage[i] = undefined;
  })
};
