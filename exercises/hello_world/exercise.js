var fs = require('fs')
var path = require('path')
var checkAll = require('../../lib/checkAll.js')
var fsCheck = require('../../lib/fsCheck.js')
var pkgDependencyCheck = require('../../lib/pkgDependencyCheck.js')

module.exports = function () {
  var problem = {}
  problem.requireSubmission = false
  problem.problem = {file: path.join(__dirname, 'problem.{lang}.md')}

  problem.verify = function (args, cb) {
    checkAll([
      fsCheck(path.join('.', 'index.js')),
      fsCheck(path.join('.', 'app.js'))
    ], '{{exercise.hello_world.fail}}', '{{exercise.hello_world.fail}}', cb)
  }
  return problem
}
