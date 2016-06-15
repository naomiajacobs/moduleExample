'use strict'

class parentClass {
	publicFunction() {
		privateFunction()
	}
}

function privateFunction() {
	console.log('private')
}

module.exports = parentClass