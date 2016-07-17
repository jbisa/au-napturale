/**
 * Set up AngularJS app
 */
var myApp = angular.module('auNapApp', []);


/**
 * AngularJS controller which controls logic of app
 */
myApp.controller('AuNapCtrl', ['$scope', '$http', function($scope, $http) {

	//$http.get('/users');

  	$scope.saveEmailAddress = function() {
  		console.log('***You entered: ' + $scope.customerEmail);
  	};

}]);