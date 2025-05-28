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
            "niveau" => "A", 
            "user_id" => 1],
            [
            "nom" => "CSS", 
            "niveau" => "C", 
            "user_id" => 1],
            [
            "nom" => "JS", 
            "niveau" => "A", 
            "user_id" => 1],

        ]);
    }
}
