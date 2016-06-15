'use strict'

class parentClass {
	constructor() {
		this.publicFunction = privateFunction.bind(this)
	}

	//the above is equivalent to:
	// publicFunction() {
	// 	privateFunction.call(this)
	// }

	sayName() {
		console.log('parentClass')
	}
}

function privateFunction() {
	console.log('private')
	this.sayName()
}

module.exports = parentClass