(function(){
	angular.module("leaseWeb").service("ServersService", ServersService);
	
	ServersService.$inject = ['$http', 'API_URL'];

	function ServersService($http, API_URL){
	
		var ServersService = {};

		ServersService.getServerList = function(successCallBack, errorCallBack){
			var url = API_URL + 'serverlist';

			$http.get(url)
					.then(function(response){
						ServersService.successHanlder(response, successCallBack);
					}, function(){
						ServersService.errorHandler(error, errorCallBack);
					})
			
		}

		ServersService.applyFilters = function(requestParams, successCallBack, errorCallBack){
			var url = API_URL + 'filter';
			$http.post(url, requestParams)
					.then(function(response){
						ServersService.successHanlder(response, successCallBack);
					}, function(error){
						ServersService.errorHandler(error, errorCallBack);
					})
		}
		
		// Hanlde the response before return to the view
		ServersService.successHanlder = function(response, successCallBack){
			successCallBack(response.data);
		}

		// Handle the error before sending for better user experiencessssssssss
		ServersService.errorHandler = function(error, errorCallBack){
			errorCallBack(error);
		}

		return ServersService;
	}
})();




