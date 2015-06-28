/**
 * Created by Canariseven on 28/6/15.
 */
angular.module("JevitecaApp")
.value("Settings",{
        json_albums:"resources/data/albums.json",
        json_bands:"resources/data/bands.json",
        json_genres:"resources/data/genres.json",
        api_key_google:"AIzaSyBzO86cIFiDdZOXS8dCE2rbYX4mQEh8Ks4",
        youtube_url_embed:"https://www.youtube.com/embed/",
        youtube_search:"https://www.googleapis.com/youtube/v3/search",
        wikipedia_search: "https://es.wikipedia.org/wiki/Special:Search?search="
    });
(function(){
    var video = document.getElementById("bg");
    console.log(video)
    video.volume=-0.5;
})();

