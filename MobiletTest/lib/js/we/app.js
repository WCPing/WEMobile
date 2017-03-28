/**
 * Created by Administrator on 2017/3/23.
 */
(function() {
    angular.module('ionicApp', ['ionic', 'controllers'])

        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('tabs', {
                    url: "/tab",
                    abstract: true,
                    templateUrl: "templates/tabs.html"
                })
                .state('tabs.home', {
                    url: "/home",
                    views: {
                        'home-tab': {
                            templateUrl: "templates/home.html",
                            controller: 'HomeTabCtrl'
                        }
                    }
                })
                .state('tabs.talks', {
                    url: "/talks",
                    views: {
                        'talks-tab': {
                            templateUrl: "templates/talks.html",
                            controller:'talksCtrl'
                        }
                    }
                })
                .state('tabs.news', {
                    url: "/news",
                    views: {
                        'news-tab': {
                            templateUrl: "templates/news.html",
                            controller:'newsCtrl'
                        }
                    }
                })
                /* .state('tabs.mine', {
                 url: "/mine",
                 views: {
                 'mine-tab': {
                 templateUrl: "templates/mine.html"
                 }
                 }
                 })*/
            ;


            $urlRouterProvider.otherwise("/tab/home");

        });
})();