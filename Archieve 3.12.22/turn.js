document.getElementById("next_turn").addEventListener("click", nextTurn);
var turnPoints = 4;
var turn = 1;
var maxTurn = Infinity;
var costPerTurn = 0;
var incomePerTurn;
var tax_rate = 0.05;
var turn_income_line = [];
var turnActions = {
	t0: [],	// Actions to do this turn
	t1: [],	// Actions to do next turn
	t2: [],
	t3: [],
	t4: [],
	t5: [],
}
const tax_constant_value = 0.03;

function addToTurn(action, turns_ahead) {
	// TODO: FIX THIS FUNCTION
	eval("turnActions.t" + turns_ahead + ".push(" + action + ");");
}

function nextTurn() {
	// Disable next turn button
	document.getElementById("next_turn").disabled = true;

	// End of game logic
	if (turn > maxTurn) {
		// End of Game
		//console.log("End of the game")
	}
	// Calculate Player Income & Expenses

	// Military Costs
	totalTroops = [0,0,0,0];
	for (j=0; j < Province_getProvincesInCountry(player.nation).length; j++) {
		p = Province_getProvincesInCountry(player.nation)[j];
		totalTroops[0] += eval("player_unitsInProvince.p" + p)[0];
		totalTroops[1] += eval("player_unitsInProvince.p" + p)[1];
		totalTroops[2] += eval("player_unitsInProvince.p" + p)[2];
		totalTroops[3] += eval("player_unitsInProvince.p" + p)[3];
		costPerTurn = (totalTroops[0] * 1) + (totalTroops[1] * 1) + (totalTroops[2] * 3) + (totalTroops[3] * 10);
	}

	// Building Income
	for (v=1; v < Object.keys(Province).length - 1; v++) {
		if (eval("provinces.p" + v)[2] == "Hills" || eval("provinces.p" + v)[2] == "Plains") {	// Wood
			if (eval("resourcesInProvince.p" + v)[0] > 0) {
				if (eval("buildingsInProvince.p" + v)[4] > 1) {
					if (Province_getProvincesInCountry(player.nation).includes(v)) {
						player_resources.wood += (eval("buildingsInProvince.p" + v)[4] * 20) * wood_production_modifier;
					}
				}
			}
		}
		if (eval("provinces.p" + v)[2] == "Mountains") {					// Stone & Metal
			if (eval("resourcesInProvince.p" + v)[1] > 0) {
				if (eval("buildingsInProvince.p" + v)[2] > 1) {
					if (Province_getProvincesInCountry(player.nation).includes(v)) {
						player_resources.stone += (eval("buildingsInProvince.p" + v)[2] * 20) * stone_production_modifier;
					}
				}
			}
			if (eval("resourcesInProvince.p" + v)[1] > 0) {
				if (eval("buildingsInProvince.p" + v)[3] > 1) {
					if (Province_getProvincesInCountry(player.nation).includes(v)) {
						player_resources.metal += (eval("buildingsInProvince.p" + v)[3] * 20) * metal_production_modifier;
					}
				}
			}
		}
		if (eval("provinces.p" + v)[2] == "Hills" || eval("provinces.p" + v)[2] == "Plains") {	// Food
			if (eval("buildingsInProvince.p" + v)[0] > 1) {
				if (Province_getProvincesInCountry(player.nation).includes(v)) {
					player_resources.wood += (eval("buildingsInProvince.p" + v)[4] * 20) * wood_production_modifier;
				}
			}
		}
	}

	// Province Income
	pin = Province_getProvincesInCountry(player.nation);
	for (r=0; r < pin.length; r++) {
		bip = eval("buildingsInProvince.p" + pin[r])
		player_resources.gold += Math.round((bip[0] + (bip[1] * 2) + bip[5] + eval("provinces.p" + pin[r])[4]) * (tax_rate * tax_constant_value));
	}






	// Automated Player Actions








	// Complete Turn Actions (AI)
	//for (i=0; i < turnActions.turn.length; i++) {
		//eval(eval("turnActions.t" + turn + "turn[i]"));
	//}



	// Calculate AI Actions
	



	// Scripted Events
	// Late Antique Little Ice Age - 536 to 660 CE
	// Bubonic Plague - 541 CE


	// Update Text
	document.getElementById("turn").innerHTML = turn;
	document.getElementById("c_gold").innerHTML = player_resources.gold;
	document.getElementById("c_food").innerHTML = player_resources.food;
	document.getElementById("c_wood").innerHTML = player_resources.wood;
	document.getElementById("c_stone").innerHTML = player_resources.stone;
	document.getElementById("c_metal").innerHTML = player_resources.metal;


	document.getElementById("c_res").innerHTML;	// <-- Yet to add research system
	document.getElementById("c_t_pop").innerHTML; // <-- No population calculation yet
	document.getElementById("c_t_mu").innerHTML; // Haven't added this either

	// Reenable next turn button
	document.getElementById("next_turn").disabled = false;
}

var food_production_modifier = 1;
var wood_production_modifier = 1;
var stone_production_modifier = 1;
var metal_production_modifier = 1;