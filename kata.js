function greet(name) {
	if (name == null){
		return "Hello, my friend.";
	}

	else if (Array.isArray(name)){
		var newNames = formatNames(name);
		return lowNames(newNames) + upNames(newNames);
	}
	else if (name == name.toUpperCase()){
		return "HELLO " + name + "!";
	}
	
    return "Hello, " + name + ".";
}

function lowNames(names){
	var string = "Hello, ";
	var lower = Array();
	for (var x = 0; x < names.length; x++){
		if (names[x] != names[x].toUpperCase()){
			lower.push(names[x]);
		}
	}


	for (var i = 0; i < lower.length; i++){
		
		if (i == lower.length - 2){
			if (lower.length == 2){
				string += lower[i]+ " and ";
			}
			else{
				string += lower[i]+ ", and ";
			}
		}
		else if (i == lower.length-1){
			string+= lower[i] + ".";
		}
		else{
			string += lower[i] + ", "
		}		
			
	}
	return string;

}

function upNames(names){
	var string = " AND HELLO ";
	var upper = Array();
	for (var x = 0; x < names.length; x++){
		if (names[x] == names[x].toUpperCase()){
			upper.push(names[x]);
		}
	}
	if (upper.length == 0){
		return "";
	}
	for (var i = 0; i < upper.length; i++){

		if (i == upper.length - 2){
			if (upper.length == 2){
				string += upper[i]+ " AND ";
			}
			else{
				string += upper[i]+ ", AND ";
			}
		}
		else if (i == upper.length-1){
			string+= upper[i] + ".";
		}
		else{
			string += upper[i] + ", "
		}		
			
	}
	return string;
}

function formatNames(names){
	return names.reduce((formatted, i) => {
        if (i.indexOf('"') !== -1) {
            formatted.push(i.replace(/"/g, ''))
        } else if (i.indexOf(',') !== -1) {
            formatted.push(...i.split(',').map(i => i.trim()));

        } else {
            formatted.push(i)
        }
        return formatted
    }, [])
}

module.exports = {
	greet,
	formatNames,
	lowNames,
	upNames,
};

