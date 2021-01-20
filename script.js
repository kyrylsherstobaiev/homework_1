"user strict";

chooseFormula = prompt("Choose a formula: \n 1: V = S * h \n 2: V = π * r * r * h", '');

if (chooseFormula == 1) {
	document.write("<h4>Calculation of cylinder volume by S and h</h4>");
	document.write(`<p style="color:red;">*****************************************</p>`);
	s = +prompt("Enter square: S", "");
	document.write(`<p>Square: ${s} cm<sup><small>2</small></sup></p>`);
	h = +prompt("Enter height: h", "");
	document.write("<p>-------------------------------------</p>");
	document.write(`<p>Height: ${h} cm</p>`);
	document.write("<p>-------------------------------------</p>");
	document.write("<p>Formula: V = S*h</p>");
	V = s * h;
	document.write("<p>-------------------------------------</p>");
	document.write(`<p>Cylinder volume: ${s}*${h} = ${V} cm<sup><small>3</small></sup></p>`);
	document.write("<p>-------------------------------------</p>");
}
else {
	document.write("<h4>Calculation of cylinder volume by π, r and h</h4>");
	document.write(`<p style="color:red;">*****************************************</p>`);
	r = +prompt("Enter radius: r", "");
	document.write(`<p>Radius: ${r} cm</p>`);
	h = +prompt("Enter height h", "");
	document.write("<p>-------------------------------------</p>"); 2
	document.write(`<p>Height: ${h} cm</p>`);
	document.write("<p>-------------------------------------</p>");
	document.write(`<p>Formula: V = &#960;*r<sup><small>2</small></sup>*h</p>`);
	V = Math.PI * r ** 2 * h;
	document.write("<p>-------------------------------------</p>");
	document.write(`<p>Cylinder volume: 3,14159*${r ** 2}*${h} = ${V} cm<sup><small>3</small></sup></p>`);
	document.write("<p>-------------------------------------</p>");
};





