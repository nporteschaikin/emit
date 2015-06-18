# emit

I thinmk this is the world's smallest JavaScript event emitter.  [Here](https://github.com/jeromeetienne/microevent.js) (and [here](https://github.com/scottcorgan/tiny-emitter)) are two other very small event emitters.  This is 563 bytes minified, including the factory code.

### Installation

In node:

```sh
$ npm install microemit --save
```

In the browser, simply include the script; `EventEmitter` is attached to the `window` object.  emit can also be used with [RequireJS](http://requirejs.org/).
