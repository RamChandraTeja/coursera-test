(function () {
  'use strict';
  angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('CustomSeparatorCtrl',CustomSeparatorCtrl);


      CustomSeparatorCtrl.$inject = ['$scope'];

  function CustomSeparatorCtrl ($mdConstant) {
    // Use common key codes found in $mdConstant.KEY_CODE...
    this.keys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA];
    this.tags = [];

    // Any key code can be used to create a custom separator
    var semicolon = 186;
    this.customKeys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, semicolon];
    this.contacts = ['test@example.com'];
  }
})();
