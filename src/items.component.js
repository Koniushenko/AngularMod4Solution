(function() {
	'use strict';
	angular.module('MenuApp')
	.component('items', {
		templateUrl: 'src/templates/items.template.html',
  		controller: ItemsComponentController,
		bindings: {
		    items: '<',
		    name: '<'
		}
	});
	function ItemsComponentController() {
	var $ctrl = this;
	};

})();