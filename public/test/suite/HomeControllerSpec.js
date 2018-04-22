describe("Test HomeController", function(){


		beforeEach(module('leaseWeb'));
		var $controller, ServersService, $provide;
		var ramList = ["2GB", "4GB","8GB","12GB","16GB","24GB","32GB","48GB", "64GB", "96GB"];
		var hddList = ["SAS", "SATA2", "SSD"];
		var locationList = ["AmsterdamAMS-01", "Washington D.C.WDC-01", "San FranciscoSFO-12",
							"SingaporeSIN-11", "DallasDAL-10", "FrankfurtFRA-10", "Hong KongHKG-01"
							];

		beforeEach(function(){
			ServersService = jasmine.createSpy('ServersService', ['getServerList']);
			module(function($provide){
				$provide.value('ServersService', ServersService);
			})
		});

		beforeEach(inject(function(_$controller_){
			$controller = _$controller_
		}));

		
		describe("Test Defaults:", function(){
			it("Controller to be defined", function(){
				expect($controller).toBeDefined();
			});

			it("Check title", function(){
				var $scope = {};
				var controller = $controller('HomeController', {'$scope': $scope});
				expect($scope.title).toBe('Home page');
				expect($scope.no_data).toBe('No data found');
			});
			
		});

		describe("Should exist", function(){
			it("filterRam,fliterHdd, filterLocation ", function(){
				var $scope = {};
				var controller = $controller('HomeController', {'$scope': $scope});
				expect($scope.filterRam).toBeDefined();
				expect($scope.fliterHdd).toBeDefined();
				expect($scope.filterLocation).toBeDefined();
			});
		});

		describe("Master Data Match", function(){
			it("Ram List", function(){
				var $scope = {};
				var controller = $controller('HomeController', {'$scope': $scope});
				expect($scope.optionsList).toEqual(ramList);
			});

			it("HDD List", function(){
				var $scope = {};
				var controller = $controller('HomeController', {'$scope': $scope});
				expect($scope.hdd).toEqual(hddList);
			});

			it("Location List", function(){
				var $scope = {};
				var controller = $controller('HomeController', {'$scope': $scope});
				expect($scope.locations).toEqual(locationList);
			});
		})
});