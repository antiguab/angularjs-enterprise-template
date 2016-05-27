'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngRoute',
  'myApp.sections.home',
  'myApp.sections.about',
  'myApp.core.version',
  'myApp.core.router',
  'myApp.components.appVersion'
])
.run(["$state", "ROUTES", function($state,ROUTES){
    return $state.go(ROUTES.HOME_PAGE);
}]);
