(function () {
    "use strict";
    var app = angular.module('volunteerVerify', ["common.services", "ui.mask","ui.router", "ui.bootstrap"]);

    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/home.html"
            })
            .state("volunteerList", {
                url: "/volunteers",
                templateUrl: "app/volunteers/volunteerListView.html",
                controller:"VolunteerListCtrl as vm"
            })
        .state("volunteerEdit", {
            abstract: true,
            url: "/volunteers/edit/:volunteerId",
            templateUrl: "app/volunteers/volunteerEditView.html",
            controller: "VolunteerEditCtrl as editVm",
            resolve: {
                volunteerResource: "volunteerResource",
                volunteer: function (volunteerResource, $stateParams) {
                    var volunteerId = $stateParams.volunteerId;
                    return volunteerResource.getCalls.get({ volunteerId: volunteerId }).$promise;
                }
            }
        })
        .state("volunteerEdit.details", {
            url: "/details",
            templateUrl: "app/volunteers/volunteerEditDetailsView.html",
            controller: "VolunteerEditDetailsCtrl as editDetailsVm"
        })
        .state("volunteerEdit.verifications", {
            url: "/verifications",
            templateUrl: "app/volunteers/volunteerEditVerificationsView.html"
        })
        .state("volunteerDetail", {
            url: "/volunteers/:volunteerId",
            templateUrl: "app/volunteers/volunteerDetailView.html",
            controller: "VolunteerDetailCtrl as vm",
            resolve: {
                volunteerResource: "volunteerResource",
                volunteer: function (volunteerResource, $stateParams) {
                    var volunteerId = $stateParams.volunteerId;
                    return volunteerResource.getCalls.get({volunteerId: volunteerId}).$promise;
                }
            }
        })
    }]);
}());