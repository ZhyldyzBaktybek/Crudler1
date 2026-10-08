import Screen from "../layout/Screen";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import initialModules from "../../data/modules.js";
import { ModuleList } from "../entity/modules/ModuleList.js";




export const ModuleListScreen = () => {
	// Initialisation-------------------
	const modules = initialModules;
	// State---------------------
	// Handlers------------------
	const handleSelect = (module) => alert(`Item${module.ModuleCode} selected`);
	// View-----------------------------

	return (
		<Screen>
			<ModuleList
				modules={modules}
				onSelect={handleSelect}
			/>
		</Screen>
	);
};


const styles = StyleSheet.create({
	container: {},
});

export default ModuleListScreen;
