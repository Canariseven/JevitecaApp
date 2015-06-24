/**
 * Created by Canariseven on 22/6/15.
 */
angular.module("JevitecaApp")
    .service("BandsProvider",["$http", function ($http) {
        this.getBands = function(){
            var datos = $http.get("resources/data/bands.json");
            return datos
        }
    }]);