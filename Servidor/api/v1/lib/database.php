<?php
class Database {
    public static function StartUp() {
        try {
            $pdo = new PDO('mysql:host=localhost;dbname=indumatics;charset=utf8', 'root', 'LxLCEpfcpM48E5ae');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
            return $pdo;
        } catch (PDOException $ex) {
            echo json_encode($ex);
        }
    }

}

function utf8_encode_deep(&$input) {
    if (is_array($input)) {
        foreach ($input as &$value) {
            if (is_string($value)) {
                $value = utf8_encode($value);
            }
        }
    }
}
?>


