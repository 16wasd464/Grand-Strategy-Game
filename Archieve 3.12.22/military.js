

function recruit(unit_type, province) {
	if (province == null) {
		province = selectedProvince;
	}
	if (eval("provinces." + province)[0] == player.nation) {
		if (unit_type == "Berserka") {
			if (player_resources.wood >= 2 && player_resources.metal >= 2) {
				console.log(province, unit_type)
				player_resources.wood -= 2;
				player_resources.metal -= 2;
				costPerTurn++;
				eval("player_unitsInProvince." + province)[0]++;
			}
		}
		if (unit_type == "Soldier") {
			if (player_resources.gold >= 5 && player_resources.metal >= 10) {
				console.log(province, unit_type)
				player_resources.gold -= 5;
				player_resources.metal -= 10;
				costPerTurn++;
				eval("player_unitsInProvince." + province)[1]++;
			}
		}
		if (unit_type == "Archer") {
			if (player_resources.wood >= 5 && player_resources.metal >= 5 && player_resources.gold >= 10) {
				console.log(province, unit_type)
				player_resources.wood -= 5;
				player_resources.metal -= 5;
				player_resources.gold -= 10;
				costPerTurn += 3;
				eval("player_unitsInProvince." + province)[2]++;
			}
		}
		if (unit_type == "Knight") {
			if (player_resources.metal >= 20 && player_resources.gold >= 50) {
				console.log(province, unit_type)
				player_resources.metal -= 20;
				player_resources.gold -= 50;
				costPerTurn += 10;
				eval("player_unitsInProvince." + province)[3]++;	// In 5 turns
			}
		}
	} 
}

function disband(unit_type, province) {
	if (province == null) {
		province = selectedProvince;
	}

	if (unit_type == "Berserka" && eval("player_unitsInProvince." + province)[0] != 0) {
		eval("player_unitsInProvince." + province)[0]--;
	}
	if (unit_type == "Soldier" && eval("player_unitsInProvince." + province)[1] != 0) {
		eval("player_unitsInProvince." + province)[1]--;
	}
	if (unit_type == "Archer" && eval("player_unitsInProvince." + province)[2] != 0) {
		eval("player_unitsInProvince." + province)[2]--;
	}
	if (unit_type == "Knight" && eval("player_unitsInProvince." + province)[3] != 0) {
		eval("player_unitsInProvince." + province)[3]--;
	}
	if (unit_type == "ALL") {
		eval("player_unitsInProvince." + province)[0] = 0;
		eval("player_unitsInProvince." + province)[1] = 0;
		eval("player_unitsInProvince." + province)[2] = 0;
		eval("player_unitsInProvince." + province)[3] = 0;
	}
}

function move(units, source, destination) {
	if (units == 1) {
		units = eval("player_unitsInProvince." + source);
	}
	if (eval("provinces." + source)[3].includes(Number(destination.replace("p", "")))) {
		eval("player_unitsInProvince." + source)[0] -= units[0];
		eval("player_unitsInProvince." + source)[1] -= units[1];
		eval("player_unitsInProvince." + source)[2] -= units[2];
		eval("player_unitsInProvince." + source)[3] -= units[3];

		eval("player_unitsInProvince." + destination)[0] += units[0];
		eval("player_unitsInProvince." + destination)[1] += units[1];
		eval("player_unitsInProvince." + destination)[2] += units[2];
		eval("player_unitsInProvince." + destination)[3] += units[3];

		console.log("Moved " + units + " from " + source + " to " + destination)

		if (eval("enemy_unitsInProvince." + destination) != [0,0,0,0]) {
			battle(destination);
		}

	} else {
		console.log("Provinces do not border eachother")
	}
}

function battle(province) {
	player_units = eval("player_unitsInProvince." + province);
	enemy_units = eval("enemy_unitsInProvince." + province);

	// Attack, Defense, Speed
	player_attributes = [(player_units[0] * 3) + (player_units[1] * 3) + (player_units[2] * 8) + (player_units[3] * 15), (player_units[0] * 1) + (player_units[1] * 4) + (player_units[2] * 3) + (player_units[3] * 5), (player_units[0] * 2) + (player_units[1] * 1) + (player_units[2] * 2) + (player_units[3] * 6)];
	enemy_attributes = [(enemy_units[0] * 3) + (enemy_units[1] * 3) + (enemy_units[2] * 8) + (enemy_units[3] * 15), (enemy_units[0] * 1) + (enemy_units[1] * 4) + (enemy_units[2] * 3) + (enemy_units[3] * 5), (enemy_units[0] * 2) + (enemy_units[1] * 1) + (enemy_units[2] * 2) + (enemy_units[3] * 6)];
	total_player_attributes = player_attributes[0] + player_attributes[1] + player_attributes[2];
	total_enemy_attributes = enemy_attributes[0] + enemy_attributes[1] + enemy_attributes[2];
	console.log(player_attributes, enemy_attributes);
	console.log(total_player_attributes, total_enemy_attributes);

	// Player attacking
	if (eval("provinces." + province)[2] == "Plains" && eval("provinces." + province)[0] != player.nation) {
		if ((player_attributes[0]) > enemy_attributes[0]) {
			console.log("Army took province: " + province);
			player_unitsInProvince.province = [0,0,0,0];
			Province_changeOwner(province, player.nation);
		} else {
			enemy_unitsInProvince.province = [0,0,0,0];
			console.log("Army in " + province + " wiped out.");
		}
	}

	if (eval("provinces." + province)[2] == "Hills" && eval("provinces." + province)[0] != player.nation) {
		if (total_player_attributes > (total_enemy_attributes + enemy_attributes[0]) * 1.5) {
			console.log("Army took province: " + province);
			player_unitsInProvince.province = [0,0,0,0];
			Province_changeOwner(province, player.nation);
		} else {
			enemy_unitsInProvince.province = [0,0,0,0];
			console.log("Army in " + province + " wiped out.");
		}
	}

	if (eval("provinces." + province)[2] == "Mountains" && eval("provinces." + province)[0] != player.nation) {
		if (total_player_attributes > (total_enemy_attributes) * 4) {
			console.log("Army took province: " + province);
			player_unitsInProvince.province = [0,0,0,0];
			Province_changeOwner(province, player.nation);
		} else {
			enemy_unitsInProvince.province = [0,0,0,0];
			console.log("Army in " + province + " wiped out.");
		}
	}
}




