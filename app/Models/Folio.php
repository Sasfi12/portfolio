<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Folio extends Model
{
     public function projects() {
        return $this->hasMany(Project::class , "user_id" , "id");
     }
     public function experiences() {
        return $this->hasMany(Experience::class , "user_id" , "id");
     }
     public function skills() {
        return $this->hasMany(Skill::class , "user_id" , "id");
     }
}
