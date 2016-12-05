(function(){
	'use strict';
	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['items'];
	function ItemsController( items) {

		var category = this;
	
	
		// var promise = MenuDataService.getAllCategories();
		//  	promise.then( function(response) {
		// 		menu.categories = response.data;
		// })
		// .catch( function(error) {
		// 	console.log(error.status);
		// })
		category.items = items.data.menu_items;

		category.name = items.data.category.name;
		// category.name = name;

		// var nextPromise = MenuDataService.getItemsForCategory("NF");
		// nextPromise.then(function(response) {
		// 		menu.items = response.data.menu_items;
		// })
		// .catch( function(error) {
		// 	console.log(error.status);
		// })

	};

})();