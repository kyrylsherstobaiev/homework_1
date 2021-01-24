"use strict";

let V;
let s;
let h;
let r;
let chooseFormula;
let line = "----------------------------------------------------------";

function calcSh() {
	if (chooseFormula == 1) {
		V = s * h;
	} else {
		V = Math.PI * r ** 2 * h;
	}
}

function checkNan() {
	while (isNaN(h) || h <= 0) {
		h = +prompt("Attn: Value must be a number more than zero:", "");
	}
}

//function checkNan(n) {
//	while (isNaN(n) || n <= 0) {
//		n = +prompt("Attn: Value must be a number more than zero:", "");
//	}
//}

chooseFormula = +prompt("Choose a formula: \n 1: V = S * h \n 2: V = π * r * r * h", '');

while (chooseFormula != 1 && chooseFormula != 2) {
	chooseFormula = +prompt("Attn: Enter Number-1 or Number-2: \n 1: V = S * h \n 2: V = π * r * r * h", '');
}

if (chooseFormula == 1) {
	document.write("<h4>Calculation of cylinder volume by S and h</h4>");
	document.write(`<p style="color:red;">*****************************************</p>`);

	s = +prompt("Enter square: S", "");

	while (isNaN(s) || s <= 0) {
		s = +prompt("Attn: Value must be a number more than zero:", "");
	}

	document.write(`<p>Square: ${s} cm<sup><small>2</small></sup></p>`);

	h = +prompt("Enter height: h", "");

	//checkNan(h);

	checkNan();

	document.write(`<p>${line}</p>`);
	document.write(`<p>Height: ${h} cm</p>`);
	document.write(`<p>${line}</p>`);
	document.write("<p>Formula: V = S*h</p>");
	document.write(`<p>${line}</p>`);

	calcSh();

	document.write(`<p>Cylinder volume: ${s}*${h} = ${V} cm<sup><small>3</small></sup></p>`);
	document.write(`<p>${line}</p>`);
} else {
	document.write("<h4>Calculation of cylinder volume by π, r and h</h4>");
	document.write(`<p style="color:red;">*****************************************</p>`);

	r = +prompt("Enter radius: r", "");

	while (isNaN(r) || r <= 0) {
		r = +prompt("Attn: Value must be a number more than zero:", "");
	}

	document.write(`<p>Radius: ${r} cm</p>`);

	h = +prompt("Enter height h", "");

	checkNan();

	document.write(`<p>${line}</p>`);
	document.write(`<p>Height: ${h} cm</p>`);
	document.write(`<p>${line}</p>`);
	document.write(`<p>Formula: V = &#960;*r<sup><small>2</small></sup>*h</p>`);
	document.write(`<p>${line}</p>`);

	calcSh();

	document.write(`<p>Cylinder volume: 3,14159*${r ** 2}*${h} = ${V.toFixed(5)} cm<sup><small>3</small></sup></p>`);
	document.write(`<p>${line}</p>`);
};





