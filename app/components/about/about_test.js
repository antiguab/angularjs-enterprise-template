'use strict';

describe('myApp.sections.about module', function() {

  beforeEach(module('myApp.sections.about'));

  describe('about controller', function(){

    it('should load controller', inject(function($controller) {
      //spec body
      var aboutCtrl = $controller('AboutCtrl');
      expect(aboutCtrl).toBeDefined();
    }));

  });
});
