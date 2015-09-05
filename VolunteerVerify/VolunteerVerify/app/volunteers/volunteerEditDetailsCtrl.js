(function () {
    angular.module("volunteerVerify")
           .controller("VolunteerEditDetailsCtrl", ["$state", VolunteerEditDetailsCtrl]);

    function VolunteerEditDetailsCtrl($state) {
        var editDetailsVm = this;
        editDetailsVm.Open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            editDetailsVm.Opened = !editDetailsVm.Opened;
        };

        
    }
}());