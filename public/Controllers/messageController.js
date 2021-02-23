///Creation de controller MsgReadCtrl
///MESSAGES 
application.controller('MsgReadCtrl',['$scope','MsgReadService','$routeParams',
 function($scope,MsgReadService,$routeParams){
    

    //Get message All
    $scope.messages=[]

    $scope.getMessages= function () {
       
        MsgReadService.getMessages()
          .then(function success(response) {
              $scope.messages = response.data;
              $scope.message='get All';
              $scope.errorMessage = '';
              console.log($scope.message)         
          },
          function error (response) {
              $scope.message='';
              $scope.errorMessage = 'Error getting users!';
              console.log( $scope.errorMessage)
          });
    };


    $scope.deleteMessage = function() {
        MsgReadService.deleteMessage($scope.message.id)
          .then (function success(response) {
              $scope.message = 'Message deleted!';
              $scope.User = null;
              $scope.errorMessage='';
              console.log( $scope.message)
          },
          function error(response) {
              $scope.errorMessage = 'Error deleting Message!';
              $scope.message='';
              console.log( $scope.errorMessage)
          });
    }

}]);

application.controller('getMessagesController', function getDataUsers($scope, MsgReadService,$http) {
    MsgReadService.getMessages()
    .then(function success(response) {
        $scope.messages = response.data;
        $scope.message='get All';
        $scope.errorMessage = '';
        console.log(response.data)
    },
    function error (response) {
        $scope.message='';
        $scope.errorMessage = 'Error getting users!';
       
    });
}) 
application.controller('MsgForfController', function getDataUsers($scope, MsgReadService,$http) {
    MsgReadService.getAllUserMsgForf()
      .then(function success(response) {
          $scope.userMsgForf = response.data;
          console.log(response.data);
          $scope.message='get Message by user and forfait';
          $scope.errorMessage = '';
          console.log( $scope.message)
      },
      function error (response) {
          $scope.message='';
          $scope.errorMessage = 'Error getting users!';
          console.log( $scope.errorMessage)
      });
}) 



