// The path id's for all the provinces
// For some reason I didn't just set the to "p1" but used the default id's
const Province = {
	p93: "path15559",
	p95: "path15672",
	p96: "path15748",
	p97: "path15824",
	p98: "path15900",
	p99: "path15976",
	p100: "path16052",
	p94: "path16128",
	p103: "path16204",
	p102: "path16280",
	p101: "path16356",
	p106: "path16432",
	p107: "path16508",
	p108: "path16584",
	p109: "path16660",
	p110: "path16736",
	p105: "path16812",
	p104: "path16888",
	p111: "path16964",
	p112: "path17040",
	p114: "path17116",
	p113: "path17192",
	p7: "path17268",
	p9: "path17344",
	p10: "path17420",
	p20: "path17496",
	p19: "path17572",
	p11: "path17648",
	p8: "path17724",
	p6: "path17800",
	p3: "path17876",
	p2: "path17952",
	p1: "path18028",
	p4: "path18104",
	p5: "path18180",
	p12: "path18256",
	p18: "path18332",
	p22: "path18408",
	p17: "path18484",
	p16: "path18560",
	p13: "path18636",
	p14: "path18712",
	p15: "path18788",
	p26: "path18864",
	p25: "path18940",
	p24: "path19016",
	p23: "path19092",
	p21: "path19168",
	p40: "path19244",
	p41: "path19320",
	p46: "path19433",
	p48: "path19509",
	p49: "path19585",
	p53: "path19661",
	p50: "path19737",
	p51: "path19813",
	p52: "path19889",
	p47: "path19965",
	p45: "path20041",
	p43: "path20117",
	p44: "path20193",
	p42: "path20269",
	p54: "path20345",
	p55: "path20421",
	p56: ["path20497","path20573","path20612"],
	p57: "path20651",
	p58: "path20727",
	p59: "path20803",
	p60: "path20879",
	p91: "path20955",
	p92: ["path21031","path21146","path21185","path21224","path21263","path21302","path21341","path21380","path21419"],
	p89: ["path21495","path21534","path21573","path21612","path21651","path21690"],
	p90: "path21803",
	p87: "path21879",
	p86: "path21955",
	p88: "path22031",
	p73: "path22107",
	p74: "path22183",
	p85: "path22259",
	p84: "path22335",
	p83: "path22411",
	p76: "path22487",
	p75: "path22563",
	p72: "path22639",
	p71: "path22715",
	p32: "path22791",
	p33: "path22867",
	p39: "path22943",
	p77: "path23019",
	p82: "path23095",
	p81: "path23171",
	p78: "path23247",
	p38: "path23323",
	p35: "path23399",
	p34: "path23475",
	p30: "path23551",
	p31: "path23627",
	p29: "path23703",
	p27: "path23853",
	p28: "path23929",
	p36: "path24005",
	p37: ["path24081","path24233","path24309"],
	p79: "path24157",
	p80: "path24348",
	p61: "path24424",
	p62: "path24500",
	p63: ["path24576","path24652","path24691"],
	p64: "path24730",
	p70: "path24806",
	p69: ["path24882","path24958"],
	p67: "path24997",
	p68: "path25073",
	p65: "path25149",
	p66: ["path25225","path26810"]
}

function Province_changeOwner(province_id, owner) {
	if (typeof(eval("Province." + province_id)) == "string") {
		document.getElementById(eval("Province." + province_id)).style.fill = eval("md_" + owner + "[0]");
	} else { // Multiple paths in province
		for (i=0; i < eval("Province." + province_id).length; i++) {
			document.getElementById(eval("Province." + province_id + "[i]")).style.fill = eval("md_" + owner + "[0]");
		}
	}
	eval("provinces." + province_id)[0] = owner;
}

function Province_initMap() {
	for (i=1; i < Object.keys(Province).length + 1; i++) {
		if (typeof(eval("Province.p" + i)) == "string") {
			document.getElementById(eval("Province.p" + i)).style.fill = eval("md_" + eval("oo_p" + i));
		} else {
			for (l=0; l < eval("Province.p" + i).length; l++) {
				document.getElementById(eval("Province.p" + i + "["+l+"]")).style.fill = eval("md_" + eval("oo_p" + i));
			}
		}
	}

	// Clickable provinces
	// Adds "onclick" attribute on all provinces

	for (i=1; i < Object.keys(Province).length + 1; i++) {
		if (typeof(eval("Province.p" + i)) == "string") {
			node = document.getElementById(eval("Province.p" + i));
			a = document.createAttribute("onclick");
			a.value = "clicked(" + i + ");";
			node.setAttributeNode(a);
		} else {
			for (l=0; l < eval("Province.p" + i).length; l++) {
				node = document.getElementById(eval("Province.p" + i + "[" + l + "]"));
				a = document.createAttribute("onclick");
				a.value = "clicked(" + i + ");";
				node.setAttributeNode(a);
			}
		}
	}
}

