# moduleExample

Small codebit to demonstrate how JS can use non-class functions to implement private methods, similar to how we would in Ruby.
Main benefit is that our classes would be a bit more lightweight and would only have the methods that are intended to be used publicly.
If there's a private method that needs to be used publicly, just put it on the superclass when it becomes necessary.

Run `node subClass.js` to see that subclasses still retain access to private functions of the superclass file.
