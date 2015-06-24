/**
 * Created by Canariseven on 22/6/15.
 */
angular.module("JevitecaApp")
    .controller("AlbumsCtrl", ["$scope","Albums", function ($scope,Albums) {
        $scope.albums = Albums.data;
    }]);