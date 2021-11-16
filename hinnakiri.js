let killMe1 = [["default", "default", "default", "default", "default"],
["135", "35", "R12C", "Barum", "lamell"]];
let killMe2 = [["Kood", "Moot", "Index", "I", "Tootja", "Tüüp", "Hind", "Saadavus", "S"],
["3528704976386", "185/65R15", "88T", "C C 2(70dB)", "KORMORAN Road Perfomance", "suvi", "44.00€", "kesklaos", "Kõsi / osta"]]

function otsi(){
	// loeb otsingu väljade väärtused muutujatesse
	// viide: https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
	laiusField = document.getElementById("laius");
	laiusValue = laiusField.options[laiusField.selectedIndex].text;
	kõrgusField = document.getElementById("kõrgus");
	kõrgusValue = kõrgusField.options[kõrgusField.selectedIndex].text;
	diameeterField = document.getElementById("diameeter");
	diameeterValue = diameeterField.options[diameeterField.selectedIndex].text;
	tootjaField = document.getElementById("tootja");
	tootjaValue = tootjaField.options[tootjaField.selectedIndex].text;
	tüüpField = document.getElementById("tüüp");
	tüüpValue = tüüpField.options[tüüpField.selectedIndex].text;
	
	// https://stackoverflow.com/questions/14643617/create-table-using-javascript
	const body = document.getElementById("endIt"), tbl = document.createElement('table');
	tbl.style.border = '1px solid black';
	for (let i = 0; i < killMe1.length; i++){
		let tester = true;
		const tr = tbl.insertRow();
		for (let j = 0; j < 5; j++){
			let c = killMe1[i][j];
			if(c != "default" && c != laiusValue && c != kõrgusValue && c != diameeterValue && c != tootjaValue && c != tüüpValue){
				tester = false;
				break;
			}
		}
		if(tester == true){
			for(k = 0; k < 9; k++){
				const td = tr.insertCell();
				td.appendChild(document.createTextNode(killMe2[i][k]));
				td.style.border = '1px solid black';
			}
		}
	}
	body.appendChild(tbl);
}