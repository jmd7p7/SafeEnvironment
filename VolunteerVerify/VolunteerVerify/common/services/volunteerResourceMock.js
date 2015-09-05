(function () {
    "use strict";

    var app = angular.module("volunteerResourceMock", ["ngMockE2E"]);

    app.run(function ($httpBackend) {
           var volunteers = [
                {
                    'volunteerId': 1,
                    'firstName': 'John',
                    'lastName': 'Doe',
                    'middleInit': '',
                    'status': 'verified',
                    'label': 'warning',
                    'email': 'jd@gmail.com',
                    'phone': '945-978-2465',
                    'DOB': '1985-02-16',
                    'joinDate': '2014-12-11',
                    'isActive': true,
                    'verifications': [
                        {
                            'name': "Background Check",
                            'status': "up-to-date"
                        },
                        {
                            'name': "EMI",
                            'status': "expires soon"
                        }]
                },
                {
                    'volunteerId': 2,
                    'firstName': 'Jane',
                    'lastName': 'Doe',
                    'middleInit': 'Q',
                    'status': 'not verified',
                    'label': 'danger',
                    'email': 'janedoe@gmail.com',
                    'phone': '945-978-9788',
                    'DOB': '1989-07-16',
                    'joinDate': '2015-02-01',
                    'isActive': true,
                    'verifications': [
                        {
                            'name': "Background Check",
                            'status': "up-to-date"
                        },
                        {
                            'name': "EMI",
                            'status': "expired"
                        }]
                },
                {
                    'volunteerId': 3,
                    'firstName': 'Dave',
                    'lastName': 'Smith',
                    'middleInit': 'F',
                    'status': 'verified',
                    'label': 'success',
                    'email': 'daveSmith@gmail.com',
                    'phone': '945-978-2465',
                    'DOB': '1990-08-17',
                    'joinDate': '2013-05-30',
                    'isActive': false,
                    'verifications': [
                        {
                            'name': "Background Check",
                            'status': "up-to-date"
                        },
                        {
                            'name': "EMI",
                            'status': "up-to-date"
                        }]
                },
                {
                    'volunteerId': 4,
                    'firstName': 'Sady',
                    'lastName': 'Jones',
                    'middleInit': '',
                    'status': 'verified',
                    'label': 'warning',
                    'email': 'Sady.Jones@gmail.com',
                    'phone': '945-444-2555',
                    'DOB': '1992-01-17',
                    'joinDate': '2014-21-11',
                    'isActive': true,
                    'verifications': [
                        {
                            'name': "Background Check",
                            'status': "up-to-date"
                        },
                        {
                            'name': "EMI",
                            'status': "expires soon"
                        }]
                },
                {
                    'volunteerId': 5,
                    'firstName': 'Jeff',
                    'lastName': 'Allen',
                    'middleInit': 'R',
                    'status': 'verified',
                    'label': 'success',
                    'email': 'jeffA@gmail.com',
                    'phone': '945-345-2455',
                    'DOB': '1981-07-03',
                    'joinDate': '2012-10-03',
                    'isActive': true,
                    'verifications': [
                        {
                            'name': "Background Check",
                            'status': "up-to-date"
                        },
                        {
                            'name': "EMI",
                            'status': "up-to-date"
                        }]
                }
        ];

           var volunteerUrl = "/api/volunteers";

        $httpBackend.whenGET(volunteerUrl).respond(volunteers);

        var editingRegex = new RegExp(volunteerUrl + "/[0-9][0-9]*", '');

        var searchingRegex = new RegExp(volunteerUrl + "/[A-z]+$", '');

        $httpBackend.whenGET(searchingRegex).respond(function (method, url, data) {
            var result = [];
            var parameters = url.split('/');
            var length = parameters.length;
            var searchParam = parameters[length - 1];

            if (searchParam != "") {
                for (var i = 0; i < volunteers.length; i++) {
                    if (volunteers[i].firstName.match(searchParam) || volunteers[i].lastName.match(searchParam))
                    {
                        result.push(volunteers[i]);
                    }
                }
            }
            return [200, [result], {}];
        });
        //{
        //    var volunteer = { "volunteerId": 0 };
        //    var parameters = url.split('/');
        //    var length = parameters.length;
        //    var id = parameters[length - 1];

        //    if (id > 0) {
        //        for (var i = 0; i < volunteers.length; i++) {
        //            if (id == volunteers[i].volunteerId) {
        //                volunteer = volunteers[i];
        //                break;
        //            }
        //        };
        //    }

        //    return [200, volunteer, {}];
        //});


        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var volunteer = { "volunteerId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < volunteers.length; i++) {
                    if (id == volunteers[i].volunteerId) {
                        volunteer = volunteers[i];
                        break;
                    }
                };
            }

            return [200, volunteer, {}];
        });

        $httpBackend.whenPOST(volunteerUrl).respond(function (method, url, data) {
            var volunteer = angular.fromJson(data);

            if (!volunteer.volunteerId) {
                //adding a new volunteer
                volunteer.volunteerId = volunteers[volunteers.length - 1].volunteerId + 1;
                volunteers.push(volunteer);
            }
            else {
                //updating an existing product
                for (var i = 0; i < volunteers.length; i++) {
                    if (volunteer.volunteerId == volunteers[i].volunteerId) {
                        volunteers[i] = volunteer;
                        break;
                    }
                }
            }

            return [200, volunteer, {}];
        });

        $httpBackend.whenGET(/app/).passThrough();
    });
}());