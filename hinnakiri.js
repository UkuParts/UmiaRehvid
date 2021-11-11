function getValue(){
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
	console.log(laiusValue);
	console.log(kõrgusValue);
	console.log(diameeterValue);
	console.log(tootjaValue);
	console.log(tüüpValue);
}