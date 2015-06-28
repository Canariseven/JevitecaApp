/**
 * Created by Canariseven on 22/6/15.
 */
angular.module("JevitecaApp")
    .service("GenresProvider",["$http","Settings", function ($http,Settings) {
        this.getGenres= function(){
            var datos = $http.get(Settings.json_genres);
            return datos
        }
    }]);