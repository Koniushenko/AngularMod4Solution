(function() {
	'use strict';
	angular.module('MenuApp')
	.component('items', {
		templateUrl: 'src/templates/items.template.html',
  		controller: ItemsComponentController,
		bindings: {
		    items: '<',
		    name: '<'
		    // myTitle: '@title',
		    // onRemove: '&'
		}
	});
	function ItemsComponentController() {
	var $ctrl = this;
	};

})();