<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ClientesController extends Controller
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

    public function getAll(Request $request){
        $idSesion = $request->input('idSesion');
        $idSucursal = DB::table('usuarios')->where('idSesion','=',$idSesion)->value('idSucursal');
        if($idSucursal){
            $resultado =  DB::select("SELECT * FROM clientes WHERE idSucursal = $idSucursal");
            $response = new Response($resultado, 200);
        }else{
             $response = new Response("ERROR", 401);
        }
        return $response;        
    }
}