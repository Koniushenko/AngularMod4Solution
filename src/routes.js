(function(){
	'use strict';
	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home')

		$stateProvider
		    .state('home', {
		    	url: '/home',
		    	templateUrl: 'src/templates/home.template.html'

		    

		    })
		    .state('categories', {
		    	url: '/categories',
		    	templateUrl: 'src/templates/viewcategories.template.html',
		    	controller: 'CategoriesController as menu',
		    	resolve: {
		    		categories: ['MenuDataService', function(MenuDataService) {
		    			return MenuDataService.getAllCategories();

		    		}]
		    	}

		    })

		    .state('items', {
		    	url: '/category/{short_name}',
		    	templateUrl: 'src/templates/viewitems.template.html',
		    	controller: 'ItemsController as category',
		    	resolve: {
		    		items: ['$stateParams', 'MenuDataService', 
		    			function($stateParams, MenuDataService) {
		    				return MenuDataService.getItemsForCategory($stateParams.short_name);
		    		}]
		    	}
		    });

	};

	
})();