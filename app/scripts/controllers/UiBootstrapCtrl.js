(function() {

    function UiBootstrapCtrl($uibModal) {

        var modalInstance = $uibModal.open({});


    }


    angular
        .module('blocChat')
        .controller('UiBootstrapCtrl', ['$uibModal', UiBootstrapCtrl]);



})();
