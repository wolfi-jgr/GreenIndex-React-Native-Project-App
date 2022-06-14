import React from 'react';

//Function to calculate the Green Index of a single object.
//Sums up all categories and divides with length of array arr.
function CalcGreenIndex(company) {
	const arr = [company.emissions, company.sealed_area, company.overexploitation, company.water_consumption,
		company.long_supply_chain, company.afforestation, company.green_energy, company.regional_suppliers,
		company.waste_management, company.seals_of_approval, company.green_investment];

	const sum = (arr.reduce((x, y) => x + y));
	const avg = (sum / arr.length);

	return avg;
}

export default CalcGreenIndex;