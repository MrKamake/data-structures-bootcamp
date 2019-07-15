/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(index)) this._storage.set(index, [k, v]);
  else {
    var prevData = this._storage.get(index);
    if (k !== prevData[0]) this._storage.set(index, [prevData, [k, v]]);
    else this._storage.set(index, [k, v]);
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(index)) return undefined;
  if (Array.isArray(this._storage.get(index)[0])) {
    for (let i = 0; i < this._storage.get(index).length; i++) {
      if (k === this._storage.get(index)[i][0]) return this._storage.get(index)[i][0];
    }
  }
  if (this._storage.get(index)) return this._storage.get(index)[1];

};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(index, undefined)
};
