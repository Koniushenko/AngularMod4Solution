(function() {
	'use strict';
	angular.module('MenuApp')
	.component('categories', {
		templateUrl: 'src/templates/categories.template.html',
  		controller: CategoriesComponentController,
		bindings: {
		    categories: '<'
		    // myTitle: '@title',
		    // onRemove: '&'
		}
	});
	// CategoriesComponentController.$inject = ['MenuDataService'];
    function CategoriesComponentController() {
	var $ctrl = this;	
	};

})();