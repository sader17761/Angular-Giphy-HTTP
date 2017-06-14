console.log('js is working');

var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function($http){
  console.log('Angular is working');
  var vm = this;
  vm.searchArray = [];

  // temp startup function
  vm.startupFunction = function(){
    console.log('Inside startupFunction!');
  }; // end of startupFunction

  vm.searchGet = function(input){
    console.log('Using search button to get gif');
    vm.search = 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC';
    // this will run on our button click
    $http.get(vm.search).then(function(response){
      console.log('Back with searched gif:', response);

      for (var i = 0; i < response.data.data.length; i++) {
        vm.gifObjects = response.data.data[i].images.downsized.url;
        vm.searchArray.push(vm.gifObjects);
      }
      //.images.downsized.url
      console.log(vm.searchArray);
    });
  };

  vm.getRandom = function(){
    vm.random = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&';
    // this will run on our button click
    $http.get(vm.random).then(function(response){
      vm.giphy = response.data.data.image_url;
    });
  };

});
