(function() {

    function UiBootstrapCtrl($uibModal) {
        // Im not sure what needs to be injected or if this is the correct set up for this controller.  Im confused about what depencencays need to been injected where and how

    var alertTest = function() {
      alert();
    }

    angular
        .module('blocChat')
        .controller('UiBootstrapCtrl', ['$uibModal', UiBootstrapCtrl]);

})();
