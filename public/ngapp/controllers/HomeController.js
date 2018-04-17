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
			vm.optionList = ["4GB","8GB","16GB","32GB","64GB","128GB","252GB"];
			vm.selected = {
			    list: ['option1']
			  };
		}



		vm.init();

	}
})();



