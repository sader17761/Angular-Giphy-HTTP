myApp.service('GifService', function($http){
  var gs = this;
  gs.searchArray =[];

  gs.searchGet = function(input){
    console.log('In services/searchGet');
    gs.search = 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC';
    // this will run on our button click
    return $http.get(gs.search).then(function(response){
      for (var i = 0; i < 8; i++) {
        gs.gifObjects = response.data.data[i].images.downsized.url;
        gs.searchArray.push(gs.gifObjects);
      }
      return gs.searchArray;
    });
  };

  gs.getRandom = function(){
    console.log('In services/getRandom');
    gs.random = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&';
    // this will run on our button click
    return $http.get(gs.random).then(function(response){
      gs.giphy = response.data.data.image_url;
      return gs.giphy;
    });
  };
});
