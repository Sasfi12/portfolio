<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('experiences')->insert([
            [
                "titre" => "Stagiaire Coding",
                "entreprise" => "Molengeek",
                "date_debut_fin" => "Début Novembre 2024 à Fin Juin 2025",
                "description" => "multiple project solo et en groupe durant ma formation Coding à Molengeek",
                "user_id" => 1,
            ]
            ]);
    }
}
