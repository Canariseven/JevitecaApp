/**
 * Created by Canariseven on 22/6/15.
 */
angular.module("JevitecaApp")
    .controller("BandsCtrl", ["$scope","Bands", function ($scope,Bands) {
        $scope.bands = Bands.data;
        $scope.imageStd = "resources/img/imgDefault.jpg"
    }]);