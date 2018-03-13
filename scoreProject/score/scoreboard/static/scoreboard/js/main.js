var app=angular.module('Dashboard',[]);


app.controller('DashboardCtrl',['$scope',function($scope){
	
	
	Message='{{message}}'
	$scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];

    

}]);