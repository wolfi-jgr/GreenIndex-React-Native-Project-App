import React from "react";
import {Text, View, SafeAreaView, StyleSheet, ScrollView, Pressable} from 'react-native';

//This screen is pretty much an analogue of the MyScoreScreen.

function AboutScreen({navigation}) {

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.viewStandard}>
				<Text style={styles.textStandard}>
					Die Green Index App ermöglicht es dir, dich über die
					Umweltfreundlichkeit von Unternehmen zu informieren und
					so dein Konsumverhalten zu verbessern. Probiere es gleich
					mal aus und Suche auf „Home“ ein Unternehmen, von dem
					du Produkte kaufst!
				</Text>
				<Pressable style={styles.button} onPress={() => {navigation.navigate('Criteria')}}>
					<Text style={styles.buttonText}>Was bedeutet der Index / Score?</Text>
				</Pressable>
				<Text style={styles.textShort}>
					Die Green Index App wurde erstellt von TeamGreenIndex:
				</Text>
				<Text style={styles.textList}>
					{'\u2022'} Cornelia Zimmel
					{'\n'}
					{'\u2022'} Johannes Brückl
					{'\n'}
					{'\u2022'} Nikolaus Kalhs
					{'\n'}
					{'\u2022'} Wolfgang Jäger
				</Text>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		//backgroundColor: '#61C0BF'
	},
	textHeadline: {
		fontSize: 25,
		fontWeight: "bold",
		color: 'black'
	},
	textStandard: {
		textAlign: "justify",
		fontSize: 17,
	},
	textShort: {
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '5%',
		textAlign: "left",
		fontSize: 17,
	},
	textList: {
		marginLeft: '10%',
		marginRight: '5%',
		marginTop: '2%',
		textAlign: "left",
		fontSize: 17,
	},
	viewHeadline: {
		marginTop: '3%',
		paddingHorizontal: 5,
		backgroundColor: '#FFB6B9',
		borderRadius: 10,
		borderWidth: 1
	},
	viewStandard: {
		marginTop: 10,
		paddingHorizontal: 15,
		paddingVertical: 20,
		marginHorizontal: '1%',
		//backgroundColor: '#FAE3D9',
		backgroundColor: '#BBDED6',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
	},
	button: {
		alignSelf: 'flex-start',
		marginTop: '5%',
		backgroundColor: '#FAEBE0',
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 10
	},
	buttonText: {
		fontSize: 20,
		color: 'black'
	},
});

export default AboutScreen;
