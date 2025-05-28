<?php

namespace App\Http\Controllers;

use App\Models\Folio;
use Inertia\Inertia;

class FolioController extends Controller
{
    public function index() {
        $folios = Folio::with("skills" , "projects" , 'experiences')->get();
        return Inertia::render("main" ,["folios" => $folios[0]]);
    }

}
