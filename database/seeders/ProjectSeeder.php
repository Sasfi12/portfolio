<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("projects")->insert([
            [ 
               "titre" => "memoryGame",
               "description" => "A simple memory game made in pure js",
               "github_link" => "https://github.com/Sasfi12/memoryGame",
               "demo_link" => "none", 
               "image" => "./memoryGame.png",
               "user_id" => 1
            ],
        ]);
    }
}
