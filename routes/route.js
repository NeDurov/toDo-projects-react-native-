import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Auth from "../components/auth";
import ToDoList from "../components/toDoList";

const Stack = createNativeStackNavigator();

export default function Routers() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Auth"
					component={Auth}
					options={{ title: "Выполните вход" }}
				/>
				<Stack.Screen
					name="ToDoList"
					component={ToDoList}
					options={{ title: "Список дел" }}
				/>
				
			</Stack.Navigator>
		</NavigationContainer>
	);
}
