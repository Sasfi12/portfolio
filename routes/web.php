<?php

use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\FolioController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
// main routes
Route::get('/', [FolioController::class , "index"]);
// project routes
Route::get('/projects', [ProjectController::class , "index"]);
// experience routes
Route::get('/experience', [ExperienceController::class , "index"]);
// skill routes
Route::get('/skills', [SkillController::class , "index"]);
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
