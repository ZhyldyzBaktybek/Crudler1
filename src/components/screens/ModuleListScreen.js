import Screen from "../layout/Screen";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import initialModules from "../../data/modules.js";
import { ModuleList } from "../entity/modules/ModuleList.js";
import { useState } from "react";
import RenderCount from "../UI/renderCounts.js";



export const ModuleListScreen = () => {
	// Initialisation-------------------
	//let modules = initialModules;

	// State---------------------
	const [modules, setModules] = useState(initialModules);

	// Handlers------------------
	const handleDelete = (module) =>
		setModules(
			modules.filter((item) => item.ModuleID !== module.ModuleID),
			//modules = modules.filter((item) =>  item.ModuleID !== module.ModuleID

			//if (item.ModuleID !== module.ModuleID) return true; else return false;
		);

	// View-----------------------------

	return (
		<Screen>
			<RenderCount />
			<ModuleList
				modules={modules}
				onSelect={handleDelete}
			/>
		</Screen>
	);
};;


const styles = StyleSheet.create({
	container: {},
});

export default ModuleListScreen;
