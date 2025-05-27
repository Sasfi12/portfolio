<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Folio extends Model
{
     public function projects() {
        $this->hasMany(Project::class);
     }
     public function experiences() {
        $this->hasMany(Experience::class);
     }
     public function skills() {
        $this->hasMany(Skill::class);
     }
}
