// list, mis sisaldab erinevate otsingu parameetrite muutujate nimesid
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
	
	// genereerib tabeli parameetrite põhjal
	// viide: https://stackoverflow.com/questions/14643617/create-table-using-javascript
	const body = document.getElementById("endIt"), tbl = document.createElement('table');
	body.innerHTML = ""; // teeb tabeli tühjaks; vastasel juhul võib tekkida olukord, kus lehel on korraga mitu tabelit
	tbl.style.border = '1px solid black';
	let count = 0; // parameetritele vastavate rehvide arv + 1, +1 tuleb tabeli kõige ülemisest reast, mida loetakse ka osaks tabelist
	for (let i = 0; i < db1.length; i++){
		let tester = true;
		for (let j = 0; j < 5; j++){
			if(eval(val[j]) == "default"){ // eval(val[j]) on j-inda parameetri väärtus
				continue;
			}
			let c = db1[i][j];
			if(c != "default" && c != eval(val[j])){
				tester = false;
				break;
			}
		}
		if(tester == true){ // juhul kui i-s rehv vastab parameetritele lisatakse see tabeli lõppu
			count++;
			const tr = tbl.insertRow();
			for(k = 0; k < 8; k++){
				const td = tr.insertCell();
				td.appendChild(document.createTextNode(db2[i][k]));
				td.style.border = '1px solid black';
			}
		}
	}
	body.appendChild(tbl);
	if(count == 1){ // kui parameetritele vastavaid rehve ei leitud
		body.innerHTML = "<div>Parameetritele vastavat tulemust ei leitud!</div>";
	}
}