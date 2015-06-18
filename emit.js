/*!
* Copyright (c) 2015 Noah Portes Chaikin
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function () {

  var Emitter = function () {}

  Emitter.prototype = {

    on: function (ev, callback) {
      if (!this.events) this.events = {};
      if (!this.events[ev]) this.events[ev] = [];
      this.events[ev].push(callback);
      return this;
    },

    off: function (ev, callback) {
      if ((this.events || {})[ev]) {
        if (!callback) {
          this.events[ev] = [];
        } else {
          this.events[ev].splice(this.events[ev].indexOf(callback), 1);
        }
      }
      return this;
    },

    emit: function (ev) {
      if ((this.events || {})[ev]) {
        for (var x=0; x<this.events[ev].length; x++) {
          this.events[ev][x].apply(this, Array.prototype.slice.call(arguments, 1));
        }
      }
      return this;
    }

  };

  if ('function' === typeof define && define.amd) {
    define(Emitter);
  } else if ('object' === typeof exports) {
    module.exports = Emitter;
  } else {
    window.Emitter = Emitter;
  }

}());
