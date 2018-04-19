(function(){
	'use strict';
	
	angular.module("leaseWeb").controller("HomeController", HomeController);
	
	HomeController.$inject = ['ServersService'];
	
	function HomeController(ServersService){

		var vm = this;
		vm.serverList = [];

		// Initial method to populate the default
		vm.init = function(){
			vm.title = 'Home page';
			vm.getServerList();
			vm.filterRam();
			vm.fliterHdd();
			vm.filterLocation();
		}

		// Get all servers
		vm.getServerList = function(){
			ServersService.getServerList(function(response){
				vm.serverList = response;
				console.log(response);
			}, function(error){
				 console.log("Error : Unable to get server list.")
			})
		}

		// Filter data
		vm.filterRam = function(){
			vm.optionsList = ["2GB", "4GB","8GB","12GB","16GB","24GB","32GB","48GB", "64GB", "96GB"];
			vm.selected = {
			    list: ['option1']
			  };
		}

		vm.fliterHdd = function(){
			vm.hdd = ["SAS", "SATA", "SSD"]
		}

		vm.filterLocation = function(){
			vm.locations = ["AmsterdamAMS-01", "Washington D.C.WDC-01", "San FranciscoSFO-12",
							"SingaporeSIN-12", "DallasDAL-10", "FrankfurtFRA-10", "Hong KongHKG-01"
							]
		}


		vm.init();

	}
})();



