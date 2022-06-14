import React from "react";
import {Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {DataTable} from "react-native-paper";

function CriteriaScreen({navigation}) {

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.viewStandard}>
				<Text style={styles.textStandard}>
					Der Green Index soll die Umweltfreundlichkeit von Unternehmen
					durch einen Score von 0 (am Schlechtesten) bis 10 (am Besten) schnell erfassbar machen. Es gibt
					11 Kategorien die ebenfalls so bewertet werden, der Score ist
					dann der Durchschnitt über diese Werte. Hier findest du eine
					Aufschlüsselung der Kategorien in ihre Scores und entsprechende
					Einheiten.
				</Text>
				<Text style={styles.textSubheader}>
					Emissionen
				</Text>
				<Text style={styles.textStandard}>
					Je weniger CO2 Austoß per Jahr umso besser, ein besserer Score bedeutet
					 das ¼-fache des Austoßes des vorherigen.
				</Text>
				<DataTable>
      					<DataTable.Header>
      					  <DataTable.Title>Bedingung</DataTable.Title>
      					  <DataTable.Title numeric>CO2 per Jahr</DataTable.Title>
      					  <DataTable.Title numeric>Score</DataTable.Title>
      					</DataTable.Header>

      					<DataTable.Row>
      					  <DataTable.Cell>≤</DataTable.Cell>
      					  <DataTable.Cell numeric>8 t</DataTable.Cell>
      					  <DataTable.Cell numeric>10</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>⋮</DataTable.Cell>
      					  <DataTable.Cell numeric>⋮</DataTable.Cell>
      					  <DataTable.Cell numeric>⋮</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>≤</DataTable.Cell>
      					  <DataTable.Cell numeric>32768 t</DataTable.Cell>
      					  <DataTable.Cell numeric>4</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>≤</DataTable.Cell>
      					  <DataTable.Cell numeric>131072 t</DataTable.Cell>
      					  <DataTable.Cell numeric>3</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>≤</DataTable.Cell>
      					  <DataTable.Cell numeric>524288 t</DataTable.Cell>
      					  <DataTable.Cell numeric>2</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>≤</DataTable.Cell>
      					  <DataTable.Cell numeric>2097152 t</DataTable.Cell>
      					  <DataTable.Cell numeric>1</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>></DataTable.Cell>
      					  <DataTable.Cell numeric>2097152 t</DataTable.Cell>
      					  <DataTable.Cell numeric>0</DataTable.Cell>
      					</DataTable.Row>
    				</DataTable>

				<Text style={styles.textSubheader}>
					Versiegelte Fläche
				</Text>
				<Text style={styles.textStandard}>
					Je weniger versiegelter Boden per Jahr umso besser, ein besserer Score
					bedeutet  das ½der Fläche des voherigen.
				</Text>
				<Text style={styles.textList}>
					1 Ar = 1 a = 100m²
					{'\n'}
					1 Hektar = 1 ha = 100 a = 10.000m²
				</Text>
				<DataTable>
      					<DataTable.Header>
      					  <DataTable.Title>Bedingung</DataTable.Title>
      					  <DataTable.Title numeric>Fläche per Jahr</DataTable.Title>
      					  <DataTable.Title numeric>Score</DataTable.Title>
      					</DataTable.Header>

      					<DataTable.Row>
      					  <DataTable.Cell>≤</DataTable.Cell>
      					  <DataTable.Cell numeric>977 m²</DataTable.Cell>
      					  <DataTable.Cell numeric>10</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>⋮</DataTable.Cell>
      					  <DataTable.Cell numeric>⋮</DataTable.Cell>
      					  <DataTable.Cell numeric>⋮</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>≤</DataTable.Cell>
      					  <DataTable.Cell numeric>625 a</DataTable.Cell>
      					  <DataTable.Cell numeric>4</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>≤</DataTable.Cell>
      					  <DataTable.Cell numeric>1250 a</DataTable.Cell>
      					  <DataTable.Cell numeric>3</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>≤</DataTable.Cell>
      					  <DataTable.Cell numeric>25 ha</DataTable.Cell>
      					  <DataTable.Cell numeric>2</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>≤</DataTable.Cell>
      					  <DataTable.Cell numeric>50 ha</DataTable.Cell>
      					  <DataTable.Cell numeric>1</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>></DataTable.Cell>
      					  <DataTable.Cell numeric>50 ha</DataTable.Cell>
      					  <DataTable.Cell numeric>0</DataTable.Cell>
      					</DataTable.Row>
    				</DataTable>
				<Text style={styles.textSubheader}>
					Nachhaltigkeit
				</Text>
				<Text style={styles.textStandard}>
					Je länger ein Unternehmen ohne
					Standort-/Nutflächenerweiterung auskommt,
					umso besser.
					Der Score entspricht der Anzahl der prognostizierten
					Jahrzehnte, in denen eine solche Erweiterung nicht
					notwendig ist, durch 10. 
				</Text>
				<Text style={styles.textSubheader}>
					Wasserverbrauch
				</Text>
				<Text style={styles.textStandard}>
					Ein zu Emissionen und Aufforstung äquivalentes Schema,
					je weniger Wasserverbrauch, umso besser.
				</Text>
				<Text style={styles.textSubheader}>
					Lieferketten
				</Text>
				<Text style={styles.textStandard}>
					Ein zu Emissionen und Aufforstung äquivalentes Schema,
					je kürzere Lieferketten, umso besser.
				</Text>
				<Text style={styles.textSubheader}>
					Aufforstung
				</Text>
				<Text style={styles.textStandard}>
					Je mehr Aufforstung per Jahr umso besser, ein besserer Score
					bedeutet das 2-fache der Fläche des voherigen.
				</Text>
				<DataTable>
      					<DataTable.Header>
      					  <DataTable.Title>Bedingung</DataTable.Title>
      					  <DataTable.Title numeric>Fläche per Jahr</DataTable.Title>
      					  <DataTable.Title numeric>Score</DataTable.Title>
      					</DataTable.Header>

      					<DataTable.Row>
      					  <DataTable.Cell>≥</DataTable.Cell>
      					  <DataTable.Cell numeric>5.12 ha</DataTable.Cell>
      					  <DataTable.Cell numeric>10</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>⋮</DataTable.Cell>
      					  <DataTable.Cell numeric>⋮</DataTable.Cell>
      					  <DataTable.Cell numeric>⋮</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>≥</DataTable.Cell>
      					  <DataTable.Cell numeric>100 m²</DataTable.Cell>
      					  <DataTable.Cell numeric>1</DataTable.Cell>
      					</DataTable.Row>

      					<DataTable.Row>
      					  <DataTable.Cell>{'<'}</DataTable.Cell>
      					  <DataTable.Cell numeric>100 m²</DataTable.Cell>
      					  <DataTable.Cell numeric>0</DataTable.Cell>
      					</DataTable.Row>
    				</DataTable>
				<Text style={styles.textSubheader}>
					Grüne Energie
				</Text>
				<Text style={styles.textStandard}>
					Je mehr grüne Energie das Unternehmen verwendet
					umso besser. Die Prozent der im letzten Jahr genutzten grünen
					Energie durch 10 entsprechen dem Score.
				</Text>
				<Text style={styles.textSubheader}>
					Regionale Zulieferer
				</Text>
				<Text style={styles.textStandard}>
					Anteil von regionalen Zulieferern an allen 
					Zulieferern in Prozent, durch 10.
				</Text>
				<Text style={styles.textSubheader}>
					Abfallmanagement
				</Text>
				<Text style={styles.textStandard}>
					Anteil des Abfalls der nach Best Practices
					entsorgt wird an allem Abfall in Prozent, durch 10.
				</Text>
				<Text style={styles.textSubheader}>
					Gütesiegel
				</Text>
				<Text style={styles.textStandard}>
					Durchschnittliches Abschneiden bei branchenrelevanten
					Bewertungen, die ebenfalls eine Einteilung in 10
					Qualitätskategorien oder eine Skalierung danach zulassen.
				</Text>
				<Text style={styles.textSubheader}>
					Grüne Investition
				</Text>
				<Text style={styles.textStandard}>
					Anteil des Profits des letzten Jahres
					der für ökologische Investionen verwendet
					wurde, in Prozent.
				</Text>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	textSubheader: {
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '5%',
		textAlign: "left",
		fontSize: 17,
		fontWeight: "bold",
		color: 'black'
	},
	textStandard: {
		marginBottom: '5%',
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
		marginBottom: '5%',
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
		backgroundColor: '#BBDED6',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		borderWidth: 0
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

export default CriteriaScreen;
