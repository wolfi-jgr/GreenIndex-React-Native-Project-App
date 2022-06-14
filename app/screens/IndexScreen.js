import React, {useEffect, useState} from "react";
import {Alert, Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {BarChart} from "react-native-gifted-charts";
import {IconButton} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {
	addFav,
	rmvFav,
	sortFavGreenAsc,
	sortFavGreenDesc,
	sortFavNameAsc,
	sortFavNameDesc
} from "../actions/FavActions";
import CalcGreenIndex from "../components/CalcGreenIndex";
import {useIsFocused} from "@react-navigation/native";


function IndexScreen({navigation, route}) {
	const company = route.params.item; //selected company in searchbar/ favourite screen

	const data = useSelector((state) => state);//useSelector makes it possible to display the state (in this
	// screen
	const favourites = data.root.fav.favourites;
	const sortValue = data.root.fav.sortValue;

	const dispatch = useDispatch(); //useDispatch makes it possible to write on the state in the store
	function addFavourite() {
		if (company !== "" && favourites.find(element => element === company) === undefined)
			dispatch(addFav(company)); //call/ bind action which adds the company to favourites with store
	}

	function rmvFavourite() {
		favourites.map((fav, i) => {
			if (fav.id === company.id)
				dispatch(rmvFav(fav));
		})
	}

	const companyName = company.company_name;
	const emissions = company.emissions;
	const sealedArea = company.sealed_area;
	const overexploitation = company.overexploitation;
	const waterConsumption = company.water_consumption;
	const longSupplyChain = company.long_supply_chain;
	const afforestation = company.afforestation;
	const greenEnergy = company.green_energy;
	const regionalSuppliers = company.regional_suppliers;
	const wasteManagement = company.waste_management;
	const sealsOfApproval = company.seals_of_approval;
	const greenInvestment = company.green_investment;


	const [iconName, setIconName] = useState("star-outline")

	const isFocused = useIsFocused();
	//When we add a favourite then remove it on the FavouriteScreen
	//and navigate back to the IndexScreen the change should be reflected


	useEffect(() => {
		setIconName(favourites.map((c) => company.id === c.id).includes(true) ? "star" : "star-outline")
	}, [company, isFocused])

	const barData1 = [
		{value: emissions, label: 'EMI', frontColor: '#4ABFF3'},
		{value: sealedArea, label: 'VF', frontColor: '#79C3DB'},
		{value: overexploitation, label: 'NH', frontColor: '#28B2B3'},
		{value: waterConsumption, label: 'WAV', frontColor: '#4ADDBA'},
		{value: longSupplyChain, label: 'LK', frontColor: '#91E3E3'},
		{value: afforestation, label: 'AUF', frontColor: '#4ABFF4'},
	];
	const barData2 = [

		{value: greenEnergy, label: 'GE', frontColor: '#79C3DB'},
		{value: regionalSuppliers, label: 'RZ', frontColor: '#28B2B3'},
		{value: wasteManagement, label: 'AM', frontColor: '#4ADDBA'},
		{value: sealsOfApproval, label: 'GÜS', frontColor: '#91E3E3'},
		{value: greenInvestment, label: 'GI', frontColor: '#91E3E3'},
	];

	//Passing the company object and calculating the GreenIndex and rounding it to 2 decimal digits here.
	const avg = CalcGreenIndex(company).toPrecision(2);

	function sort() {
		if (sortValue === "Green_Asc") { //if the list is sorted by Green Index (low to
			//high) before adding new company, it should be sorted like that afterwards
			dispatch(sortFavGreenAsc());
		}
		if (sortValue === "Green_Desc") { //analog to above
			dispatch(sortFavGreenDesc());
		}
		if (sortValue === "Name_Asc") { //analog to above
			dispatch(sortFavNameAsc());
		}
		if (sortValue === "Name_Desc") { //analog to above
			dispatch(sortFavNameDesc());
		}
	}

	return (
		<ScrollView style={styles.page}>
			<View style={{flexDirection: "row"}}>
				<View style={{flex: 1}}>
					<Text style={styles.company}>{companyName}
						<IconButton
							style={{alignSelf: 'flex-end'}}
							icon={iconName}
							size={50}
							onPress={() => {
								if (iconName === "star-outline") {
									setIconName("star")
									addFavourite() //add to favourites
									sort();
								}
								if (iconName === "star") {
									rmvFavourite();
									setIconName("star-outline")
								}
							}}
						/>
					</Text>
				</View>
			</View>
			<View>
				{/*displaying the calculated index*/}

				<Text style={styles.avgIndex}>
					Index: {avg}
					<IconButton
						style={{alignSelf: 'flex-end'}}
						icon={"information-outline"}
						size={40}
						onPress={() => {
							navigation.navigate('Criteria')
						}}
					/>
				</Text>
				{/*icon button to redirect to the criteria screen*/}

			</View>
			{/*table of the different data fetched*/}
			<View style={{flexDirection: "row"}}>
				<View style={{flex: 1}}>
					<Text style={styles.criteriaText}> Emissionen: {emissions}</Text>
					<Text style={styles.criteriaText}> Versiegelung: {sealedArea}</Text>
					<Text style={styles.criteriaText}> Nachhaltigkeit: {overexploitation}</Text>
					<Text style={styles.criteriaText}> Wasserverbrauch: {waterConsumption}</Text>
					<Text style={styles.criteriaText}> Lieferketten: {longSupplyChain}</Text>
					<Text style={styles.criteriaText}> Aufforstung: {afforestation}</Text>
				</View>
				<View style={{flex: 1}}>
					<Text style={styles.criteriaText}> Grüne Energie: {greenEnergy}</Text>
					<Text style={styles.criteriaText}> Regionale Zulieferer: {regionalSuppliers}</Text>
					<Text style={styles.criteriaText}> Abfallmanagement: {wasteManagement}</Text>
					<Text style={styles.criteriaText}> Gütesiegel: {sealsOfApproval}</Text>
					<Text style={styles.criteriaText}> Grüne Investition: {greenInvestment}</Text>
				</View>
			</View>
			<BarChart
				maxValue={1}
				data={barData1}
				isAnimated
				spacing={0}
				width={1}
				height={1}
				hideAxesAndRules={true}
			/>
			{/*barcharts to display the data and to give better visualisation*/}
			<View style={styles.barChartView}>
				<Text style={styles.TextChart}>Index Kriterien</Text>
				<BarChart
				showFractionalValue
				showYAxisIndices
				maxValue={10}
				data={barData1}
				isAnimated
				disablePress
				/>
			</View>
			<Text></Text>
			<View style={styles.barChartView}>
				<Text style={styles.TextChart}>Index Kriterien</Text>
				<BarChart
				showFractionalValue
				showYAxisIndices
				maxValue={10}
				data={barData2}
				isAnimated
				disablePress
				/>
			</View>

			<Text></Text>
		</ScrollView>
	);

}

//Stylesheet styles below here.
const styles = StyleSheet.create({
	page: {
		alignSelf: "center",
		marginTop: 10,
		marginHorizontal: '1%',
		backgroundColor: '#BBDED6',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		paddingHorizontal: 15,
		paddingVertical: 20
	},
	barChartView: {
		backgroundColor: '#FAE3D9',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
		paddingHorizontal: 3,
		paddingVertical: 5
	},
	company: {
		fontSize: 50,
		fontWeight: "bold",
		color: 'black',
		marginBottom: '5%'
	},
	criteriaText: {
		justifyContent: 'flex-end',
		fontSize: 16
	},
	avgIndex: {
		fontSize: 40,
		fontWeight: "bold",
		color: 'black',
		justifyContent: "flex-start",
		marginBottom: '3%'
	},
	TextChart: {
		alignSelf: "center",
		fontSize: 16,
		fontWeight: "bold"
	},
})

export default IndexScreen;
