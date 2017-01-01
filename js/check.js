function showAnswer() {
			var check = false;
			var form_name = document.getElementById('form_1');
			for (var i=0; i<form_name.choice.length; i++) {
				if (form_name.choice[i].checked) {
					document.getElementById(form_name.choice[i].value+'A').style.display = 'block';
					check = true;
				} else {
					document.getElementById(form_name.choice[i].value+'A').style.display = 'none';
				}
			}
			if(!check)
				alert("請選擇一個答案");
}
