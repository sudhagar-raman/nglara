(function(){
	'use strict';
	
	angular.module("leaseWeb").controller("HomeController", HomeController);
	
	HomeController.$inject = ['ServersService', '$scope'];
	
	function HomeController(ServersService, $scope){

		$scope.request = {};
		$scope.title = 'Home page';
		$scope.no_data = 'No data found';

		// Initial method to populate the default
		$scope.init = function(){
			//$scope.getServerList();
			$scope.filterRam();
			$scope.fliterHdd();
			$scope.filterLocation();
		}

		// Get all servers
		$scope.getServerList = function(){
			$scope.request.location = '';
			$scope.request.hdd = '';
			$scope.request.ram = '';

			ServersService.getServerList(function(response){
				$scope.object = {serverList:response};
				$scope.progressbar = '';
			}, function(error){
				 console.log("Error : Unable to get server list.")
			})
		}

		// Filter data
		$scope.filterRam = function(){
			$scope.optionsList = ["2GB", "4GB","8GB","12GB","16GB","24GB","32GB","48GB", "64GB", "96GB"];
			
		}

		$scope.fliterHdd = function(){
			$scope.hdd = ["SAS", "SATA2", "SSD"]
		}

		$scope.filterLocation = function(){
			$scope.locations = ["AmsterdamAMS-01", "Washington D.C.WDC-01", "San FranciscoSFO-12",
							"SingaporeSIN-11", "DallasDAL-10", "FrankfurtFRA-10", "Hong KongHKG-01"
							]
		}

		$scope.applyFilters = function(requestParams){
			$scope.progressbar = 'Retreiving data please wait...';
			$scope.object = {serverList:null};

			ServersService.applyFilters(requestParams, function(response){
				if(response.length <= 0){
					$scope.progressbar = $scope.no_data;
				}else{
					$scope.progressbar = '';
					$scope.object = {serverList:response};
				}

				
			}, function(error){
				$scope.errorFilter = "Unable to get data for filters";
			})
		}
		$scope.init();

	}
})();



