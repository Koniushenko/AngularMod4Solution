(function(){
	'use strict';
	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categories'];
	function CategoriesController(categories) {

		var menu = this;
	
		
		
		// var promise = MenuDataService.getAllCategories();
		//  	promise.then( function(response) {
		// 		menu.categories = response.data;
		// })
		// .catch( function(error) {
		// 	console.log(error.status);
		// })
		menu.categories = categories.data;

		menu.getCategoryName = function(categoryName) {
			menu.selectedCategory = categoryName;
		};
		



		

		// var nextPromise = MenuDataService.getItemsForCategory("NF");
		// nextPromise.then(function(response) {
		// 		menu.items = response.data.menu_items;
		// })
		// .catch( function(error) {
		// 	console.log(error.status);
		// })

	};

})();