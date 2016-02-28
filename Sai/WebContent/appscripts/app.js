'use strict';

var ndbApp = angular.module('ndbApp', ['ui.router', 'ui.bootstrap', 'ndbApp.controllers', 'ndbApp.services']);

	ndbApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
	//$urlRouterProvider.otherwise('/home');
 
    $stateProvider
	    .state('ndlhome', {
	        url:'/home',
	        templateUrl: 'partials/ndlhome.html',
	        controller: 'homeController'
	    })
    
    	.state('searchfood', {
            url:'/search/food',
            templateUrl: 'partials/foodsearch.html',
            controller: 'foodSearchController'
        })
        
        .state('nutrientslist', {
            url:'/nutrilist',
            templateUrl: 'partials/nutrilist.html',
            controller: 'nutriListController'
        });
        
}]);
	
