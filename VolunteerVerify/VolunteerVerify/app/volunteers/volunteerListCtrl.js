(function () {
    angular.module("volunteerVerify")
           .controller("VolunteerListCtrl", ["volunteerResource", VolunteerListCtrl]);

    function VolunteerListCtrl(volunteerResource) {
        var vm = this;
        
        volunteerResource.getCalls.query(function (data) {
            vm.volunteers = data;
        });



        vm.testSearch = function (testData) {
            if (testData == "" || testData == undefined) {
                
                volunteerResource.getCalls.query(function (data) {
                    vm.volunteers = data;
                });
            }
            else {
                volunteerResource.searchCalls.query({ searchParam: testData }).$promise.then(
                    function (result) {
                        vm.volunteers = result[0];
                    },
                    function (error) {
                        console.log(error);
                    }
                );
            }

        };

    }
}());