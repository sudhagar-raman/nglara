(function(){
	'use strict';
	
	angular.module("leaseWeb").controller("HomeController", HomeController);
	
	HomeController.$inject = ['ServersService', '$scope'];
	
	function HomeController(ServersService, $scope){

		var vm = this;
		vm.request = {};
		vm.title = 'Home page';
		vm.no_data = 'No data found';

		// Initial method to populate the default
		vm.init = function(){
			vm.filterRam();
			vm.fliterHdd();
			vm.filterLocation();
		}

		// Get all servers
		vm.getServerList = function(){
			vm.request.location = '';
			vm.request.hdd = '';
			vm.request.ram = '';

			ServersService.getServerList(function(response){
				vm.object = {serverList:response};
				vm.progressbar = '';
			}, function(error){
				 console.log("Error : Unable to get server list.")
			})
		}

		// Display available Rams
		vm.filterRam = function(){
			vm.optionsList = ["2GB", "4GB","8GB","12GB","16GB","24GB","32GB","48GB", "64GB", "96GB", "128GB"];
			
		}

		// Display Avilable Disk type in UI
		vm.fliterHdd = function(){
			vm.hdd = ["SAS", "SATA2", "SSD"]
		}

		// Display available locations in UI
		vm.filterLocation = function(){
			vm.locations = ["AmsterdamAMS-01", "Washington D.C.WDC-01", "San FranciscoSFO-12",
							"SingaporeSIN-11", "DallasDAL-10", "FrankfurtFRA-10", "Hong KongHKG-01"
							]
		}

		// Get records based on the applied filters
		vm.applyFilters = function(requestParams){
			vm.progressbar = 'Retreiving data please wait...';
			vm.object = {serverList:null};

			ServersService.applyFilters(requestParams, function(response){
				if(response.length <= 0){
					vm.progressbar = vm.no_data;
				}else{
					vm.progressbar = '';
					vm.object = {serverList:response};
				}

				
			}, function(error){
				vm.errorFilter = "Unable to get data for filters";
			})
		}

		// Initializatin method
		vm.init();

	}
})();



