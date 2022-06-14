import React, {useEffect, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Component that returns a SearchBar and a Live Search that updates if text is entered/changed.
const SearchBar = ({navigation}) => {
	//Storing Data and defining Constants.
	const [searchQuery, setSearchQuery] = useState('');
	const onChangeSearch = query => setSearchQuery(query);
	const [data, setData] = useState([]);
	const [tempData, setTempData] = useState([]);
	const [firstLoad, setFirstLoad] = useState(true);

	//Fetching of Data for the Live Search from dummy API.
	const fetchData = async () => {

		const fetchUrl = new URL("https://api.json-generator.com/templates/X11YsqEVNlPK/data");
		fetchUrl.searchParams.append("access_token", "pd83z0rh6i90fp7647pbbo7hljodwp4fhhnq4bgw");
		fetchUrl.searchParams.append("fmt", "json");

		setTimeout(async () => {
			fetch(fetchUrl)
				.then((response) => response.json())
				.then((json) => setData(json))
				.catch((error) => console.error(error))
		}, 10);
	}

	//UseEffect to ensure reload of liveSearch after change in the entered searchQuery. No refetch, buffered data is used.
	useEffect(() => {
		if (firstLoad) {
			fetchData().then();
			setFirstLoad(false);
		}
		if (searchQuery.length === 0) {
			setTempData([]);
		} else {
			setTempData(data.filter(({company_name}) => company_name.toLowerCase().includes(searchQuery.toLowerCase())));
		}
	}, [searchQuery]);

	//Constructing Item that displays the Fetched Company Names that match the entry.
	const Item = ({item, onPress}) => (
		<TouchableOpacity onPress={onPress}>
			<Text style={styles.liveSearchText}>{item.company_name}</Text>
		</TouchableOpacity>
	);

	//Rendering the actual Items of the FlatList, on Tap we navigate to the corresponding IndexScreen.
	const renderItem = ({item}) => {
		return (
			<Item
				item={item}
				onPress={() => navigation.navigate('IndexHS', {
					item: item
				})}
			/>
		);
	};

	return (
		<View>
			<Searchbar style={styles.searchBar}
			           placeholder="Unternehmen suchen"
			           onChangeText={onChangeSearch}
			           value={searchQuery}
			/>
			<FlatList style={styles.list} data={tempData} renderItem={renderItem}/>
		</View>
	);
};

//Stylesheet styles below here.
const styles = StyleSheet.create({
	list: {
		width: '75%',
		height: '65%',
		marginTop: 5,
		alignSelf: "center",
	},
	searchBar: {
		backgroundColor: '#FAEBE0',
	},
	liveSearchText: {
		fontSize: 25,
		backgroundColor: '#FAE3D9',
		marginVertical: 4,
		borderRadius: 10,
		paddingHorizontal: 10,
		alignSelf: "flex-start"
	}
});

export default SearchBar;
