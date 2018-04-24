describe("Test HomeController", function(){


		beforeEach(module('leaseWeb'));
		var vm;
		var ServersService, $provide;
		
		// Mock Data to validate against the result
		var ramList = ["2GB", "4GB","8GB","12GB","16GB","24GB","32GB","48GB", "64GB", "96GB", "128GB"];
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
			var $scope = {};
			vm = _$controller_('HomeController', {'$scope': $scope})
		}));

		
		describe("Test Defaults:", function(){
			it("Controller to be defined", function(){
				expect(vm).toBeDefined();
			});

			it("Check title", function(){
				expect(vm.title).toBe('Home page');
				expect(vm.no_data).toBe('No data found');
			});
			
		});

		describe("Should exist", function(){
			it("filterRam,fliterHdd, filterLocation ", function(){
				expect(vm.filterRam).toBeDefined();
				expect(vm.fliterHdd).toBeDefined();
				expect(vm.filterLocation).toBeDefined();
			});
		});

		describe("Master Data Match", function(){
			it("Ram List", function(){
				expect(vm.optionsList).toEqual(ramList);
			});

			it("HDD List", function(){
				expect(vm.hdd).toEqual(hddList);
			});

			it("Location List", function(){
				expect(vm.locations).toEqual(locationList);
			});
		})
});