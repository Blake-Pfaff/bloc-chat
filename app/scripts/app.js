(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
          }

            function BlocChatCookies($cookies, $uibModal) {

              var currentUser = $cookies.get('blocChatCurrentUser');

              if (!currentUser || currentUser === '') {

                $uibModal.open({
                  templateUrl: 'templates/userModal.html',
                  controller: 'ModalInstanceAddUserCtrl',
                  controllerAs: 'addUser'
                })
                // ModalInstanceAddUserCtrl.result.then (
                //   function (userName) {
                //   var currentUser = $cookies.put('blocChatCurrentUser', username);
                //   }
                // );
              }

            }



    angular
        .module('blocChat', ['ui.bootstrap', 'ui.router', 'ngCookies', 'firebase' ])
        .config(config).run(['$cookies', '$uibModal', BlocChatCookies]);
})();
