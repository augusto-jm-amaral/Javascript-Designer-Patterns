var myModule = (function () {
	
	var module = {},
		privateVariable = "Hello World";

	function privateMethod() {

	}

	module.publicProperty = "Foobar";
	module.publicMethod = function () {
		console.log(privateVariable);
	}

	return module;
})();