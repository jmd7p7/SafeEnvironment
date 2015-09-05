(function () {
    angular.module("volunteerVerify")
           .controller("VolunteerEditCtrl", ["volunteer", "$state", VolunteerEditController]);

    function VolunteerEditController(volunteer, $state) {
        var editVm = this;
        editVm.volunteer = volunteer;

        if (editVm.volunteer && editVm.volunteer.volunteerId) {
            editVm.title = "Edit: " + editVm.volunteer.fullName;
        }
        else {
            editVm.title = "New Volunteer"
        }

        editVm.submit = function () {
            editVm.volunteer.$save();
        };

        editVm.cancel = function () {
            $state.go('volunteerList');
        };
    }
}());