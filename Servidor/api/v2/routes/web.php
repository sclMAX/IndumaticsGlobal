<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
use Illuminate\Support\Facades\DB;
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,PUT');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/JSON');

$app->get('/', function () use ($app) {
    return 'API RED INDUMATICS v1.0.0 by MAX';
});

$app->get('sucursales','SucursalesController@getAll');
$app->post('login','LoginController@login');
$app->get('lineas','LineasController@getAll');
$app->get('perfiles',function(){
    return DB::select('SELECT * FROM perfiles');
});
$app->get('clientes','ClientesController@getAll');
$app->post('clientes','ClientesController@add');
$app->put('clientes','ClientesController@update');
//$app->options('clientes','ClientesController@update' );
$app->get('tipoDocumentos', 'TipoDocumentoController@getAll');
$app->get('colores',function(){
    return DB::select('SELECT * FROM colores');
});
