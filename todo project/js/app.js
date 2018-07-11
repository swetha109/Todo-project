angular.module("miniproject",[])
.controller("ctrl",ctrl)

function ctrl($scope)
{
   
    $scope.todoarr=[];
    $scope.add=function()
  {
    $scope.todoarr.push($scope.todovalue);
    console.log($scope.todoarr);
    $scope.todovalue='';
   }
}