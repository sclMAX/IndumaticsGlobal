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

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->get('sucursales','SucursalesController@getAll');
$app->get('hola',function(){
       return "HOLA MUNDO!";
});
$app->post('login','LoginController@login');
$app->get('lineas','LineasController@getAll');
$app->get('perfiles',function(){
    return DB::select('SELECT idPerfil, Descripcion, Largo, Peso, Barras, idLinea FROM perfiles');
});
$app->get('clientes','ClientesController@getAll');
$app->post('clientes','ClientesController@add');
