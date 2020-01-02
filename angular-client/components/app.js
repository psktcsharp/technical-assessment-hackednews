
angular.module('hackednews')
.controller('AppCtrl', function() {

  this.topTenList = articles.sort((a,b)=>{ return a.score- b.score}).reverse().slice(0,9)
})
.directive('app', () => {
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/app.html'
  }
})