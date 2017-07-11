<?php
require '../lib/database.php';
class SucursalesModel {

    private $db;
    private $table = 'sucursales';
    private $getFields = 'idSucursal, Nombre, Descripcion';

    public function __CONSTRUCT() {
        $this->db = Database::StartUp();
    }

    public function getAll() {
        try {
            $st = $this->db->prepare("SELECT $this->getFields FROM $this->table");
            if ($st->execute()) {
                $res = (array) $st->fetchAll(PDO::FETCH_ASSOC);
                $result = $this->sanitizeData($res);
            } else {
               $result = "Sin coincidencias en la Base de Datos";
            }
        } catch (Exception $e) {
            $result = "ERROR CODE:" . $e->getCode();
        }
        return $result;
    }

    public function getOne($id) {
        try {
            $st = $this->db->prepare("SELECT $this->getFields FROM $this->table WHERE idSucursal = :id");
            $chkEx = $st->execute(array(':id' => $id));
            $row = $st->fetch(PDO::FETCH_ASSOC);
            if ($chkEx && $row) {
                utf8_encode_deep($row);
                $result = $row;
            } else {
                $result = "No hay resistros con el ID: $id en la Base de Datos";
            }
        } catch (Exception $e) {
            $result = "ERROR CODE: " . $e->getCode();
        }
        return $result;
    }

    private function sanitizeData($inputData) {
        $data = array();
        foreach ($inputData as $value) {
            utf8_encode_deep($value);
            $data[] = $value;
        }
        return $data;
    }

}
?>