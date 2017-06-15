var myApp = angular.module('myApp', []);

myApp.controller( 'HttpController', function( GifService ){
  var vm = this;
  vm.gifList = [];

  vm.searchGet = function(input){
    GifService.searchGet(input).then(function(fromApi){
      vm.gifList = fromApi;
    });
  };

  vm.getRandom = function(){
    GifService.getRandom().then(function(fromApi){
      vm.giphy = fromApi;
    });
  };

}); // end of HttpController
