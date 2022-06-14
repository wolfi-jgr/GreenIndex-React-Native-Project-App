import React, {useEffect, useState} from "react";
import {Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from "react-redux";
import FavoritesAverageCalculate from "../components/FavotritesAverageCalculate";

//Screen that displays the MyScore, a selection of various Index categories of the Favourites of the User.
function MyScoreScreen({navigation}) {

	const data = useSelector((state) => state); //useSelector makes it possible to display the state (in this
	// screen
	const favourites = data.root.fav.favourites; // root = rootReducer -> fav = favReducer -> favourites = array
	// containing the company-objects


	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.viewStandard}>
				<View style={styles.textView}>
					<Text style={styles.textHeadlineSmall}>
						Hallo Umweltheld:in,
					</Text>
					<Text style={styles.textStandard}>
						Wenn Du Unternehmen zu deinen Favoriten hinzugefügt hast, dann findest du hier einige nette statistiken für
						Dich.
					</Text>
					<Text style={styles.textStandardBig}>
						Du hast aktuell {favourites.length} Unternehmen als Favoriten!
					</Text>
					<Text style={styles.textStandardVeryBig}>
						Dein durchschnittlicher Green Index über alle deine Favoriten
					</Text>
					<Text style={styles.valueBig}>
						{isNaN(FavoritesAverageCalculate(favourites, 'greenIndex')) ? "leer" : FavoritesAverageCalculate(favourites, 'greenIndex')}
					</Text>
					<Text style={styles.textStandard}>
						Was Emissionen angeht sieht es bei dir aktuell so aus
					</Text>
					<Text style={styles.valueStandard}>
						{isNaN(FavoritesAverageCalculate(favourites, 'emissions')) ? "…" : FavoritesAverageCalculate(favourites, 'emissions')}
					</Text>
					<Text style={styles.textStandard}>
						schon ganz gut aber es ist doch immer noch ein bisschen Luft nach Oben damit unsere Athmosphäre sauber
						bleibt.
					</Text>
					<Text style={styles.textStandard}>
						Deine Unternehmen verbrauchen durchschnittlich soviel Wasser:
					</Text>
					<Text style={styles.valueStandard}>
						{isNaN(FavoritesAverageCalculate(favourites, 'waterConsumption')) ? "…" : FavoritesAverageCalculate(favourites, 'waterConsumption')}
					</Text>
					<Text style={styles.textStandard}>
						So aktiv sind Deine Unternehmen im regionalen Umfeld, indem sie mit lokalen Zulieferern zusammenarbeiten
						und so einen weiteren Schritt in Richtung Nachhaltigkeit gehen.
					</Text>
					<Text style={styles.valueStandard}>
						{isNaN(FavoritesAverageCalculate(favourites, 'regionalSuppliers')) ? "…" : FavoritesAverageCalculate(favourites, 'regionalSuppliers')}
					</Text>
					<Text style={styles.textStandard}>
						Auch indirekt tragen Deine Unternehemen eine große verantwortung, etwa wie was sie mit ihrem Gewinn machen
					</Text>
					<Text style={styles.valueStandard}>
						{isNaN(FavoritesAverageCalculate(favourites, 'greenInvestment')) ? "…" : FavoritesAverageCalculate(favourites, 'greenInvestment')}
					</Text>
					<Text style={styles.textStandard}>
						ist der Index dafür wie grün Deine Favoriten ihr Kapital anlegen.
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

//Stylesheet styles below here.
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		//backgroundColor: '#61C0BF'
	},
	textView: {
		marginVertical: '4%',
	},
	textHeadlineSmall: {
		textAlign: "center",
		fontSize: 30,
		marginBottom: 5,
		fontWeight: "bold",
	},
	textStandard: {
		textAlign: "center",
		fontSize: 20,
		margin: 5,
	},
	textStandardBig: {
		textAlign: "center",
		fontSize: 22,
		margin: 5,
		marginTop: 15,
	},
	textStandardVeryBig: {
		textAlign: "center",
		fontSize: 20,
		margin: 5,
		marginTop: 20,
	},
	valueStandard: {
		textAlign: "center",
		fontSize: 26,
		margin: 5,
		color: 'green',
		fontWeight: "bold",
	},
	valueBig: {
		textAlign: "center",
		fontSize: 36,
		margin: 5,
		marginBottom: 15,
		color: 'green',
		fontWeight: "bold",
	},
	viewStandard: {
		marginTop: 10,
		paddingHorizontal: 15,
		marginHorizontal: '1%',
		//backgroundColor: '#FAE3D9',
		backgroundColor: '#BBDED6',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
	},


});

export default MyScoreScreen;
