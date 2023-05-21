<?php
//if ($_SERVER["REQUEST_METHOD"] == "POST") {
try{
	//header('Content-Type:application/json;charset=utf-8');
	if (isset($_POST['nombre']) && isset($_POST['correo'])) {
		$name = strip_tags(trim($_POST["nombre"]));
		$tel = strip_tags(trim($_POST["telefono"]));
		$name = str_replace(array("\r", "\n"), array(" ", " "), $name);
		$tel = str_replace(array("\r", "\n"), array(" ", " "), $tel);
		$email = filter_var(trim($_POST["correo"]), FILTER_SANITIZE_EMAIL);
		$message = trim($_POST["consulta"]);


		$recipient = "njuarez@internetdinamica.com";

		$subject = "Consuta para HOMELAND de: $name";
		$email_content = "Nombre: $name\n";
		$email_content = "Empresa: $empresa\n";
		$email_content .= "Email: $email\n";
		$email_content .= "Telefono: $tel\n";
		$email_content .= "Mensaje: \n$message\n";
		$email_headers = "From: $name <$email>";


		if (empty($name)) {
			//http_response_code(202);
            echo('Debe ingresar su nombre');
            exit();
		}
		if (empty($message)) {
			//http_response_code(202);
            echo('Debe ingresar un mensaje');
            exit();
		}
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			//http_response_code(202);
            echo('El correo ingresado es incorrecto');
            exit();
		}

		if (mail($recipient, $subject, $email_content, $email_headers)) {
			//http_response_code(200);
			  header("Location: https://nicolasjuarez86.github.io/proyectoWeb/", true, 301);
			  exit();
			

		} else {
			//http_response_code(202);

			echo json_encode(array('response' => 'error 2'));

		}

	}else{
		echo json_encode(array('response' => 'error 3'));

	}
}catch(Exception $ee){

	echo json_encode(array('response' => 'error 5'));


}

?>
