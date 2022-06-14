import React, {useState} from 'react';
import {Text, View, SafeAreaView, Pressable, StatusBar, StyleSheet, Button} from 'react-native';
import SearchBar from "../components/SearchBar";

//Home Screen that displays Brand Name and SearchBar to look for companies. starting point of App.
function HomeScreen({navigation}) {
	return (<SafeAreaView style={styles.container}>
		<View style={styles.brand}>
			<Text style={styles.brandText}>Green Index</Text>
		</View>
		<View style={styles.searchbar}>
			<SearchBar navigation={navigation}/>
		</View>
		<View style={styles.lowButton}>
			<Pressable style={styles.button} onPress={() => navigation.navigate('About')}>
				<Text style={styles.buttonText}>About</Text>
			</Pressable>
		</View>
	</SafeAreaView>);
}

//Stylesheet styles below here.
const styles = StyleSheet.create({
	brand: {
		alignSelf: "center",
		marginTop: '18%',
		//backgroundColor: '#BBDED6',
		borderRadius: 100,
		paddingHorizontal: 15,
		paddingVertical: 20
	},
	brandText: {
		fontSize: 35,
		fontWeight: "bold",
		color: 'black'
	},
	button: {
		backgroundColor: '#FAEBE0',
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 10
	},
	buttonText: {
		fontSize: 20,
		color: 'black'
	},
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		paddingLeft: '10%',
		paddingRight: '10%',
		alignContent: "center",
		//backgroundColor: '#C9E4C5'
		backgroundColor: '#BBDED6',
	},
	searchbar: {
		marginTop: '7%'
	},
	lowButton: {
		alignSelf: 'center',
		marginTop: 'auto',
		marginBottom: '10%',
		elevation: 3
	}
});


export default HomeScreen;
