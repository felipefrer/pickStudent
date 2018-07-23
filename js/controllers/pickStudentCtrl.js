angular.module("pickStudent").controller("pickStudentCtrl", function ($scope, studentAPI, countryAPI, serialGeneratorAPI, $filter) {

    $scope.App = "Pick Student Randomly";
    
    $scope.countries = [];

    var loadCountries = function () {

        countryAPI.getCountries().then(function successCallback(response){

            $scope.countries = response.data.results;
            
            // console.log($nameFilter($scope.countries[0]));
                
            // alert("Countries were loading! " + response.status);
        }, function errorCallback(response) {
            // alert("Something wrong happened with countries! " + response.data);    
        });
    };
    
    $scope.students = [];

    var loadStudents = function () {

        studentAPI.getStudents().then(function successCallback(response) {

            $scope.students = response.data.results;            
            // alert("Students were loading! " + response.status);
        }, function errorCallback(response) {
            // alert("Something wrong happened with students! " + response.data);
        });
    };

    $scope.AddStudent = function (student) {

        studentAPI.addStudent(student);
        loadStudents();
    };

    loadCountries();
    loadStudents();
    console.log($scope.$id);
});
