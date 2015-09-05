(function () {
    angular.module("common.services")
        .factory("testResource", ["$resource", testResource]);

    function testResource($resource) {
        return $resource("/api/volunteers/:searchParam")
    }
}());