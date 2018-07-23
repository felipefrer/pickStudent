angular.module('pickStudent').factory('studentAPI', function ($http, config) {
    
    var _getStudents = function () {

         return $http.get(config.hoxWiBaseUrl + 'getStudent');
    };

    var _addStudent = function (student) {

        $http.defaults.useXDomain = true;
        
        delete $http.defaults.headers.common['X-Requested-With'];

        return $http.put(config.hoxWiBaseUrl + 'addStudent', student);
    };

    return {

        getStudents: _getStudents,
        addStudent: _addStudent
    };
});