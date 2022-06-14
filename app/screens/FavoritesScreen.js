import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Button, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {rmvFav, sortFavGreenAsc, sortFavGreenDesc, sortFavNameAsc, sortFavNameDesc} from "../actions/FavActions";
import {IconButton} from "react-native-paper";
import calcGreenIndex from "../components/CalcGreenIndex";
import {Dropdown} from "react-native-element-dropdown"


function FavoritesScreen({navigation}) {
	const data = useSelector((state) => state); //useSelector makes it possible to display the state (in this
	// screen
	const favourites = data.root.fav.favourites; // root = rootReducer -> fav = favReducer -> favourites = array
	// containing the company-objects

	const dispatch = useDispatch(); //useDispatch makes it possible to write on the state in the store
	function rmvFavourite(company) { //call action which removes the company to the favourites to the store
		dispatch(rmvFav(company));
	}

	const data_DD = [
		{ label: 'alphabetisch (A - Z)', value: 'Name_Asc' },
		{ label: 'alphabetisch (Z - A)', value: 'Name_Desc' },
		{ label: 'Green Index (aufsteigend)', value: 'Green_Asc' },
		{ label: 'Green Index (absteigend)', value: 'Green_Desc' }]
	const [value, setValue] = useState(null);
	const [isFocus, setIsFocus] = useState(false);

	function sort (sortValue) {
		if (sortValue === "Green_Asc") { //if the sorting by Green Score (low to high) is selected, the corresponding
			//action is called
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

	function alertDelete(fav) {
		Alert.alert(
			"Bist du dir sicher?",
			"Bist du dir sicher, dass du dieses Unternehmen entfernen möchtest?",
			[{text: "Ja", onPress: () => rmvFavourite(fav)}, {text: "Nein"}]
		);
	}


	return (
		<ScrollView style={styles.scrollView}>
			{favourites.length === 0 &&
				<View style = {{alignItems: "center"}}>
					<View>
						<IconButton
							icon = "emoticon-sad-outline"
							size = {60}/>
					</View>
					<View>
						<Text style = {styles.title}>
							Keine Favoriten gefunden!
						</Text>
						<Text style = {styles.subtitle}>
							Wenn Du nach einem Unternehmen gesucht hast, kannst Du auf das "Stern"- Symbol drücken und
							dieses Unternehmen so zu Deinen Favoriten hinzufügen.
						</Text>
					</View>
				</View>}
			{favourites.length !== 0 &&
				<View>
					<Dropdown
						data={data_DD}
						value={value}
						labelField="label"
						valueField="value"
						placeholder={!isFocus ? 'Favoriten sortieren' : 'Favoriten sortieren'} //placeholder if nothing is
						// selected yet and while selecting
						onFocus={() => setIsFocus(true)}
						onChange={item => {
							setValue(item.value);
							setIsFocus(false);
							sort(item.value);
						}}
						style = {styles.dropdown}
					/>
					{favourites.map((fav, i) => {
						return (
							<TouchableOpacity key={i}
											  style={styles.button}
											  onPress={() => navigation.navigate("IndexFS", {item: fav})}>
								<View style={{justifyContent: "flex-start", flex: 1}}>
									<View>
										<Text style={{fontSize: 17, marginLeft: "4%"}}>
											{fav.company_name}
										</Text>
									</View>
									<View>
										<Text style={{fontSize: 13, marginLeft: "4%"}}>
											Green Index: {calcGreenIndex(fav).toPrecision(2)}
										</Text>
									</View>
								</View>
								<View style={{justifyContent: "flex-end"}}>
									<IconButton
										icon="delete"
										size={30}
										onPress={() => alertDelete(fav)}/>
								</View>
							</TouchableOpacity>
						)
					})}
				</View>
			}
		</ScrollView>
	)
}

//Stylesheet styles below here.
const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		flex: 1,
		alignItems: "center",
		backgroundColor: "#FAEBE0",
		paddingHorizontal: "1%",
		marginHorizontal: "8%",
		marginVertical: "1%",
		borderRadius: 10
	},
	scrollView: {
		backgroundColor: '#BBDED6',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		marginHorizontal: '1%',
		marginTop: 10
	},
	dropdown: {
		backgroundColor: "#FAEBE0",
		height: 50,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: "4%",
		marginHorizontal: "3%",
		marginVertical: "3%"
	},
	title: {
		fontSize: 25,
		textAlign: "center",
		marginHorizontal: "7%",
		marginBottom: "3%"
	},
	subtitle: {
		fontSize: 17,
		textAlign: "center",
		marginHorizontal: "7%",
		lineHeight: 21
	}
});

export default FavoritesScreen;