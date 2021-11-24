function gen(ac){
	// genereerib ülemise navigatsiooniriba
	// https://stackoverflow.com/questions/4772774/how-do-i-create-a-link-using-javascript
	var a = document.createElement("a");
	var text = document.createTextNode("Esileht"); 
	a.appendChild(text);
	a.href = "esileht.html";
	if(ac == 0){
		a.className = "active";
	}
	document.getElementById("nav").appendChild(a);
	
	var a = document.createElement("a");
	var text = document.createTextNode("Kontakt"); 
	a.appendChild(text);
	a.href = "kontakt.html";
	if(ac == 1){
		a.className = "active";
	}
	
	document.getElementById("nav").appendChild(a);
	var a = document.createElement("a");
	var text = document.createTextNode("Hinnakiri"); 
	a.appendChild(text);
	a.href = "hinnakiri.html";
	if(ac == 2){
		a.className = "active";
	}
	
	document.getElementById("nav").appendChild(a);
	var a = document.createElement("a");
	var text = document.createTextNode("Info"); 
	a.appendChild(text);
	a.href = "info.html";
	if(ac == 3){
		a.className = "active";
	}
	document.getElementById("nav").appendChild(a);
}