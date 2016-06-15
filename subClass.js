'use strict'

const parentClass = require('./parentClass.js')

class subClass extends parentClass {
	testingOneTwo() {
		this.publicFunction()
	}
}


const subClassInstance = new subClass()
subClassInstance.testingOneTwo()