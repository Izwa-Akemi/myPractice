'use strict';
var q1 = document.getElementsByName("question1");
var q2 = document.getElementsByName("question2");
var q3 = document.getElementsByName("question3");
var modal = document.getElementById("modal");
var mask = document.getElementById("mask");

document.getElementById("answer").onclick = function () {
	if (q1[2].checked == true) {
		var questionAnswer1 = 1

	} else {
		var questionAnswer1 = 0
	}
	if (q2[1].checked == true) {
		var questionAnswer2 = 1

	} else {
		var questionAnswer2 = 0
	}

	if (q3[1].checked == true) {
		var questionAnswer3 = 1

	} else {
		var questionAnswer3 = 0

	}
	var total = (questionAnswer1 + questionAnswer2 + questionAnswer3) / 3 * 100
	var total1 = Math.floor(total);
	var result = document.getElementById("result")
	result.innerHTML = '正答率は' + total1 + '％でした'
	console.log(total);
	modal.classList.add("show")
	mask.classList.remove("hidden")
}

var close = document.getElementById("close")
close.onclick = function () {
	modal.classList.remove("show")
	mask.classList.add("hidden")
}
mask.onclick = function () {
	modal.classList.remove("show")
	mask.classList.add("hidden")
}

