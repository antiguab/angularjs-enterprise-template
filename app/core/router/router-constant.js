'use strict';

angular.module('myApp.core.router')
  /**
  * Sets the constants required for the router service
  */
  .constant(
    'ROUTES',
    {
      /**
       * HOME state
       */
       HOME_PAGE: 'home',
       /**
        * View 2 route
        */
       ABOUT_PAGE: 'about'
    }
  );
