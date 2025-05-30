<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("skills")->insert([
            [
            "nom" => "HTML", 
            "niveau" => 80, 
            "user_id" => 1],
            [
            "nom" => "CSS", 
            "niveau" => 40, 
            "user_id" => 1],
            [
            "nom" => "JS", 
            "niveau" => 45, 
            "user_id" => 1],

        ]);
    }
}