// Province Map Data
// Must be RGB format for some reason

const md_Tribes = ["rgb(153,102,51)"];
const md_Suebi = ["rgb(0,255,255)"];
const md_Burgandy = ["rgb(153,0,0)"];
const md_Brittany = ["rgb(0,102,255)"];
const md_Visogoths = ["rgb(255,102,255)"];
const md_Vandals = ["rgb(255,51,51)"];
const md_Neustria = ["rgb(255,153,51)"];
const md_Austrasia = ["rgb(102,255,102)"];
const md_Swabians = ["rgb(102,153,255)"];
const md_Syagrius = ["rgb(255,102,26)"];
const md_Odoacer = ["rgb(255,153,102)"];
const md_Frisians = ["rgb(51,153,255)"];
const md_Saxons = ["rgb(255,0,0)"]
const md_AngloSaxons = ["rgb(255,51,153)"]

const md_ = ["255,255,255"];	// No owner

// Province owners at game start

const oo_p1 = "Brittany";
const oo_p2 = "Syagrius";
const oo_p3 = "Visogoths";
const oo_p4 = "Syagrius";
const oo_p5 = "Visogoths";
const oo_p6 = "Visogoths";
const oo_p7 = "Visogoths";
const oo_p8 = "Visogoths";
const oo_p9 = "Visogoths";
const oo_p10 = "Visogoths";
const oo_p11 = "Visogoths";
const oo_p12 = "Visogoths";
const oo_p13 = "Syagrius";
const oo_p14 = "Syagrius";
const oo_p15 = "Austrasia";
const oo_p16 = "Syagrius";
const oo_p17 = "Austrasia";
const oo_p18 = "Visogoths";
const oo_p19 = "Burgandy";
const oo_p20 = "Visogoths";
const oo_p21 = "Burgandy";
const oo_p22 = "Burgandy";
const oo_p23 = "Burgandy";
const oo_p24 = "Swabians";
const oo_p25 = "Austrasia";
const oo_p26 = "Austrasia";
const oo_p27 = "Frisians";
const oo_p28 = "Frisians";
const oo_p29 = "Austrasia";
const oo_p30 = "Austrasia";
const oo_p31 = "Austrasia";
const oo_p32 = "Austrasia";
const oo_p33 = "Austrasia";
const oo_p34 = "Saxons";
const oo_p35 = "Saxons";
const oo_p36 = "Tribes";
const oo_p37 = "Tribes";
const oo_p38 = "Tribes";
const oo_p39 = "Tribes";
const oo_p40 = "Odoacer";
const oo_p41 = "Odoacer";
const oo_p42 = "Odoacer";
const oo_p43 = "Odoacer";
const oo_p44 = "Odoacer";
const oo_p45 = "Odoacer";
const oo_p46 = "Odoacer";
const oo_p47 = "Odoacer";
const oo_p48 = "Odoacer";
const oo_p49 = "Odoacer";
const oo_p50 = "Odoacer";
const oo_p51 = "Odoacer";
const oo_p52 = "Odoacer";
const oo_p53 = "Odoacer";
const oo_p54 = "Vandals";
const oo_p55 = "Vandals";
const oo_p56 = "Vandals";
const oo_p57 = "Vandals";
const oo_p58 = "Vandals";
const oo_p59 = "Vandals";
const oo_p60 = "Vandals";
const oo_p61 = "Tribes";
const oo_p62 = "Tribes";
const oo_p63 = "Tribes";
const oo_p64 = "Tribes";
const oo_p65 = "Tribes";
const oo_p66 = "Tribes";
const oo_p67 = "AngloSaxons";
const oo_p68 = "AngloSaxons";
const oo_p69 = "AngloSaxons";
const oo_p70 = "Tribes";
const oo_p71 = "Odoacer";
const oo_p72 = "Odoacer";
const oo_p73 = "Odoacer";
const oo_p74 = "Tribes";
const oo_p75 = "Tribes";
const oo_p76 = "Tribes";
const oo_p77 = "Tribes";
const oo_p78 = "Tribes";
const oo_p79 = "Tribes";
const oo_p80 = "Tribes";
const oo_p81 = "Tribes";
const oo_p82 = "Tribes";
const oo_p83 = "Tribes";
const oo_p84 = "Tribes";
const oo_p85 = "Tribes";
const oo_p86 = "Tribes";
const oo_p87 = "Odoacer";
const oo_p88 = "Odoacer";
const oo_p89 = "Odoacer";
const oo_p90 = "Odoacer";
const oo_p91 = "Odoacer";
const oo_p92 = "Odoacer";
const oo_p93 = "Suebi";
const oo_p94 = "Suebi";
const oo_p95 = "Suebi";
const oo_p96 = "Visogoths";
const oo_p97 = "Visogoths";
const oo_p98 = "Visogoths";
const oo_p99 = "Visogoths";
const oo_p100 = "Visogoths";
const oo_p101 = "Visogoths";
const oo_p102 = "Visogoths";
const oo_p103 = "Tribes";
const oo_p104 = "Visogoths";
const oo_p105 = "Visogoths";
const oo_p106 = "Visogoths";
const oo_p107 = "Visogoths";
const oo_p108 = "Visogoths";
const oo_p109 = "Visogoths";
const oo_p110 = "Visogoths";
const oo_p111 = "Visogoths";
const oo_p112 = "Visogoths";
const oo_p113 = "Visogoths";
const oo_p114 = "Visogoths";

