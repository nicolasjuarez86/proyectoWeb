const formulario = document.getElementById('formulario');

const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	console.log(`attribute-${campo}`);
	if(expresion.test(input.value)){
		document.getElementById(`attribute-${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`attribute-${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#attribute-${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#attribute-${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#attribute-${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`attribute-${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`attribute-${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#attribute-${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#attribute-${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#attribute-${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener("submit", async function (e) {
    e.preventDefault();

    const terminos = document.getElementById("terminos");
    if (campos.nombre && campos.correo && campos.telefono && terminos.checked) {
		console.log(this)
        this.contact_number.value = (Math.random() * 100000) | 0;

		const formData = new FormData(this);
//consulta1 envia mail al administrador
		const data = {
			service_id: 'service_79p088r',
			template_id: 'template_njuqzsj',
			user_id: 'BedjlkjvtC5Xg1FzB',
			template_params: {
				'user_name': formData.get('nombre'),
				'user_email': formData.get('correo'),
				'message': formData.get('consulta'),
				'telefono': formData.get('telefono'),
			}
		
		};
		 
		const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		
		})
		
		//consulta 2 envia mail al usuario
		const data2 = {
			service_id: 'service_79p088r',
			template_id: 'template_vd4rkx8',
			user_id: 'BedjlkjvtC5Xg1FzB',
			template_params: {
				'user_name': formData.get('nombre'),
				'user_email': formData.get('correo'),
				'message': formData.get('consulta'),
				'telefono ': formData.get('telefono'),
				

			}
		
		};
		 //retrasa el envio de segundo mail, ya que la api esta limitada a una solicitud por segundo
		setTimeout(async() => {
			const response2 = await fetch('https://api.emailjs.com/api/v1.0/email/send', 
		{
			method: 'POST',
			body: JSON.stringify(data2),
			headers: {
				'Content-Type': 'application/json'
			}
		}
		)
			
		 }, 1200);
		

		if(response.status == 200){
			console.log("Email enviado con exito")
		} else {
			console.log("Error al enviar email: ", response)
		}
				
        document
		.getElementById("formulario__mensaje-exito")
		.classList.add("formulario__mensaje-exito-activo");
        setTimeout(() => {
			document
			.getElementById("formulario__mensaje-exito")
			.classList.remove("formulario__mensaje-exito-activo");
        }, 5000);
		
        document
		.querySelectorAll(".formulario__grupo-correcto")
		.forEach((icono) => {
			icono.classList.remove("formulario__grupo-correcto");
		});
    } else {
		document
		.getElementById("formulario__mensaje")
		.classList.add("formulario__mensaje-activo");
    }
	formulario.reset();
});
