angular.module("Chat").config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/chat");

    // pole view musi byc w parencie
    $stateProvider
        .state('twoCol', {
            "abstract": true,
            url: "",
            views: {
                "main": {
                    templateUrl: "app/template/layout/twoColumnLayout.html"
                }
            }
        })
        .state('twoCol.chat', {
            url: "/chat",
            views: {
                "left@twoCol": {
                    controller: "SpaceListController",
                    templateUrl: "app/template/spaceListAndPeopleList.html"
                }
            }
        })
        .state('twoCol.chat.space', {
            url: "/space/:name",
            views: {
                "right@twoCol": {
                    controller: function() {},
                    templateUrl: "app/template/space.html"
                }
            }
        })
    ;
});
