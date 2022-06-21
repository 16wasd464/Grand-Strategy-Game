document.getElementById("start").addEventListener("click", sg);





function init() {
	Province_initMap();
	loadResourcesInProvinces();









	console.log("Game init complete");
}
const modes = ["Aggressive", "Expanding", "Passive", "Regressive", "Dying"];
function play(nation) {
	document.getElementById("p_country").innerHTML = nation;
	player.nation = nation;
	eval(nation).controller = "Player";
	eval(nation).mode = "Player";
}
function sg() {
	document.getElementById("sg").open = false;
	// Give AI all contries not controlled by the player
	for (i=0; i < Country_Names.length; i++) {
		if (eval(eval("Country_Names")[i]).controller === "") {
			eval(eval("Country_Names")[i]).controller = "AI";
		}
	}
	// Randomly assign all non-player countries a mode
	for (i=0; i < Country_Names.length; i++) {
		if (eval(eval("Country_Names")[i]).mode === "") {
			a = Math.floor(Math.random() * (modes.length));
			console.log(a)
			eval(eval("Country_Names")[i]).mode = modes[a];
			console.log("Done")
			console.log(eval("Country_Names"))
		}
	}










}








