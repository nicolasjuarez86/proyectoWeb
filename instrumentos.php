<?php
// Manejar solicitud GET para la búsqueda de instrumentos
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Aquí puedes realizar la lógica de búsqueda de instrumentos y obtener los resultados

    // Ejemplo de resultados de búsqueda
    $resultados = [
        ['id' => 1, 'nombre' => 'Guitarra'],
        ['id' => 2, 'nombre' => 'Piano'],
        ['id' => 3, 'nombre' => 'Batería']
    ];

    // Establecer la cabecera de respuesta como JSON
    header('Content-Type: application/json');

    // Devolver los resultados como JSON
    echo json_encode($resultados);
}
?>
