(function () {
    angular.module("common.services")
        .factory("volunteerResource", ["$resource", "appSettings", volunteerResource]);

    //function volunteerResource($resource) {
    //    return $resource("/api/volunteers/:volunteerId")
    //}

    function volunteerResource($resource, appSettings) {
        return {
            getCalls: $resource(appSettings.serverPath + "/api/volunteers/:volunteerId"),
            searchCalls: $resource(appSettings.serverPath + "/api/volunteers/:searchParam")
        };
    }

}());