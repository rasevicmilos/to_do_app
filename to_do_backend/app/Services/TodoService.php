<?php

namespace App\Services;

use App\Models\TodoItem;
use App\Exceptions\UserNotLoggedInException;
use Illuminate\Http\Request;

class TodoService
{
    public static function getAllTodos()
    {
        if(auth()->user()){
            return TodoItem::where('user_id',auth()->user()->id)->get();
        } else {
            throw new UserNotLoggedInException;
        }
    }

    public function createTodo($data)
    {
        TodoItem::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'priority' => $data['priority'],
            'completed' => $data['completed'],
            'user_id' => auth()->user()->id
        ]);

        return 'Successfully created';
    }

    public function editTodo($data, $id) {
        info($data);
        $todoItem = TodoItem::findOrFail($id);
        
        $todoItem->title = array_get($data, 'title', $todoItem->title);
        $todoItem->description = array_get($data, 'description', $todoItem->description);
        $todoItem->completed = array_get($data, 'completed', $todoItem->completed);
        $todoItem->priority = array_get($data, 'priority', $todoItem->priority);

        $todoItem->save();
        
        return $todoItem;
    }
}