// Map
// [Berserkas, Soldiers, Archers, Knights]
var player_unitsInProvince = {
	p1: [1,0,0,0],
	p2: [0,0,0,0],
	p3: [0,0,0,0],
	p4: [0,0,0,0],
	p5: [0,0,0,0],
	p6: [0,0,0,0],
	p7: [0,0,0,0],
	p8: [0,0,0,0],
	p9: [0,0,0,0],
	p10: [0,0,0,0],
	p11: [0,0,0,0],
	p12: [0,0,0,0],
	p13: [0,0,0,0],
	p14: [0,0,0,0],
	p15: [0,0,0,0],
	p16: [0,0,0,0],
	p17: [0,0,0,0],
	p18: [0,0,0,0],
	p19: [0,0,0,0],
	p20: [0,0,0,0],
	p21: [0,0,0,0],
	p22: [0,0,0,0],
	p23: [0,0,0,0],
	p24: [0,0,0,0],
	p25: [0,0,0,0],
	p26: [0,0,0,0],
	p27: [0,0,0,0],
	p28: [0,0,0,0],
	p29: [0,0,0,0],
	p30: [0,0,0,0],
	p31: [0,0,0,0],
	p32: [0,0,0,0],
	p33: [0,0,0,0],
	p34: [0,0,0,0],
	p35: [0,0,0,0],
	p36: [0,0,0,0],
	p37: [0,0,0,0],
	p38: [0,0,0,0],
	p39: [0,0,0,0],
	p40: [0,0,0,0],
	p41: [0,0,0,0],
	p42: [0,0,0,0],
	p43: [0,0,0,0],
	p44: [0,0,0,0],
	p45: [0,0,0,0],
	p46: [0,0,0,0],
	p47: [0,0,0,0],
	p48: [0,0,0,0],
	p49: [0,0,0,0],
	p50: [0,0,0,0],
	p51: [0,0,0,0],
	p52: [0,0,0,0],
	p53: [0,0,0,0],
	p54: [0,0,0,0],
	p55: [0,0,0,0],
	p56: [0,0,0,5],
	p57: [0,0,0,0],
	p58: [15,0,0,0],
	p59: [0,0,0,0],
	p60: [0,0,0,0],
	p61: [0,0,0,0],
	p62: [0,0,0,0],
	p63: [0,0,0,0],
	p64: [0,0,0,0],
	p65: [0,0,0,0],
	p66: [0,0,0,0],
	p67: [0,0,0,0],
	p68: [0,0,0,0],
	p69: [0,0,0,0],
	p70: [0,0,0,0],
	p71: [0,0,0,0],
	p72: [0,0,0,0],
	p73: [0,0,0,0],
	p74: [0,0,0,0],
	p75: [0,0,0,0],
	p76: [0,0,0,0],
	p77: [0,0,0,0],
	p78: [0,0,0,0],
	p79: [0,0,0,0],
	p80: [0,0,0,0],
	p81: [0,0,0,0],
	p82: [0,0,0,0],
	p83: [0,0,0,0],
	p84: [0,0,0,0],
	p85: [0,0,0,0],
	p86: [0,0,0,0],
	p87: [0,0,0,0],
	p88: [0,0,0,0],
	p89: [0,0,0,0],
	p90: [0,0,0,0],
	p91: [0,0,0,0],
	p92: [0,0,0,0],
	p93: [0,0,0,0],
	p94: [0,0,0,0],
	p95: [0,0,0,0],
	p96: [0,0,0,0],
	p97: [0,0,0,0],
	p98: [0,0,0,0],
	p99: [0,0,0,0],
	p100: [0,0,0,0],
	p101: [0,0,0,0],
	p102: [0,0,0,0],
	p103: [0,0,0,0],
	p104: [0,0,0,0],
	p105: [0,0,0,0],
	p106: [0,0,0,0],
	p107: [0,0,0,0],
	p108: [0,0,0,0],
	p109: [0,0,0,0],
	p110: [0,0,0,0],
	p111: [0,0,0,0],
	p112: [0,0,0,0],
	p113: [0,0,0,0],
	p114: [0,0,0,0],
}

