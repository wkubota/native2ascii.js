"use script"

function doN2a() {
	var intxt = $("#intxt").val();
	var outtxt = Native2Ascii.n2a(intxt);
	$("#outtxt").val(outtxt);
}

function doA2n() {
	var intxt = $("#intxt").val();
	var outtxt = Native2Ascii.a2n(intxt);
	$("#outtxt").val(outtxt);
}

$(document).ready(function(){
	$("#btn2ascii").on("click", doN2a);
	$("#btn2native").on("click", doA2n);
});
