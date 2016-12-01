(function() {
  'use strict';

  mocha.setup({ui: 'bdd'});
  window.expect = chai.expect;

  window.onload = function() {
    window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
  };

  // Disabling native methods is dangerous, we should spy on them instead
  before(function() {
    sinon.spy(Array.prototype,'sort');
    sinon.spy(Array.prototype,'reverse');
  });

  afterEach(function() {
    Array.prototype.sort.reset();
    Array.prototype.reverse.reset();
  });

  after(function() {
    Array.prototype.sort.restore();
    Array.prototype.reverse.restore();
  });

}());
