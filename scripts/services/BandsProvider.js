/**
 * Created by Canariseven on 22/6/15.
 */
angular.module("JevitecaApp")
    .service("BandsProvider",["$http","$q","$filter","Settings", function ($http,$q,$filter,Settings) {
        this.getBands = function(){
            var datos = $http.get(Settings.json_bands);
            return datos
        }

        this.getBandWithId = function (bandId) {
            var deferred = $q.defer();
            $http.get(Settings.json_bands).then(function (data) {
                var element = $filter("filter")(data.data, {"id": bandId})[0];
                deferred.resolve(element);
            });
            return deferred.promise;
        };

    }]);