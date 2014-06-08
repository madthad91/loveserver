var expect = require('expect.js'),
    loveserver = require('..');

describe('loveserver', function() {
  it('should say hello', function(done) {
    expect(loveserver()).to.equal('Hello, world');
    done();
  });
});
