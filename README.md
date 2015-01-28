meteor-reactivevar-unset
====================
Adds a method `unset` to ReactiveVar.

```js
var v = new ReactiveVar('test');
v.unset();
v.get(); // => undefined
```
