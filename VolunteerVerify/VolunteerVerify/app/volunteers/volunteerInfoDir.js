(function () {
    angular.module("volunteerVerify")
        .directive('vvVolunteerInfo', function () {
            return {
                restrict: 'E',
                scope: {
                    volunteer: '=volunteer'
                },
                templateUrl: "app/volunteers/volunteerInfoView.html"
            };
        });
    
}());