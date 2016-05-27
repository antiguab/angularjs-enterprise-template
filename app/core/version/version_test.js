'use strict';

describe('myApp.core.version module', function() {
  beforeEach(module('myApp.core.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
