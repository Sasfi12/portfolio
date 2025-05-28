<?php

namespace App\Http\Controllers;

use App\Models\Folio;
use Inertia\Inertia;

class FolioController extends Controller
{
    public function index() {
        $folios = Folio::with("skills")->get();
        return Inertia::render("welcome" , ["folios" => $folios[0]]);
    }

}
