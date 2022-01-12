const {describe,it,expect} = require('./runner');
// setting globals so that spec files work in both jest and local runner
global.describe = describe;
global.it = it;
global.expect = expect;
console.log('runing local test runner')
require('./__specs__/primitives.spec')
