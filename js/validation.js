/*function validation() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;
	let message = document.getElementById("message").value;
	let errorMessage = document.getElementById("errorMessage");
	let text;

	if (name.length <= 2) {
		text = "Поле Имя должно содержать минимум 2 символа";
		errorMessage.innerHTML = text;
		return false;
	}

	if (isNaN(phone) || phone.value < 10) {
		text = "Пожалуйста, введите корректный номер телефона";
		errorMessage.innerHTML = text;
		return false;
	}

	if (email.indexOf('@') == -1 ||email.length < 6) {
		text = "Пожалуйста, введите корректный email";
		errorMessage.innerHTML = text;
		return false;
	}

	return false;
}*/

var phoneInput = document.querySelector('.phone')
phoneInput.addEventListener('keydown', function(event) {
	if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
	var mask = '+7 (111) 111-11-11';

	if (/[0-9\+\ \-\(\)]/.test(event.key)) {
		var currentString = this.value;
		var currentLength = currentString.length;
		if (/[0-9]/.test(event.key)) {
			if (mask[currentLength] == '1') {
				this.value = currentString + event.key;
			} else {
				for (var i=currentLength; i<mask.length; i++) {
					if (mask[i] == '1') {
						this.value = currentString + event.key;
						break;
					}
					currentString += mask[i];
				}
			}
		}
	}
});

$('#contactForm').validate({

	rules: {
		name: {
			required: true
		},

		phone: {
			required: true
		},

		email: {
			required: true
		},

		message: {
			required: false
		}
	},

	messages: {
		name: {
			required: 'Пожалуйста, введите имя'
		},
		phone: {
			required: 'Пожалуйста введите корректный телефон'
		},
		email: {
			required: 'Пожалуйста введите корректный email'
		}
	},

	submitHandler: function (form) {

		let successMessage = document.getElementById('successMessage');
		let errorMessage = document.getElementById('errorMessage');
		let form_data = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: form_data,
			success: function () {
				successMessage.innerHTML = 'Сообщение успешно отправлено'
			},
			error: function () {
				successMessage.innerHTML = 'Что то пошло не так'
			}
		})
	}
})
