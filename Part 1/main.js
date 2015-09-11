angular.module("myApp", [])

angular.module("myApp")

var textCtrl = function($scope) {

	$scope.myVar = false
	$scope.myListVar = true

	$scope.List = [ "Raspberries", "Chocolate", "Ice Cream", "Bacon" ]	

}







angular.module("myApp").controller("textCtrl",['$scope', textCtrl])



