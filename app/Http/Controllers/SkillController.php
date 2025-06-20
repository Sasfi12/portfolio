<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateSkillRequest;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $skill = Skill::all();
        return Inertia::render('skills' , ["skill"=>$skill]); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('skillsCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $skill = new Skill(); 
        $skill -> nom = $request -> nom; 
        $skill -> niveau = $request -> niveau; 
        $skill -> user_id = $request -> user_id; 
        $skill->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Skill $skill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $skill = Skill::find($id);
        return Inertia::render('skillsUpdate' , ["skill" => $skill]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id , Request $request)
    {
        $skill = Skill::findOrFail($id);
        $skill -> nom = $request -> nom; 
        $skill -> niveau = $request -> niveau; 
        $skill -> user_id = $request -> user_id; 
        $skill->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $skill = Skill::find($id);
        $skill->delete();  
    }
}
