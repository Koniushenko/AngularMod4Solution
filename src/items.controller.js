(function(){
	'use strict';
	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['items'];
	function ItemsController(items) {

		var category = this;	
		category.items = items.data.menu_items;
		category.name = items.data.category.name;
		
	};

})();