// Province click code

var selectedProvince;
function clicked(province) {
	selectedProvince = "p" + province;
	console.log(province, selectedProvince)
	
	fillProvInfo();
	enableAllButtons();
}

// Province Data

var provinces = {
	//    Owner, Name, Terrain, Bordered Provinces, Population (thousand), etc
	p1: ["Brittany","Brittany","Hills",[2], 5000],
	p2: ["Syagrius","Western Neustria","Hills",[1,3,4], 5000],
	p3: ["Visogoths","","Plains",[2,4,5,6], 5000],
	p4: ["Syagrius","","Hills",[2,3,5,13,14], 5000],
	p5: ["Visogoths","Poites","Hills",[2,4,6,8,12,13], 5000],
	p6: ["Visogoths","Aquitaine","Plains",[3,5,7,8], 5000],
	p7: ["Visogoths","Gascony","Plains",[6,8,9,103,113], 5000],
	p8: ["Visogoths","","Hills",[5,6,7,9,10,11,12], 5000],
	p9: ["Visogoths","Tolosa","Hills",[7,8,10,113,114], 5000],
	p10: ["Visogoths","Septomania","Hills",[8,9,11,19,20,114], 5000],
	p11: ["Visogoths","","Hills",[8,10,12,18,19,20], 5000],
	p12: ["Visogoths","","Hills",[5,8,11,13,18], 5000],
	p13: ["Syagrius","","Plains",[4,5,12,14,16,17,18], 5000],
	p14: ["Syagrius","","Plains",[4,13,15,16], 5000],
	p15: ["Austrasia","Belgica","Plains",[14,16,26,27], 5000],
	p16: ["Syagrius","","Plains",[13,14,15,17,25,26], 5000],
	p17: ["Austrasia","","Plains",[13,16,18,22,23,24,25], 5000],
	p18: ["Visogoths","","Hills",[11,12,13,17,19,22], 5000],
	p19: ["Burgandy","Narbonensis","Mountains",[10,11,18,20,21,22], 5000],
	p20: ["Visogoths","Province","Mountains",[10,19,21,40], 5000],
	p21: ["Burgandy","Alps","Mountains",[19,20,22,23,40,42], 5000],
	p22: ["Burgandy","","Hills",[17,18,19,21,23], 5000],
	p23: ["Burgandy","","Mountains",[17,21,22,24,42,71], 5000],
	p24: ["Swabians","Swabia","Hills",[17,23,25,32,33,71,72,75], 5000],
	p25: ["Austrasia","","Hills",[16,17,24,26,29,31,32], 5000],
	p26: ["Austrasia","Germania Inferior","Plains",[15,16,25,27,29], 5000],
	p27: ["Frisians","","Plains",[15,26,29,28], 5000],
	p28: ["Frisians","","Plains",[27,29,30,34], 5000],
	p29: ["Austrasia","","Plains",[25,26,27,28,30,31], 5000],
	p30: ["Austrasia","","Plains",[28,29,31,34], 5000],
	p31: ["Austrasia","","Plains",[25,29,30,32,33,34], 5000],
	p32: ["Austrasia","","Hills",[24,25,31,33], 5000],
	p33: ["Austrasia","","Hills",[24,31,32,34,35,39,75,76], 5000],
	p34: ["Saxons","","Plains",[28,30,31,33,35], 5000],
	p35: ["Saxons","","Plains",[33,34,36,37,38,39], 5000],
	p36: ["Tribes","","Plains",[35,37], 2000],
	p37: ["Tribes","","Plains",[35,36,38,79], 2000],
	p38: ["Tribes","","Plains",[35,37,39,78,79], 2000],
	p39: ["Tribes","","Plains",[33,35,38,76,77,78], 2000],
	p40: ["Odoacer","Alps Cottiae","Mountains",[20,21,41,42,43], 5000],
	p41: ["Odoacer","Tuscia","Hills",[40,43,45,46], 5000],
	p42: ["Odoacer","Liguria","Mountains",[21,23,40,43,71], 5000],
	p43: ["Odoacer","Poe Valley","Plains",[40,41,42,44,45,71,72], 5000],
	p44: ["Odoacer","Venice","Hills",[43,45,72,73,88,89], 5000],
	p45: ["Odoacer","Flaminia","Hills",[41,43,44,46,47], 5000],
	p46: ["Odoacer","Rome","Hills",[41,45,47], 5000],
	p47: ["Odoacer","","Mountains",[45,46,48], 5000],
	p48: ["Odoacer","","Hills",[47,49], 5000],
	p49: ["Odoacer","","Hills",[48,50,53], 5000],
	p50: ["Odoacer","","Hills",[49,51,53], 5000],
	p51: ["Odoacer","","Hills",[50,52], 5000],
	p52: ["Odoacer","","Hills",[51], 5000],
	p53: ["Odoacer","Tarantum","Plains",[49,50], 5000],
	p54: ["Vandals","Corsica","Mountains",[55], 5000],
	p55: ["Vandals","Sardinia","Hills",[54], 5000],
	p56: ["Vandals","Belaris","Plains",[], 5000],
	p57: ["Vandals","Mauretania","Hills",[58], 5000],
	p58: ["Vandals","Africa Proconsularis","Mountains",[57,59], 5000],
	p59: ["Vandals","Numidia","Mountains",[58,60], 5000],
	p60: ["Vandals","Carthago","Plains",[59,52], 5000],
	p61: ["Tribes","","Hills",[62], 2000],
	p62: ["Tribes","","Hills",[61], 2000],
	p63: ["Tribes","","Hills",[64,65], 2000],
	p64: ["Tribes","","Hills",[63,65], 2000],
	p65: ["Tribes","","Hills",[63,64,66,67,70], 2000],
	p66: ["Tribes","","Hills",[65,67], 2000],
	p67: ["AngloSaxons","","Plains",[65,66,68,69,70], 5000],
	p68: ["AngloSaxons","","Plains",[67,69], 5000],
	p69: ["AngloSaxons","","Plains",[67,68,70], 5000],
	p70: ["Tribes","","Plains",[65,67,69], 2000],
	p71: ["Odoacer","","Mountains",[23,24,42,43,72], 5000],
	p72: ["Odoacer","Raetia","Mountains",[24,43,44,71,73,74,75], 5000],
	p73: ["Odoacer","Noricum","Mountains",[44,72,74,88], 5000],
	p74: ["Tribes","","Plains",[72,73,75,76,83,85,86,87,88], 2000],
	p75: ["Tribes","","Hills",[24,33,72,74,76], 2000],
	p76: ["Tribes","","Plains",[33,39,74,75,77,83], 2000],
	p77: ["Tribes","","Plains",[39,76,78,82,83], 2000],
	p78: ["Tribes","","Plains",[38,39,77,79,80,81,82], 2000],
	p79: ["Tribes","","Plains",[37,38,78,80], 2000],
	p80: ["Tribes","","Plains",[78,79,81], 2000],
	p81: ["Tribes","","Plains",[78,80,82], 2000],
	p82: ["Tribes","","Plains",[77,78,81,83,84], 2000],
	p83: ["Tribes","","Plains",[74,76,77,82,84,85], 2000],
	p84: ["Tribes","","Plains",[82,83,85], 2000],
	p85: ["Tribes","","Mountains",[74,83,84,86], 2000],
	p86: ["Tribes","","Plains",[74,85,87,90], 2000],
	p87: ["Odoacer","","Plains",[74,86,88,89,90], 5000],
	p88: ["Odoacer","Pannonia Superior","Hills",[44,73,74,87,89], 5000],
	p89: ["Odoacer","","Hills",[44,87,88,90,92], 5000],
	p90: ["Odoacer","","Plains",[86,87,89,92,91], 5000],
	p91: ["Odoacer","","Mountains",[90,92], 5000],
	p92: ["Odoacer","","Mountains",[89,90,91], 5000],
	p93: ["Suebi","Galecia","Hills",[94,95], 5000],
	p94: ["Suebi","","Mountains",[93,95,100,101,102,103], 5000],
	p95: ["Suebi","Lusitania","Plains",[93,94,96,100], 5000],
	p96: ["Visogoths","Ophiussa","Plains",[95,97,99,100], 5000],
	p97: ["Visogoths","","Plains",[96,98,99], 5000],
	p98: ["Visogoths","Baetica","Plains",[97,99,108], 5000],
	p99: ["Visogoths","","Hills",[96,97,98,100,106,107,108], 5000],
	p100: ["Visogoths","","Plains",[94,95,96,99,101,106], 5000],
	p101: ["Visogoths","","Mountains",[94,100,102,104,105,106], 5000],
	p102: ["Visogoths","","Mountains",[94,102,103,104], 5000],
	p103: ["Tribes","","Mountains",[94,102,104,111,113], 2000],
	p104: ["Visogoths","","Mountains",[101,102,103,105,111], 5000],
	p105: ["Visogoths","","Mountains",[101,104,106,110,111], 5000],
	p106: ["Visogoths","","Hills",[99,100,101,105,107,110], 5000],
	p107: ["Visogoths","","Hills",[99,106,108,109,110], 5000],
	p108: ["Visogoths","","Mountains",[98,99,107,109], 5000],
	p109: ["Visogoths","","Mountains",[107,108,110], 5000],
	p110: ["Visogoths","","Mountains",[105,106,107,109,111,112], 5000],
	p111: ["Visogoths","","Mountains",[103,104,105,110,112,113], 5000],
	p112: ["Visogoths","","Mountains",[110,111,113,114], 5000],
	p113: ["Visogoths","","Mountains",[7,9,103,111,112,114], 5000],
	p114: ["Visogoths","","Mountains",[9,10,112,113], 5000],
}

