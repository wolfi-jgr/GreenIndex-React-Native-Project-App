import React from 'react';
import calcGreenIndex from "./CalcGreenIndex";

//Function to Sum up all Elements in the Array and average it.
function SumUpAndAverage(arr) {
	return (arr.reduce((x, y) => x + y, 0) / arr.length);
}

//Function with Switch statements to decide what to average and to create maps of the desired data.
function FavoritesAverageCalculate(favourites, category) {
	//Amount of decimal places to round to.
	const precision = 2;

	switch (category) {
		case 'greenIndex':
			return SumUpAndAverage(favourites.map((fav) => calcGreenIndex(fav))).toPrecision(precision);
		case 'emissions':
			return SumUpAndAverage(favourites.map((fav) => fav.emissions)).toPrecision(precision);
		case 'sealedArea':
			return SumUpAndAverage(favourites.map((fav) => fav.sealed_area)).toPrecision(precision);
		case 'overexploitation':
			return SumUpAndAverage(favourites.map((fav) => fav.overexploitation)).toPrecision(precision);
		case 'waterConsumption':
			return SumUpAndAverage(favourites.map((fav) => fav.water_consumption)).toPrecision(precision);
		case 'longSupplyChain':
			return SumUpAndAverage(favourites.map((fav) => fav.long_supply_chain)).toPrecision(precision);
		case 'afforestation':
			return SumUpAndAverage(favourites.map((fav) => fav.afforestation)).toPrecision(precision);
		case 'greenEnergy':
			return SumUpAndAverage(favourites.map((fav) => fav.green_energy)).toPrecision(precision);
		case 'regionalSuppliers':
			return SumUpAndAverage(favourites.map((fav) => fav.regional_suppliers)).toPrecision(precision);
		case 'wasteManagement':
			return SumUpAndAverage(favourites.map((fav) => fav.waste_management)).toPrecision(precision);
		case 'sealsOfApproval':
			return SumUpAndAverage(favourites.map((fav) => fav.seals_of_approval)).toPrecision(precision);
		case 'greenInvestment':
			return SumUpAndAverage(favourites.map((fav) => fav.green_investment)).toPrecision(precision);
	}
}

export default FavoritesAverageCalculate;