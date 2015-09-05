(function () {

    angular.module("volunteerVerify")
           .directive('vvVolunteerTable', function () {
               return {
                   restrict: 'E',
                   scope: {
                       volunteers: "=volunteers"
                   },
                   templateUrl: "app/volunteers/volunteerTableView.html"
               };
           });
}());