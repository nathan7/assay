module.exports =
function assay(fn) {
  return function() {
    try       { fn.apply(this, arguments) }
    catch (e) { return false }
                return true
  }
}
