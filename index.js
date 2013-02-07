var splice = Array.prototype.splice

/**
 * Expose `Set`.
 */

module.exports = Set;

/**
 * Initialize a new `Set` with optional `vals`
 *
 * @param {Array} vals
 * @api public
 */

function Set(vals) {
  if (!(this instanceof Set)) return new Set(vals);
  this.length = 0
  if (vals) {
    for (var i = 0; i < vals.length; ++i) {
      this.add(vals[i]);
    }
  }
}

/**
 * Add `val`.
 *
 * @param {Mixed} val
 * @api public
 */

Set.prototype.add = function(val){
  if (this.has(val)) return;
  this[this.length++] = val
};

/**
 * Check if this set has `val`.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api public
 */

Set.prototype.has = function(val){
  return this.indexOf(val) > -1
};

/**
 * Return the indexof `val`.
 *
 * @param {Mixed} val
 * @return {Number}
 * @api private
 */

Set.prototype.indexOf = function(val){
  for (var i = 0, len = this.length; i < len; ++i) {
    var obj = this[i]
    if (obj === val) return i;
    if (obj.equals && obj.equals(val)) return i;
  }
  return -1;
};

/**
 * Iterate each member and invoke `fn(val)`.
 *
 * @param {Function} fn
 * @return {Set}
 * @api public
 */

Set.prototype.each = function(fn){
  for (var i = 0; i < this.length; ++i) {
    fn(this[i]);
  }
  return this;
};

/**
 * Return the values as an array.
 *
 * @return {Array}
 * @api public
 */

Set.prototype.values = 
Set.prototype.toJSON = function(){
  return [].slice.call(this)
};

/**
 * Return the set size.
 *
 * @return {Number}
 * @api public
 */

Set.prototype.size = function(){
  return this.length;
};

/**
 * Empty the set
 *
 * @api public
 */

Set.prototype.clear = function(){
  while (this.length) {
    delete this[--this.length]
  }
};

/**
 * Remove `val`, returning __true__ when present, otherwise __false__.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api public
 */

Set.prototype.remove = function(val){
  var i = this.indexOf(val);
  if (i > -1) splice.call(this, i, 1)
  return i > -1
};

/**
 * Combine `this` with `set`
 *
 * @param {Set} set
 * @return {Set} new set
 * @api public
 */

Set.prototype.union = function(set){
  var ret = new Set(this)
  for (var i = 0; i < set.length; ++i) ret.add(set[i]);
  return ret;
};

/**
 * Determine the intersection of `this` and `set`.
 * An intersection is the set of common elements
 *
 * @param {Set} set
 * @return {Set} new set
 * @api public
 */

Set.prototype.intersect = function(set){
  var ret = new Set;

  for (var i = 0; i < this.length; ++i) {
    if (set.has(this[i])) {
      ret.add(this[i]);
    }
  }

  return ret;
};

/**
 * Check if the set is empty.
 *
 * @return {Boolean}
 * @api public
 */

Set.prototype.isEmpty = function(){
  return !this.length;
};

