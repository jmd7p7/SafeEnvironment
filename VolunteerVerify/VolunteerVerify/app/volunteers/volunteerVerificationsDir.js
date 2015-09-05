(function () {

    angular.module('volunteerVerify')
        .directive('vvVolunteerVerifications', function () {
            return {
                restrict: "E",
                scope: {
                    verifications: "=verifications"
                },
                templateUrl: "app/volunteers/volunteerVerificationsView.html"
            };
        });
}());