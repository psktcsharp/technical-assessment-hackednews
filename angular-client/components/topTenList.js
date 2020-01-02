angular.module('hackednews')
.controller('TopTenController', () => {
  // write any controller logic here.
  articles =['1','2']
})
.directive('topTenList', () => {
  return {
    scope: {  
      articles: '<'
    },
    restrict: 'E',
    transclude: true,
    controller: 'TopTenController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/topTenList.html'
  };
})
