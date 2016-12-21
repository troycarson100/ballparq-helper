angular.module('myApp')
  .controller('financeController', financeController)

financeController.$inject = ['$state', '$http']

function financeController($state, $http){
  var vm = this;

  var bpButtons = [1,2,3,4]

}
