function enableAllButtons() {
	document.getElementById("r_bers").disabled = false;
	document.getElementById("r_sold").disabled = false;	// I dont know why the fuck this is not working...
	document.getElementById("r_arch").disabled = false;
	document.getElementById("r_knig").disabled = false;
	document.getElementById("d_bers").disabled = false;
	document.getElementById("d_sold").disabled = false;
	document.getElementById("d_arch").disabled = false;
	document.getElementById("d_knig").disabled = false;
	document.getElementById("m_bers").disabled = false;
	document.getElementById("m_sold").disabled = false;
	document.getElementById("m_arch").disabled = false;
	document.getElementById("m_knig").disabled = false;
	document.getElementById("b_farm").disabled = false;
	document.getElementById("b_tavern").disabled = false;
	document.getElementById("b_quary").disabled = false;
	document.getElementById("b_mine").disabled = false;
	document.getElementById("b_woodcutter").disabled = false;
	document.getElementById("b_infrastructure").disabled = false;
}

function enableButton(button_id) {
	if (typeof(button_id) == "string") {
		document.getElementById(button_id).disabled = false;
	} else {
	for (h=0; h < button_id.length; h++) {
			document.getElementById(button_id[h]).disabled = false;
		}
	}
}

function disableButton(button_id) {
	if (typeof(button_id) == "string") {
		document.getElementById(button_id).disabled = true;
	} else {
	for (h=0; h < button_id.length; h++) {
			document.getElementById(button_id[h]).disabled = true;
		}
	}
}



