var g_G = {
	locale : 'kr',
};

// Define the `App12ships` module
g_G.App12ships = angular.module('App12ships', []);

// Define the `Ctlr12ships` controller on the `App12ships` module
g_G.App12ships.controller('Ctrl12ships', function Ctrl12ships($scope) {

	$scope.g_G = g_G;
	g_G.Ctrl12ships = $scope;
	g_G.path_endpoint = g_G.getString('index-main-chat');

	$scope.pageList={
		'index-main-chat' : true,
		'index-user-info' : false,
	};

	$scope.isShowPage = function (page){
		return $scope.pageList[page]==true;
	}

	$scope.showPage = function(page){

		g_G.path_endpoint = page;

		Object.keys($scope.pageList).forEach(k=>{
			if(k==page)
				$scope.pageList[k] = true;
			else 
				$scope.pageList[k] = false;
		});
	}

});




g_G.getString = function (str,locale){
	return str;
}