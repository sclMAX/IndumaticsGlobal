<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

class SucursalesController extends Controller
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

    public function getAll(){
        return DB::select("SELECT idSucursal, Nombre, Descripcion FROM sucursales");
    }
}
