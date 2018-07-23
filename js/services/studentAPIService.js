angular.module('pickStudent').factory('studentAPI', function ($http, config) {
    
    var _getStudents = function () {

         return $http.get(config.hoxWiBaseUrl + 'getStudent');
    };

    var _addStudent = function (student) {

        return $http.put(config.hoxWiBaseUrl + 'addStudent', student);
    };

    return {

        getStudents: _getStudents,
        addStudent: _addStudent
    };
});