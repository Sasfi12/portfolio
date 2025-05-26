<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('folios')->insert([
            [ "nom" => "Muhammad", 
              "prénom" => "Sufyan", 
              "bio" => "Motivated & sleep deprived fullstack webdev",
              "photo" => "sufyan.jpg", 
              "email" => "sufyan10.muhammad1070@hotmail.com"]
        ]);
    }
}
