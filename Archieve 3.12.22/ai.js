// Assign each AI nation a mode:
function changeMode(country) {
	cm = eval(country).mode;
	r = Math.floor(Math.random * 2);
	if (r == 1) {
		eval(country).mode = mode[cm - 1];	// Becomes more expansionist
	} else {
		eval(country).mode = mode[cm + 1];	// Becomes more regressive
	}
}

function caluculateAIActions() {
	// For every AI country:

	for (p=0; p < Country_Names.length; p++) {
		country = eval(Country_Names[p])
		if (eval(country).controller == "AI") {
			if (country.mode == "Aggressive") {
				mil_actions = 3;
				econ_actions = 1;
				total_actions = mil_actions + econ_actions;
			}
			else if (country.mode == "Expanding") {
				mil_actions = 2;
				econ_actions = 2;
				total_actions = mil_actions + econ_actions;
			}
			else if (country.mode == "Passive") {
				mil_actions = 1;
				econ_actions = 2;
				total_actions = mil_actions + econ_actions;
			}
			else if (country.mode == "Regressive") {
				mil_actions = 1;
				econ_actions = 1;
				total_actions = mil_actions + econ_actions;
			}
			else if (country.mode == "Dying") {
				mil_actions = 3;
				econ_actions = 1;
				total_actions = mil_actions + econ_actions;
			}
			else {
				console.error("AI.JS: Invalid country mode for " + country);
			}
		}




























// If AI country mode == aggressive
			// AI country actions = 3 military, 1 economy

			// If AI country is stronger than neighboring country, go to war
			// Use econ actions to build more needed resource buildings

		// If AI country mode == expanding
			// AI country actions = 2 military, 2 economy

			// If AI country has 1.5x more strength than neighboring country, go to war
			// Use econ actions to invest in food buildings

		// If AI country mode == passive
			// AI country actions = 1 military, 2 economy

			// Recruit troops until 2x stronger than neighboring country
			// Use econ actions to build 

		// If AI country mode == regressive
			// AI country actions = 1 military, 1 economy

			// Recruit troops and prepare for invasion, do not go to war
			// Use econ actions to build military buildings

		// If AI country mode == dying
			// AI country actions = 1 military

			// Go to war with weakest neighbor





	}
calAIActions(mil_actions, econ_actions, country);


















}