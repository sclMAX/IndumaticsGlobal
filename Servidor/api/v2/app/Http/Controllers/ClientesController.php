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
		}
		else{
			$response = new Response("ERROR", 401);
		}
		return $response;
	}
	
	public function add(Request $request){
		$idSesion = $request->input('idSesion');
		$idSucursal = DB::table('usuarios')->where('idSesion','=',$idSesion)->value('idSucursal');
		if($idSucursal){
			$sCliente = json_decode($request->input('Cliente'));
			$newCliente = array(
						                "Nombre"        =>  $sCliente->Nombre,
						                "Direccion"     =>  $sCliente->Direccion,
						                "Localidad"     =>  $sCliente->Localidad,
						                "Provincia"     =>  $sCliente->Provincia,
						                "Pais"          =>  $sCliente->Pais,
						                "Email"         =>  $sCliente->Email,
						                "Telefonos"     =>  $sCliente->Telefonos,
						                "Comentarios"   =>  $sCliente->Comentarios,
						                "idSucursal"    =>  $idSucursal
						            );
			$id = DB::table('clientes')->insertGetId($newCliente);
			$cliente = DB::select("SELECT * FROM clientes WHERE idSucursal = $idSucursal AND idCliente = $id");
			$response = new Response($cliente, 200);
		}
		else{
			$response = new Response("Accesso Denegado", 401);
		}
		return $response;
		
	}
	public function update(Request $request){
		$idSesion = $request->input('idSesion');
		$idSucursal = DB::table('usuarios')->where('idSesion','=',$idSesion)->value('idSucursal');
		if($idSucursal){
			$sCliente = json_decode($request->input('Cliente'));
			$idCliente =  $sCliente->idCliente;
			$newCliente = array(
						                "Nombre"        =>  $sCliente->Nombre,
						                "Direccion"     =>  $sCliente->Direccion,
						                "Localidad"     =>  $sCliente->Localidad,
						                "Provincia"     =>  $sCliente->Provincia,
						                "Pais"          =>  $sCliente->Pais,
						                "Email"         =>  $sCliente->Email,
						                "Telefonos"     =>  $sCliente->Telefonos,
						                "Comentarios"   =>  $sCliente->Comentarios,
						                "idSucursal"    =>  $idSucursal
						            );
			$id = DB::table('clientes')->where('idCliente', $idCliente)->update($newCliente);
			$cliente = DB::table('clientes')->where(['idSucursal', '=', $idSucursal],['idCliente', '=', $idCliente])->get();
			$response = new Response($cliente, 200);
		}
		else{
			$response = new Response("Accesso Denegado", 401);
		}
		return $response;
		
	}
}
