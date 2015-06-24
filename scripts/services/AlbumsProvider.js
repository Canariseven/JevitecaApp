/**
 * Created by Canariseven on 22/6/15.
 */
angular.module("JevitecaApp")
    .service("AlbumsProvider",["$http","$q","$filter", function ($http,$q,$filter) {
        this.getAlbums = function(){
            var datos = $http.get("resources/data/albums.json");
            return datos
        };

        this.getImageRoute = function (id){

        }
    }]);