console.log('js is working');

var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function($http){
  console.log('Angular is working');
  var vm = this;

  // temp startup function
  vm.startupFunction = function(){
    console.log('Inside startupFunction!');

    vm.searchURL = 'http://api.giphy.com/v1/gifs/search?q=dog&api_key=dc6zaTOxFJmzC';

    // get call to /songs
    $http({
      method: 'GET',
      url: vm.searchURL
    }).then(function(response){
      console.log('Back from API with:', response);
      vm.giphy = response.data.data[1].images.downsized.url;
      console.log('I received this item:', vm.giphy);
    }); // end .then response
  }; // end of startupFunction

  vm.otherGet = function(){
    console.log('Using button get syntax');
    // this will run on our button click
    $http.get('/songs').then(function(response){
      console.log('Back with:', response);
    });
  };
}); // end HttpController
