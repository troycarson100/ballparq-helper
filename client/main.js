var myApp = angular.module('myApp', ['ui.router'])
  .directive('navigationBar', navigationBar)
  .directive('helpMenu', helpMenu)

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')


  $stateProvider
    .state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })
})


function navigationBar() {
  return {
    restrict: 'C',
    templateUrl: '/partials/nav.html'
  }
}

function helpMenu() {
  return {
    restrict: 'C',
    templateUrl: '/partials/help.html'
  }
}
