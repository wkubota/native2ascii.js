var Native2Ascii = new Object;

Native2Ascii.n2a = function (target) {
	var result = '';
	var stringLength = target.length;
	var charCode = 0;
	for (var i  = 0; i < stringLength; i++) {
		charCode = target.charCodeAt(i);
		if (127 < charCode) {
			var temp = escape(target.charAt(i)).toLowerCase();
			result += temp.replace('%', '\\');
		} else {
			result += target.charAt(i);
		}
	}
	return result;
}

Native2Ascii.a2n = function (target) {
	/*
	var regex = /\\u[0-9a-f]{4}/g;
	var result = target.replace(regex, function(item){
		var charCodeString = item.slice(2);
		var charCode = parseInt(charCodeString, 16);
		return String.fromCharCode(charCode);
	});
	return result;
	*/

	return unescape(target.split('\\').join('%'));
}