var enemy_unitsInProvince = {
	p1: [0,0,0,0],
	p2: [0,0,0,0],
	p3: [0,0,0,0],
	p4: [0,0,0,0],
	p5: [0,0,0,0],
	p6: [0,0,0,0],
	p7: [0,0,0,0],
	p8: [0,0,0,0],
	p9: [0,0,0,0],
	p10: [0,0,0,0],
	p11: [0,0,0,0],
	p12: [0,0,0,0],
	p13: [0,0,0,0],
	p14: [0,0,0,0],
	p15: [0,0,0,0],
	p16: [0,0,0,0],
	p17: [0,0,0,0],
	p18: [0,0,0,0],
	p19: [0,0,0,0],
	p20: [0,0,0,0],
	p21: [0,0,0,0],
	p22: [0,0,0,0],
	p23: [0,0,0,0],
	p24: [0,0,0,0],
	p25: [0,0,0,0],
	p26: [0,0,0,0],
	p27: [0,0,0,0],
	p28: [0,0,0,0],
	p29: [0,0,0,0],
	p30: [0,0,0,0],
	p31: [0,0,0,0],
	p32: [0,0,0,0],
	p33: [0,0,0,0],
	p34: [0,0,0,0],
	p35: [0,0,0,0],
	p36: [0,0,0,0],
	p37: [0,0,0,0],
	p38: [0,0,0,0],
	p39: [0,0,0,0],
	p40: [0,0,0,0],
	p41: [0,0,0,0],
	p42: [0,0,0,0],
	p43: [0,0,0,0],
	p44: [0,0,0,0],
	p45: [0,0,0,0],
	p46: [0,0,0,0],
	p47: [0,0,0,0],
	p48: [0,0,0,0],
	p49: [0,0,0,0],
	p50: [0,0,0,0],
	p51: [0,0,0,0],
	p52: [0,0,0,0],
	p53: [0,0,0,0],
	p54: [0,0,0,0],
	p55: [0,0,0,0],
	p56: [0,0,0,0],
	p57: [0,0,0,0],
	p58: [0,0,0,0],
	p59: [0,0,0,0],
	p60: [0,0,0,0],
	p61: [0,0,0,0],
	p62: [0,0,0,0],
	p63: [0,0,0,0],
	p64: [0,0,0,0],
	p65: [0,0,0,0],
	p66: [0,0,0,0],
	p67: [0,0,0,0],
	p68: [0,0,0,0],
	p69: [0,0,0,0],
	p70: [0,0,0,0],
	p71: [0,0,0,0],
	p72: [0,0,0,0],
	p73: [0,0,0,0],
	p74: [0,0,0,0],
	p75: [0,0,0,0],
	p76: [0,0,0,0],
	p77: [0,0,0,0],
	p78: [0,0,0,0],
	p79: [0,0,0,0],
	p80: [0,0,0,0],
	p81: [0,0,0,0],
	p82: [0,0,0,0],
	p83: [0,0,0,0],
	p84: [0,0,0,0],
	p85: [0,0,0,0],
	p86: [0,0,0,0],
	p87: [0,0,0,0],
	p88: [0,0,0,0],
	p89: [0,0,0,0],
	p90: [0,0,0,0],
	p91: [0,0,0,0],
	p92: [0,0,0,0],
	p93: [0,0,0,0],
	p94: [0,0,0,0],
	p95: [0,0,0,0],
	p96: [0,0,0,0],
	p97: [0,0,0,0],
	p98: [0,0,0,0],
	p99: [0,0,0,0],
	p100: [0,0,0,0],
	p101: [0,0,0,0],
	p102: [0,0,0,0],
	p103: [0,0,0,0],
	p104: [0,0,0,0],
	p105: [0,0,0,0],
	p106: [0,0,0,0],
	p107: [0,0,0,0],
	p108: [0,0,0,0],
	p109: [0,0,0,0],
	p110: [0,0,0,0],
	p111: [0,0,0,0],
	p112: [0,0,0,0],
	p113: [0,0,0,0],
	p114: [0,0,0,0],
}
document.getElementById("move_opt").addEventListener("click", intOp)
function intOp() {
	n_bers = document.getElementById("m_bers").value;
	n_sold = document.getElementById("m_sold").value;
	n_arch = document.getElementById("m_arch").value;
	n_knig = document.getElementById("m_knig").value;

	units = [n_bers, n_sold, n_arch, n_knig];	




	move(units, source, destination);
}
var moving = false;
document.getElementById("move_to").addEventListener("click", fromto)
b = 0;
function fromto() {
	source = selectedProvince;
	moving = true;
	selectedProvince = destination;
}










