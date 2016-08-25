(function() {
  'use strict';

  mocha.setup({ui: 'bdd'});
  window.expect = chai.expect;

  window.onload = function() {
    window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
  };

  // Disabling native methods is dangerous, we should spy on them instead
  before(function() {
    sinon.spy(Array.prototype,'map');
    sinon.spy(Array.prototype,'sort');
  });

  afterEach(function() {
    Array.prototype.map.reset();
    Array.prototype.sort.reset();
  });

  after(function() {
    Array.prototype.map.restore();
    Array.prototype.sort.restore();
  });

}());
