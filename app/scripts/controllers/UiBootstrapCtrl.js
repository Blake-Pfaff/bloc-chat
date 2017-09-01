(function() {

    function UiBootstrapCtrl($uibModal) {
      this.alert = function() {
       alert();
    }



    angular
        .module('blocChat')
        .controller('UiBootstrapCtrl', ['$uibModal', UiBootstrapCtrl]);

    }

})();
