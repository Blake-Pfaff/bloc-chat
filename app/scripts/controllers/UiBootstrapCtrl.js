(function() {

    function UiBootstrapCtrl($uibModal) {
        // Im not sure what needs to be injected or if this is the correct set up for this controller.  Im confused about what depencencays need to been injected where and how
        var modalInstance = $uibModal.open(options);

        modalInstance.result.then(onClose, onCancel);

    }


    angular
        .module('blocChat')
        .controller('UbiBootstrapCtrl', ['ui.bootstrap']);

})();
