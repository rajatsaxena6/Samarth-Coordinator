angular.module('samarth-coordinator')
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider, $stateParams) {
            $stateProvider
                .state('verifyprofile', {
                    url: '/verifyprofile/:candidateid',
                    views: {
                        "appbar": {
                            templateUrl: 'home/templates/appbar.html',
                            controller: 'appbarctrl'
                        },
                        "content@": {
                            templateUrl: 'completeprofile/templates/completeprofile.html',
                            controller: 'completeprofileCtrl'
                        },
                        "footer": {
                            templateUrl: 'home/templates/footer.html',
                        }
                    }
                })
                .state('back', {
                    url: '/viewprofile',
                    views: {
                        "appbar": {
                            templateUrl: 'home/templates/appbar.html',
                            controller: 'appbarctrl'
                        },
                        "content@": {
                            templateUrl: '../candidatesearch/templates/candidatesearchhome.html',
                            controller: 'candidatesearchctrl'
                        },

                        "footer": {
                            templateUrl: 'home/templates/footer.html',
                        }
                    }
                });

        }
    ]);
