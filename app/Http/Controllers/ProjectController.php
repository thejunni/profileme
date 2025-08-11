<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        return Project::orderBy('created_at','desc')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'link' => 'nullable|url',
            'tech_stack' => 'nullable|array',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projects','public');
            $data['image'] = $path;
        }

        $data['tech_stack'] = isset($data['tech_stack']) ? json_encode($data['tech_stack']) : null;

        $project = Project::create($data);

        return response()->json($project, 201);
    }

    public function show(Project $project)
    {
        return $project;
    }

    public function update(Request $request, Project $project)
    {
        $data = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'link' => 'nullable|url',
            'tech_stack' => 'nullable|array',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            // hapus file lama jika perlu...
            $path = $request->file('image')->store('projects','public');
            $data['image'] = $path;
        }

        if (isset($data['tech_stack'])) {
            $data['tech_stack'] = json_encode($data['tech_stack']);
        }

        $project->update($data);

        return response()->json($project);
    }

    public function destroy(Project $project)
    {
        // optionally delete image file
        $project->delete();
        return response()->noContent();
    }
}
