(function () {
    angular.module("volunteerVerify")
        .directive('vvEditVolunteerVerification', function () {
            return {
                restrict: 'E',
                templateUrl: "app/volunteers/volunteerEditVerificationView.html"
            };
        });
}());