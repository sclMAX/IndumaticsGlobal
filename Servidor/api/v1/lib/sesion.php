<?php
require './database.php';

function getSesion($idSucursal, $usuario, $clave)
{
    $db = Database::StartUp();
    $st = $db->prepare("SELECT * FROM usuarios WHERE (idSucursal = :idSucursal) AND (Usuario = :usuario) AND (Clave = :clave);");
    $chk = $st->execute(array(':idSucursal' => $idSucursal, ':usuario' => $usuario, ':clave' => $clave));
    $row = $st->fetch(PDO::FETCH_ASSOC);
    if($chk && $row){
        
    }

}