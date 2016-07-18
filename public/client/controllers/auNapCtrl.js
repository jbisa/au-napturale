/**
 * Set up AngularJS app
 */
var myApp = angular.module('auNapApp', []);

/**
 * AngularJS controller which controls logic of app
 */
myApp.controller('AuNapCtrl', ['$scope', '$http', function($scope, $http) {

  	$scope.saveUser = function() {
  		// Save this user's email in db
  		$http.post('/add-user', {
  			email: $scope.customerEmail
  		});
  	};

}]);