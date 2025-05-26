<?php

namespace App\Http\Controllers;

use App\Models\Folio;
use Inertia\Inertia;

class FolioController extends Controller
{
    public function index() {
        $folios = Folio::where('id' , '=' , 1)->get();
        return Inertia::render("welcome" , ["folios" => $folios[0]]);
    }
}
