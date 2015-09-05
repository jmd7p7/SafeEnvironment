(function () {
    angular.module("volunteerVerify")
           .directive("vvVolunteerSaveEdits", function () {
               return {
                   restrict: 'E',
                   scope: {
                       submit: "=submit"
                   },
                   templateUrl: "app/volunteers/volunteerSaveEditsView.html"
               };
           });

}());