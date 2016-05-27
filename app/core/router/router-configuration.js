'use strict';

angular.module('myApp.core.router')
  /**
  * Sets up the configuration for the router
  */
  .config(
    ["ROUTES", "$stateProvider", "$urlRouterProvider", function routerConfig(ROUTES, $stateProvider, $urlRouterProvider) {

      var states = [];

      /**
       * Home view
       */
       var homeViews = {};
       homeViews["main-content@"] = {
         templateUrl: 'components/home/home.tpl.html',
         controller: 'HomeCtrl'
       };

       states.push({
         name: ROUTES.HOME_PAGE,
         url: '/home',
         views: homeViews
       });

       /**
        * View2 view
        */
        var aboutViews = {};
        aboutViews["main-content@"] = {
          templateUrl: 'components/about/about.tpl.html',
          controller: 'AboutCtrl'
        };

        states.push({
          name: ROUTES.ABOUT_PAGE,
          url: '/about',
          views: aboutViews
        });

      /**
       * UI routes initialization
       */
      angular.forEach(states, function (state) {
        $stateProvider.state(state);
      });

      $urlRouterProvider.otherwise('/home');

    }]
  );
