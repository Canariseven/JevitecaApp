/**
 * Created by Canariseven on 22/6/15.
 */
angular.module("JevitecaApp",["ngRoute","route-segment","view-segment"]);
angular.module("JevitecaApp")
    .config(["$routeSegmentProvider","$routeProvider",function($routeSegmentProvider,$routeProvider){
        $routeSegmentProvider.when("/albums","albums");
        $routeSegmentProvider.when("/bands","bands");
        $routeSegmentProvider.when("/genres","genres");
        $routeSegmentProvider.when("/albums/:id/details", "album_detail");
        $routeSegmentProvider.when("/bands/:id/details", "band_detail");

        $routeSegmentProvider.segment("albums",{
            controller: "AlbumsCtrl",
            templateUrl:"views/Albums.html",
            resolve:{
                Albums:["AlbumsProvider", function(AlbumsProvider){
                  return AlbumsProvider.getAlbums();
                }]
            }
        });
        $routeSegmentProvider.segment("bands",{
            controller: "BandsCtrl",
            templateUrl:"views/Bands.html",
            resolve: {
                Bands: ["BandsProvider", function (BandsProvider) {
                    return BandsProvider.getBands();
                }]
            }
        });
        $routeSegmentProvider.segment("genres",{
            controller: "GenresCtrl",
            templateUrl:"views/Genres.html",
            resolve: {
                Genres: ["GenresProvider", function (GenresProvider) {
                    return GenresProvider.getGenres();
                }]
            }
        });
        $routeSegmentProvider.segment( "album_detail", {
            controller: "AlbumDetailCtrl",
            templateUrl: "views/DetailAlbum.html",
            resolve:{
                Album : ["AlbumsProvider","$routeParams", function(AlbumsProvider,$routeParams){
                    return AlbumsProvider.getAlbumWithId($routeParams.id);
                }]
            }
        });
        $routeSegmentProvider.segment( "band_detail", {
            controller: "BandDetailCtrl",
            templateUrl: "views/DetailBand.html",
            resolve:{
                Band : ["BandsProvider","$routeParams", function(BandsProvider,$routeParams){
                    return BandsProvider.getBandWithId($routeParams.id);
                }]
            }
        });
        $routeProvider.otherwise({
            redirectTo: "/albums"
        });

    }]);