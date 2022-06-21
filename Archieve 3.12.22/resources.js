var player_resources = {
	food: 1000,	// Population limit = 10,000
	wood: 1000,
	stone: 1000,
	metal: 1000,
	gold: 1000,
}

function build(building, province) {
	if (province == null) {
		province = selectedProvince;
		console.log(province)
	}
	if (eval("provinces." + province)[0] == player.nation) {
		if (building == "Farm" && (eval("provinces." + province)[2] == "Hills" || eval("provinces." + province)[2] == "Plains")) {
			if (player_resources.wood >= 30 && player_resources.stone >= 10 && player_resources.gold >= 4) {
				eval("buildingsInProvince." + province)[0]++;
				console.log("Placed Farm");
			}
		}
		if (building == "Tavern") {
			if (player_resources.wood >= 50 && player_resources.stone >= 25 && player_resources.gold >= 10) {
				eval("buildingsInProvince." + province)[1]++;
				console.log("Placed Tavern");
			}
		}
		if (building == "Woodcutter" && (eval("provinces." + province)[2] == "Plains" || eval("provinces." + province)[2] == "Hills")) {
			if (player_resources.wood >= 20 && player_resources.gold >= 5) {
				eval("buildingsInProvince." + province)[4]++;
				console.log("Placed Woodcutter");
			} else {
				console.log("Not enough resources")
			}
		}
		if (building == "Quary" && (eval("provinces." + province)[2] == "Mountains")) {
			if (player_resources.wood >= 20 && player_resources.gold >= 5) {
				eval("buildingsInProvince." + province)[2]++;
				console.log("Placed Quary");
			} else {
				console.log("Not enough resources")
			}
		}
		if (building == "Mine" && (eval("provinces." + province)[2] == "Mountains")) {
			if (player_resources.wood >= 20 && player_resources.gold >= 5) {
				eval("buildingsInProvince." + province)[3]++;
				console.log("Placed Mine");
			} else {
				console.log("Not enough resources")
			}
		}
		if (building == "Infrastructure") {
			if (player_resources.wood >= 5 && player_resources.stone >= 50 && player_resources.gold >= 10) {
				eval("buildingsInProvince." + province)[5]++;
				console.log("Placed Infrustructure");
			} else {
				console.log("Not enough resources")
			}
		}
	} else {
		console.error("RESOURCES.JS: Cannot place building in province not owned by player.")
	}
}
var buildingsInPlayerCountry = [0,0,0,0,0,0]
// [Farms, Taverns, Quarys, Mines, Woodcutters, Infrastructure]
var buildingsInProvince = {
	p1: [0,0,0,0,0,4],
	p2: [0,0,0,0,0,4],
	p3: [0,0,0,0,0,4],
	p4: [0,0,0,0,0,4],
	p5: [0,0,0,0,0,4],
	p6: [0,0,0,0,0,4],
	p7: [0,0,0,0,0,4],
	p8: [0,0,0,0,0,4],
	p9: [0,0,0,0,0,3],
	p10: [0,0,0,0,0,3],
	p11: [0,0,0,0,0,3],
	p12: [0,0,0,0,0,4],
	p13: [0,0,0,0,0,4],
	p14: [0,0,0,0,0,4],
	p15: [0,0,0,0,0,4],
	p16: [0,0,0,0,0,4],
	p17: [0,0,0,0,0,4],
	p18: [0,0,0,0,0,4],
	p19: [0,0,0,0,0,3],
	p20: [0,0,0,0,0,3],
	p21: [0,0,0,0,0,4],
	p22: [0,0,0,0,0,4],
	p23: [0,0,0,0,0,2],
	p24: [0,0,0,0,0,2],
	p25: [0,0,0,0,0,2],
	p26: [0,0,0,0,0,4],
	p27: [0,0,0,0,0,2],
	p28: [0,0,0,0,0,1],
	p29: [0,0,0,0,0,1],
	p30: [0,0,0,0,0,1],
	p31: [0,0,0,0,0,3],
	p32: [0,0,0,0,0,3],
	p33: [0,0,0,0,0,2],
	p34: [0,0,0,0,0,1],
	p35: [0,0,0,0,0,1],
	p36: [0,0,0,0,0,1],
	p37: [0,0,0,0,0,1],
	p38: [0,0,0,0,0,1],
	p39: [0,0,0,0,0,1],
	p40: [0,0,0,0,0,3],
	p41: [0,0,0,0,0,3],
	p42: [0,0,0,0,0,3],
	p43: [0,0,0,0,0,3],
	p44: [0,0,0,0,0,3],
	p45: [0,0,0,0,0,2],
	p46: [0,0,0,0,0,7],
	p47: [0,0,0,0,0,4],
	p48: [0,0,0,0,0,3],
	p49: [0,0,0,0,0,4],
	p50: [0,0,0,0,0,4],
	p51: [0,0,0,0,0,3],
	p52: [0,0,0,0,0,3],
	p53: [0,0,0,0,0,4],
	p54: [0,0,0,0,0,1],
	p55: [0,0,0,0,0,2],
	p56: [0,0,0,0,0,1],
	p57: [0,0,0,0,0,4],
	p58: [0,0,0,0,0,4],
	p59: [0,0,0,0,0,4],
	p60: [0,0,0,0,0,5],
	p61: [0,0,0,0,0,1],
	p62: [0,0,0,0,0,1],
	p63: [0,0,0,0,0,2],
	p64: [0,0,0,0,0,2],
	p65: [0,0,0,0,0,5],
	p66: [0,0,0,0,0,5],
	p67: [0,0,0,0,0,5],
	p68: [0,0,0,0,0,5],
	p69: [0,0,0,0,0,4],
	p70: [0,0,0,0,0,5],
	p71: [0,0,0,0,0,2],
	p72: [0,0,0,0,0,2],
	p73: [0,0,0,0,0,3],
	p74: [0,0,0,0,0,1],
	p75: [0,0,0,0,0,1],
	p76: [0,0,0,0,0,1],
	p77: [0,0,0,0,0,1],
	p78: [0,0,0,0,0,1],
	p79: [0,0,0,0,0,1],
	p80: [0,0,0,0,0,1],
	p81: [0,0,0,0,0,1],
	p82: [0,0,0,0,0,1],
	p83: [0,0,0,0,0,1],
	p84: [0,0,0,0,0,1],
	p85: [0,0,0,0,0,1],
	p86: [0,0,0,0,0,4],
	p87: [0,0,0,0,0,4],
	p88: [0,0,0,0,0,4],
	p89: [0,0,0,0,0,3],
	p90: [0,0,0,0,0,3],
	p91: [0,0,0,0,0,3],
	p92: [0,0,0,0,0,3],
	p93: [0,0,0,0,0,2],
	p94: [0,0,0,0,0,2],
	p95: [0,0,0,0,0,2],
	p96: [0,0,0,0,0,2],
	p97: [0,0,0,0,0,2],
	p98: [0,0,0,0,0,2],
	p99: [0,0,0,0,0,2],
	p100: [0,0,0,0,0,2],
	p101: [0,0,0,0,0,2],
	p102: [0,0,0,0,0,2],
	p103: [0,0,0,0,0,2],
	p104: [0,0,0,0,0,2],
	p105: [0,0,0,0,0,2],
	p106: [0,0,0,0,0,2],
	p107: [0,0,0,0,0,2],
	p108: [0,0,0,0,0,2],
	p109: [0,0,0,0,0,2],
	p110: [0,0,0,0,0,2],
	p111: [0,0,0,0,0,2],
	p112: [0,0,0,0,0,2],
	p113: [0,0,0,0,0,2],
	p114: [0,0,0,0,0,2],
}
// [Gold, Wood, Stone, Metal]
var resourceProductionInProvince = {
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
// [Wood, Stone, Metal, [PRECONFIGURED]]
var resourcesInProvince = {
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
// [Wood, Stone, Metal]
}

function loadResourcesInProvinces () {
	for (i=1; i < Object.keys(Province).length + 1; i++) {
		if (eval("resourcesInProvince.p" + i)[3] == 0) {
			if (eval("provinces.p" + i)[2] == "Plains") {
				eval("resourcesInProvince.p" + i)[0] = Math.floor(Math.random() * 551) + 25;		// Min: 25, Max: 576
			}
			if (eval("provinces.p" + i)[2] == "Hills") {
				eval("resourcesInProvince.p" + i)[0] = Math.floor(Math.random() * 401) + 15;
			}
			if (eval("provinces.p" + i)[2] == "Mountains") {
				eval("resourcesInProvince.p" + i)[1] = Infinity;
				eval("resourcesInProvince.p" + i)[2] = Math.floor(Math.random() * 301) + 25;
			}
		}
	}
}
var totalBuildings = [0,0,0,0];
function buildingsInCountry(country) {
	for (k=0; k < Province_getProvincesInCountry(country).length; k++) {
		p = Province_getProvincesInCountry(country)[k];
		console.log(k, p);
		totalBuildings[0] += eval("buildingsInProvince.p" + p)[0];
		totalBuildings[1] += eval("buildingsInProvince.p" + p)[1];
		totalBuildings[2] += eval("buildingsInProvince.p" + p)[2];
		totalBuildings[3] += eval("buildingsInProvince.p" + p)[3];
		totalBuildings[4] += eval("buildingsInProvince.p" + p)[4];
		totalBuildings[5] += eval("buildingsInProvince.p" + p)[5];
	}
}










