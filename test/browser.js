var mocha = require('mocha')

mocha.setup('bdd')

require('./set.test.js')

mocha.run(function () {
	console.log('Done!')
})
