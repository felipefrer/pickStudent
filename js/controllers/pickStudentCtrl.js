angular.module("pickStudent").controller("pickStudentCtrl", function ($scope, studentAPI, countryAPI, serialGeneratorAPI, $filter) {

    $scope.App = "Pick Student Randomly";
    
    $scope.countries = [];

    var loadCountries = function () {

        countryAPI.getCountries().then(function successCallback(response){

            var hoxWiCountries = response.data.results;

            hoxWiCountriesUpperCase = hoxWiCountries.map(function (country) {

                country.name = $filter('name')(country.name);
                country.name = $filter('ellipsis')(country.name, 5);

                return country;
            });

            $scope.countries = hoxWiCountriesUpperCase;
            
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

        console.log($filter('myDate')(student.date));

        var newStudent = {name:student.name, country: {name:student.country.name, code:student.country.code }};

        studentAPI.addStudent(JSON.stringify(newStudent));
        
        loadStudents();
    };

    loadCountries();
    loadStudents();
    console.log($scope.Id);
});
