var store = window.store || {};

if ( !store["basket"] ) {
  store.basket = {};
}
 
if ( !store.basket["core"] ) {
  store.basket.core = {};
}
 
store.basket.core = {
  // ...rest of our logic
}

//Dojo 1.7 (AMD-compatible version)
require(["dojo/_base/customStore"], function( store ){
 
  // using dojo.setObject()
  store.setObject( "basket.core", (function() {
 
      var basket = [];
 
      function privateMethod() {
          console.log(basket);
      }
 
      return {
          publicMethod: function(){
                  privateMethod();
          }
      };
 
  })());
 
});