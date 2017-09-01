(function() {

    function UiBootstrapCtrl($uibModal) {
      this.open = function() {
        $uibModal.open({
          template: "<h1>Create A New Room</h1> <input type=text></input>"
        })
      }

    }



    angular
        .module('blocChat')
        .controller('UiBootstrapCtrl', ['$uibModal', UiBootstrapCtrl]);



})();