function Province_initTerrainMap() {
	for (i=1; i < Object.keys(Province).length + 1; i++) {
		if (typeof(eval("Province.p" + i)) == "string") {
			document.getElementById(eval("Province.p" + i)).style.fill = eval("ter_" + eval("provinces.p" + i)[2]);
		} else {
			for (l=0; l < eval("Province.p" + i).length; l++) {
				document.getElementById(eval("Province.p" + i + "["+l+"]")).style.fill = eval("ter_" + eval("provinces.p" + i)[2]);
			}
		}
	}
}

function Province_getProvincesInCountry(country) {
	n = [];
	for (i=1; i < Object.keys(Province).length; i++) {
		if (eval("provinces.p" + i)[0] == country) {
			n.push(i);
		}
	}
	return n;
}

var ter_Plains = "rgb(51, 204, 51)";
var ter_Hills = "rgb(204, 136, 0)";
var ter_Mountains = "rgb(153, 153, 153)";
var ter_Wasteland = "rgb(102, 0, 102)";

function fillProvInfo() {
	document.getElementById("p_name").innerHTML = eval("provinces." + selectedProvince)[1];
	document.getElementById("p_terrain").innerHTML = eval("provinces." + selectedProvince)[2];
	document.getElementById("p_owner").innerHTML = eval("provinces." + selectedProvince)[0];


}

function makeProvWasteland(province) {
	eval("provinces." + province)[2] = "Wasteland";
}





