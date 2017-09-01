(function() {

    function UiBootstrapCtrl($uibModal) {
      this.open = function() {
        $uibModal.open({
          templateUrl: "templates/modal.html"
        })
      }

    }



    angular
        .module('blocChat')
        .controller('UiBootstrapCtrl', ['$uibModal', UiBootstrapCtrl]);



})();
