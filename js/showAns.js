/*jshint esversion:6 */

function showAnswer() {
	var questionRadioList = document.querySelectorAll('[type=radio]');

	for (var i = 0; i < questionRadioList.length; i++) {
		if (questionRadioList[i].checked) {
			document.getElementById(`A${i+1}`).classList.remove('hide');
		} else {
			document.getElementById(`A${i+1}`).classList.add('hide');
		}
	}
}
