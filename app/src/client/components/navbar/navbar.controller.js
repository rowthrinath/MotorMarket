angular.module("Material", ["ngMaterial", "ngAnimate"])

.controller("tabCtrl", ["$scope", function($scope) {
    $scope.selectedTab = 0;
    
    $scope.changeTab = function() {
        if ($scope.selectedTab === 2) {
            $scope.selectedTab = 0;
        }
        else {
            $scope.selectedTab++;
        }
        
    }
}]);