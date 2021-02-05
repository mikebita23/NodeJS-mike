//Coontroller Prospects
application.controller('prospectgetAllController',['$scope','prospectService','$routeParams',
function ($scope,prospectService, $routeParams) {   
         
        prospectService.getAllProspect()
            .then (function success(response){     
                $scope.message = 'prospect has be added succes!';
                $scope.errorMessage = '';
                console.log( $scope.message);
                console.log(response.data)
            },
            function error(response){
                $scope.errorMessage = 'error prospect can\'t be added';
                $scope.message = '';
                console.log( $scope.errorMessage);
            });
}]);

application.controller('prospectController',['$scope','prospectService','$routeParams',
    function ($scope,prospectService, $routeParams) {   
        $scope.addProspect = function () {         
            prospectService.addProspect($scope.nom_Prospect,$scope.prenom_Prospect,$scope.numero_tel)
                .then (function success(response){     
                    $scope.message = 'prospect has be added succes!';
                    $scope.errorMessage = '';
                    console.log( $scope.message);
                    console.log(response.data)
                },
                function error(response){
                    $scope.errorMessage = 'error prospect can\'t be added';
                    $scope.message = '';
                    console.log( $scope.errorMessage);
                });
        }
     

}]);