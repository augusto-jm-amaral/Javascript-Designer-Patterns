// Formas de criar um objeto vazio

var newObject = {};

var newObject = Object.create( Object.prototype );

var newObject = new Object();

// 4 Formas de atribuir chave e valor a um objeto

// 1. Dot syntax
	// Set properties
	newObject.someKey = "Hello World";

	// Get properties
	var value = newObject.someKey

// 2. Square bracket syntax

	//Set
	newObject['someKey'] = 'Hello World';

	//Get
	var value = newObject['someKey'];

// 3. Object.defineProperty

	//Set
	Object.defineProperty( newObject, 'someKey', {
		value: "for more control of the propety's behavior",
		writable: true,
		enumerable: true,
		configurable: true
	});

	//Deixando um pouco mais simples o setValue acima
	var defineProperty = function ( obj, key, value) {
		
		var config = {
			value: value,
			writable: true,
			enumerable: true,
			configurable: true
		};

		Object.defineProperty( obj, key, config);
	}

	// Use
	var person = Object.create( Object.prototype );
	// Populate
	defineProp( person, 'car', 'Delorean');
	defineProp( person, 'dateOfBirth', '1981');
	defineProp( person, 'hasBeard', false);

	console.log(person);

	// 4. Object.defineProperties

	// Set properties
	Object.defineProperties( newObject, {
		"someKey": {
			value: "Hello World"
			writable: true
		},
		"anotherKey": {
			value: "Foo bar",
			writable: false
		}
	});


	// Criando objeto que herda propriedades de outro objeto
	var driver = Object.create( person );

	// Set
	defineProp( drive, "topSpeed", "100mph");

	// Get propriedade herdada de person
	console.log( driver.dateOfBirth ); //--> 1981







