
///Creation de controller MsgReadCtrl

    // Creation de controller UserCRUDCtrl
    //USER

application.controller('UserCRUDCtrl',['$scope','UserCRUDService',
function ($scope,UserCRUDService) {



//Mes Variables globales

    //get-User
      $scope.getUser = function () {
          UserCRUDService.getUser()
            .then(function success(response) {
                $scope.user = response.data;
                $scope.message='User get';
                $scope.errorMessage = '';
                console.log( $scope.message);
                
            },
            function error (response) {
                $scope.message = '';
                if (response.status === 404){
                    $scope.errorMessage = 'User not found!';
                    console.log( $scope.errorMessage);
                }
                else {
                    $scope.errorMessage = "Error getting user!";
                    console.log( $scope.errorMessage);
                }
            });
      };
      $scope.getAllUsers = function () {
        UserCRUDService.getAllUsers()
          .then(function success(response) {
              $scope.users = response.data;
              $scope.message='get All';
              $scope.errorMessage = '';
              console.log($scope.message)
          },
          function error (response) {
              $scope.message='';
              $scope.errorMessage = 'Error getting users!';
              console.log( $scope.errorMessage)
          });
    }
      
//Add user 
$scope.addUser = function () {
    //if ($scope.user != null && $scope.user.email) {
        UserCRUDService.addUser($scope.user.firstName,
            $scope.user.lastName,
            $scope.user.email,$scope.user.phoneNumber,
            $scope.user.passWord)
          .then (function success(response){
             
              $scope.message = 'User added!';
              $scope.errorMessage = '';
              console.log( $scope.message);
          },
          function error(response){
              $scope.errorMessage = 'Error adding user!';
              $scope.message = '';
              console.log( $scope.errorMessage);
        });
    }

$scope.updateUser = function () {
    UserCRUDService.updateUser($scope.user.firstName,
        $scope.user.lastName,
        $scope.user.email,$scope.user.phoneNumber,
        $scope.user.passWord)
      .then(function success(response) {
          $scope.message = 'User data updated!';
          console.log( $scope.message)
          $scope.errorMessage = '';
      },
      function error(response) {
          $scope.errorMessage = 'Error updating user!';
          $scope.message = '';
          console.log( $scope.errorMessage)
      });
}

$scope.deleteUser = function () {
    UserCRUDService.deleteUser($scope.user.id)
      .then (function success(response) {
          $scope.message = 'User deleted!';
          $scope.User = null;
          $scope.errorMessage='';
          console.log( $scope.Message)
      },
      function error(response) {
          $scope.errorMessage = 'Error deleting user!';
          $scope.message='';
          console.log( $scope.errorMessage)
      });
}



}]);