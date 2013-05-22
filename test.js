var assay = require('./')
  , chai = require('chai')
  , expect = chai.expect
chai.use(require('chai-spies'))

function thrower() { throw new Error('this should be caught') }
function noop() {}
describe('the assay function', function() {
  it('should not call the assertion function immediately', function() {
    var spy = chai.spy(noop)
      , fn = assay(spy)
    expect(spy).to.not.have.been.called
  })
  it('should call the assertion function when called', function() {
    var spy = chai.spy(noop)
      , fn = assay(spy)
      , result = fn()
    expect(spy).to.have.been.called
  })
  it('should return true if the assertion function does not throw', function() {
    var spy = chai.spy(noop)
      , fn = assay(spy)
      , result = fn()
    expect(result).to.be.true
  })
  it('should return false if the assertion function throws', function() {
    var spy = chai.spy(thrower)
      , fn = assay(spy)
      , result = fn()
    expect(result).to.be.false
  })
})
