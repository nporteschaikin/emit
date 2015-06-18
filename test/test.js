var EventEmitter = require('./../emit')
  , should = require('should');;

describe('emit', function () {

  it('should create an EventEmitter instance', function (done) {
    var eventEmitter = new EventEmitter();
    should(eventEmitter).be.instanceof(EventEmitter);
    return done();
  });

  describe('on', function () {

    it('should set event', function (done) {
      var eventEmitter = new EventEmitter();
      var foo;
      should(foo).not.be.ok;
      eventEmitter.on('foo', function () { foo = 'bar'; });
      eventEmitter.emit('foo');
      should(foo).eql('bar');
      return done();
    });

  });

  describe('off', function () {

    it('should remove all callbacks', function (done) {
      var eventEmitter = new EventEmitter();
      var foo;
      should(foo).not.be.ok;
      eventEmitter.on('foo', function () { foo = 'bar'; });
      eventEmitter.emit('foo');
      should(foo).eql('bar');
      eventEmitter.off('foo');
      foo = 'foo';
      eventEmitter.emit('foo');
      should(foo).eql('foo');
      return done();
    });

    it('should remove specified callback', function (done) {
      var eventEmitter = new EventEmitter();
      var bar;
      var bar2;
      var foo = function () { bar = 'bar' };
      var foo2 = function () { bar2 = 'bar2' };
      should(bar).not.be.ok;
      should(bar2).not.be.ok;
      eventEmitter.on('foo', foo);
      eventEmitter.on('foo', foo2);
      eventEmitter.emit('foo');
      should(bar).eql('bar');
      should(bar2).eql('bar2');
      bar = null;
      bar2 = null;
      eventEmitter.off('foo', foo);
      eventEmitter.emit('foo');
      should(bar).not.be.ok;
      should(bar2).eql('bar2');
      return done();
    });

  });

});
