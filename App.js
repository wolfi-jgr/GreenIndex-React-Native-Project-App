import React from "react";
import {IconButton} from "react-native-paper";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import FavoritesScreen from "./app/screens/FavoritesScreen";
import MyScoreScreen from "./app/screens/MyScoreScreen";
import HomeScreen from "./app/screens/HomeScreen";
import IndexScreen from "./app/screens/IndexScreen";
import AboutScreen from "./app/screens/AboutScreen";
import CriteriaScreen from "./app/screens/CriteriaScreen";
import rootReducer from "./app/Reducer/rootReducer";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const store = configureStore({ //redux-store is created, which stores the state of app
	reducer: {
		root: rootReducer
	}
})

function App() {
	//Color variable of the Header Bars for easier change.
	const headerColor = '#FAEBE0'

	function HomeScreenStack() {
		return (
			<HomeStack.Navigator>
				<HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
				<HomeStack.Screen name="IndexHS" component={IndexScreen} options={{
					title: "Index", headerStyle: {
						backgroundColor: headerColor,
					}
				}}/>
				<HomeStack.Screen name="FavHS" component={FavoritesScreen} options={{
					title: "Favourites", headerStyle: {
						backgroundColor: headerColor,
					}
				}}/>
				<HomeStack.Screen name="About" component={AboutScreen} options={{
					title: "About", headerStyle: {
						backgroundColor: headerColor,
					}
				}}/>
				<HomeStack.Screen name="Criteria" component={CriteriaScreen} options={{
					title: "Index Kriterien", headerStyle: {
						backgroundColor: headerColor,
					}
				}}/>
			</HomeStack.Navigator>
		);
	}

	function FavoritesScreenStack() {
		return (
			<HomeStack.Navigator>
				<HomeStack.Screen name="Favourites" component={FavoritesScreen} options={{
					headerStyle: {
						backgroundColor: headerColor,
					}
				}}/>
				<HomeStack.Screen name="IndexFS" component={IndexScreen} options={{
					title: "Index", headerStyle: {
						backgroundColor: headerColor,
					}
				}}/>
			</HomeStack.Navigator>
		);
	}

	function MyScoreScreenStack() {
		return (
			<HomeStack.Navigator>
				<HomeStack.Screen name="MyScore" component={MyScoreScreen} options={{
					headerStyle: {
						backgroundColor: headerColor,
					}
				}}/>
			</HomeStack.Navigator>
		);
	}

	return (
		<Provider store={store}>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name={"HomeStack"} component={HomeScreenStack} options={{
						headerShown: false,
						tabBarLabel: 'Home',
						tabBarIcon: () => (
							<IconButton icon={"home"}/>
						)
					}}/>
					<Tab.Screen name={"FavouritesStack"} component={FavoritesScreenStack} options={{
						headerShown: false,
						tabBarLabel: 'Favourites',
						tabBarIcon: () => (
							<IconButton icon={"star"}/>
						)
					}}/>
					<Tab.Screen name={"MyScoreStack"} component={MyScoreScreenStack} options={{
						headerShown: false,
						tabBarLabel: 'MyScore',
						tabBarIcon: () => (
							<IconButton icon={"clipboard-text"}/>
						)
					}}/>
				</Tab.Navigator>
			</NavigationContainer>
		</Provider>
	);

}

export default App;

