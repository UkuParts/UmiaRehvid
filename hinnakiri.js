let val = ["laiusValue", "kõrgusValue", "diameeterValue", "tootjaValue", "tüüpValue"];

function otsi(){
	// loeb otsingu väljade väärtused muutujatesse
	// viide: https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
	laiusField = document.getElementById("laius");
	laiusValue = laiusField.options[laiusField.selectedIndex].value;
	kõrgusField = document.getElementById("kõrgus");
	kõrgusValue = kõrgusField.options[kõrgusField.selectedIndex].value;
	diameeterField = document.getElementById("diameeter");
	diameeterValue = diameeterField.options[diameeterField.selectedIndex].value;
	tootjaField = document.getElementById("tootja");
	tootjaValue = tootjaField.options[tootjaField.selectedIndex].value;
	tüüpField = document.getElementById("tüüp");
	tüüpValue = tüüpField.options[tüüpField.selectedIndex].value;
	
	// https://stackoverflow.com/questions/14643617/create-table-using-javascript
	const body = document.getElementById("endIt"), tbl = document.createElement('table');
	body.innerHTML = "";
	tbl.style.border = '1px solid black';
	let count = 0;
	for (let i = 0; i < killMe1.length; i++){
		let tester = true;
		for (let j = 0; j < 5; j++){
			if(eval(val[j]) == "default"){
				continue;
			}
			let c = killMe1[i][j];
			if(c != "default" && c != eval(val[j])){
				tester = false;
				break;
			}
		}
		if(tester == true){
			count++;
			const tr = tbl.insertRow();
			for(k = 0; k < 8; k++){
				const td = tr.insertCell();
				td.appendChild(document.createTextNode(killMe2[i][k]));
				td.style.border = '1px solid black';
			}
		}
	}
	body.appendChild(tbl);
	if(count == 1){
		body.innerHTML = "<div>Parameetritele vastavat tulemust ei leitud!</div>";
	}
}