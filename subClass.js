'use strict'

const parentClass = require('./parentClass.js')

class subClass extends parentClass {
	testingOneTwo() {
		this.publicFunction()
	}

	sayName() {
		console.log('subClass')
	}
}


const subClassInstance = new subClass()
subClassInstance.testingOneTwo()