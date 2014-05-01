angular.module('uiRouterSample', [
    'ui.router'
]).config(
    [
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app', {
                    url: '',
                    abstract: true,
                    templateUrl: 'js/partials/layout.tpl.html'
                })
                .state('app.home', {
                    url: '/home',
                    views: {
                        'header': {
                            templateUrl: 'js/partials/home/header.tpl.html'
                        }
                    }
                })
                .state('app.about', {
                    url: '/about',
                    views: {
                        'main-container': {
                            template: 'about container '
                        }
                    },
                    resolve: {
                        translate: function() {
                            console.info('resolve :: about');
                            return true;
                        }
                    }
                })
                .state('app.contact', {
                    url: '/contact',
                    views: {
                        'header': {
                            templateUrl: 'js/partials/contact/header.tpl.html',
                            controller: function($scope) {
                                $scope.tabs = [{
                                    tabId: 1,
                                    name: 'contact-1'
                                }, {
                                    tabId: 2,
                                    name: 'contact-2'
                                }];
                            }
                        },
                        'main-container': {
                            template: '<div ui-view></div>'
                        },
                        'footer': {
                            templateUrl: 'js/partials/contact/footer.tpl.html'
                        }
                    },
                    resolve: {
                        translate: function() {
                            console.info('resolve :: contact');
                            return true;
                        }
                    }
                })
                .state('app.contact.detail', {
                    url: '/:contactId',
                    views: {
                        '': {
                            template: 'contact detail container'
                        }
                    }
                });
        }
    ]).run(function($state, $timeout) {
    console.info('start');
    $state.go('app.home');
});