/**
 * Created by Canariseven on 22/6/15.
 */
angular.module("JevitecaApp")
    .service("GenresProvider",["$http", function ($http) {
        this.getGenres= function(){
            var datos = $http.get("resources/data/genres.json");
            return datos
        }
    }]);