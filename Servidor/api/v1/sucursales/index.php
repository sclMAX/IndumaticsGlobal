<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,PUT');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/JSON');
require './model/sucursalesModel.php';

$method = filter_input(INPUT_SERVER, 'REQUEST_METHOD');
switch ($method) {
    case 'GET'://consulta
        get();
        break;
    default://metodo NO soportado
        echo 'METODO NO SOPORTADO';
        break;
}

function get() {
    $id = filter_input(INPUT_GET, 'id');
    $um = new SucursalesModel();
    if ($id) {
        $res = $um->getOne($id);
    } else {
        $res = $um->getAll();
    }
    echo json_encode($res);
}
?>