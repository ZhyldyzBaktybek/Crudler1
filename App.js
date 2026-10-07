import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./.expo/src/components/screens/ModuleListScreen";
import ModuleAddScreen from "./.expo/src/components/screens/ModuleAddScreen";
import ModuleModifyScreen from "./.expo/src/components/screens/ModuleModifyScreen";
import ModuleViewScreen from "./.expo/src/components/screens/ModuleViewScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
	// Initialisation-------------------
	// State---------------------
	// Handlers------------------
	// View-----------------------------

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='ModuleListScreen'
				screenOptions={{
					headerStyle: { backgroundColor: "black" },
					headerTintColor: "white",
				}}>
				<Stack.Screen
					name='ModuleListScreen'
					component={ModuleListScreen}
					options={{ title: "List modules" }}
				/>

				<Stack.Screen
					name='ModuleAddScreen'
					component={ModuleAddScreen}
					options={{ title: "Add module" }}
				/>

				<Stack.Screen
					name='ModuleModifyScreen'
					component={ModuleModifyScreen}
					options={{ title: "Modify module" }}
				/>

				<Stack.Screen
					name='ModuleViewScreen'
					component={ModuleViewScreen}
					options={{ title: "View module" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
