if (!(ReactiveVar.prototype.unset && ReactiveVar.prototype.unset.constructor === Function)) {
  ReactiveVar.prototype.unset = function() {
    this.set(void 0);
  };
}
