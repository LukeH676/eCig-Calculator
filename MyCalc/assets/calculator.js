/* JavaScript Document */

(function(){
	
	
	var app = angular.module('myCalcu',[]);
	
		app.controller('CalculatorController', ['$scope', function($scope){
	
		
	
		$scope.current_cPerDay = 25;
		//$scope.location_avgCost = [12.518, 12.512,12.636,14.867,16.848,
		//			12.14,11.015,14.907,15.311,16.06,14.618,15.486,14.123];
					//YK BC AB SK MB ON QC NL NB NS PEI NT NU
		$scope.provinceList = ["AB","BC","NB","MB","NL","NS","NWT","Nu","ON","PEI","SK","YK","QC"];
		
		/*$scope.keyVal = {
			"YK" : 12.518,
			"BC" : 12.512,
			"AB" : 12.636,
			"SK" : 14.867,
			"MB" : 16.848,
			"ON" : 12.14,
			"QC" : 11.015,
			"NL" : 14.907,
			"NB" : 15.311,
			"NS" : 16.06,
			"PEI": 14.618,
			"NWT": 15.486,
			"NU" : 14.123
		}*/
		$scope.current_cost = 12.151256;
		//$scope.current_hours = 3;
		$scope.total_days = 365;
		$scope.cost_year = 0.00
		
		/*$scope.inc_conversion = .0625;
		$scope.hal_conversion = .0450;
		$scope.cfl_conversion = .0146;
		$scope.led_conversion = .0125;*/
		
		
		$scope.calculate = function(){
			// get the current wattage - Lmuens * Conversion 
		
		switch($scope.nameTest){

				case "YK":
				current_cost = 12.518;
				$scope.prov_name = "Yukon";
				break;
				case "BC":
				$scope.current_cost = 12.512;
				$scope.prov_name = "British Columbia";
				break;
				case "AB":
				$scope.current_cost = 12.636;
				$scope.prov_name = "Alberta";
				break;
				case "SK":
				$scope.current_cost = 14.867;
				$scope.prov_name = "Saskatchewan";
				break;
				case "MB":
				$scope.current_cost = 16.848;
				$scope.prov_name = "Manitoba";
				break;
				case "ON":
				$scope.current_cost = 12.14;
				$scope.prov_name = "Ontario";
				break;
				case "QC":
				$scope.current_cost = 11.015;
				$scope.prov_name = "Ontario";
				break;
				case "NL":
				$scope.current_cost = 14.907;
				$scope.prov_name = "Newfound Land";
				break;
				case "NB":
				$scope.current_cost = 15.311;
				$scope.prov_name = "New Brunswick";
				break;
				case "NS":
				$scope.current_cost = 16.06;
				$scope.prov_name = "Nova Scotia";
				break;
				case "PEI":
				$scope.current_cost = 14.618;
				$scope.prov_name = "Prince Edward Islands";
				break;
				case "NWT":
				$scope.current_cost = 15.486;
				$scope.prov_name = "North West Territories";
				break;
				case "NU":
				$scope.current_cost = 14.123;
				$scope.prov_name = "Nunavut";
				break;
			}; 
			$scope.perCigCost = ($scope.current_cost / 25 ).toFixed(2);
			$scope.cost_year = (($scope.current_cost / 25) * ($scope.current_cPerDay * $scope.total_days)).toFixed(1);
			$scope.numOfCigs = $scope.current_cPerDay * $scope.total_days;
			/*$scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
			$scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);
			$scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);
			$scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1);*/
			
		//	if( $scope.current_hours > 24){$scope.current_hours = 3; }
			
		//	var total_hours = $scope.total_days * $scope.current_hours;
		//	var cost = $scope.current_cost / 100;
			
	/*	$scope.inc_cost = ((($scope.inc_wattage * total_hours) / 1000) * cost).toFixed(2);
		$scope.hal_cost = ((($scope.hal_wattage * total_hours) / 1000) * cost).toFixed(2);
		$scope.cfl_cost = ((($scope.cfl_wattage * total_hours) / 1000) * cost).toFixed(2);
		$scope.led_cost = ((($scope.led_wattage * total_hours) / 1000) * cost).toFixed(2);*/
			
			
		}
		
		$scope.calculate();
		
	
	
	
	
		}]);
	
	
	
	
	
	
	
	
	
})();

