/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  this._storage.push(item);
};

setPrototype.contains = function (item) {
  let check = false;
  this._storage.forEach(element => {
    if (element === item) check = true;
  });
  return check;
};

setPrototype.remove = function (item) {
  this._storage.forEach((e, i) => {
    if (e === item) this._storage.splice(i, 1);
  });
};
