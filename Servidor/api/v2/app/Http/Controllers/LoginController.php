<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
class Respuesta {
   public $idSesion = '';
}
class LoginController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function login(Request $request){
        $idSucursal = $request->input('idSucursal');
        $usuario = $request->input('Usuario');
        $clave = $request->input('Clave');
        $res = DB::table('usuarios')->where([
            ['idSucursal', '=',$idSucursal],
            ['Usuario', '=', $usuario],
            ['Clave', '=', $clave]
        ])->update(['idSesion'=> sha1($usuario . time())]);
        if(count($res) > 0){
            $res = DB::table('usuarios')->where([
            ['idSucursal', '=',$idSucursal],
            ['Usuario', '=', $usuario],
            ['Clave', '=', $clave]
            ])->value('idSesion');
        }else{
            $res = '';
        }
        $result = new Respuesta();
        $result->idSesion = $res;
       return json_encode($result);
    }
}