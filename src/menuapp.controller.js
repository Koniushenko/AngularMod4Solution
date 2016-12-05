(function(){
	'use strict';
	angular.module('MenuApp')
	.controller('MenuAppController', MenuAppController);

	MenuAppController.$inject = ['categories', 'items'];
	function MenuAppController(categories, items) {

		var menu = this;
	
		menu.categories =[];
		menu.items =[];
		// var promise = MenuDataService.getAllCategories();
		//  	promise.then( function(response) {
		// 		menu.categories = response.data;
		// })
		// .catch( function(error) {
		// 	console.log(error.status);
		// })
		menu.categories = categories.data;
		menu.items = items.data.menu_items

		// var nextPromise = MenuDataService.getItemsForCategory("NF");
		// nextPromise.then(function(response) {
		// 		menu.items = response.data.menu_items;
		// })
		// .catch( function(error) {
		// 	console.log(error.status);
		// })

	};

})();