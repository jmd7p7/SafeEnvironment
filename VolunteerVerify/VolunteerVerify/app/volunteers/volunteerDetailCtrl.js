(function () {

    angular.module("volunteerVerify")
           .controller("VolunteerDetailCtrl", ["volunteer", VolunteerDetailCtrl]);

    function VolunteerDetailCtrl(volunteer) {
        var vm = this;

        vm.volunteer = volunteer;    
    }
}());