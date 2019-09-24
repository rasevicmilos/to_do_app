<?php

namespace App\Http\Controllers;

use App\Models\TodoItem;
use Illuminate\Http\Request;
use App\Services\TodoService;
use App\Http\Requests\UpdateTodoItemRequest;
use App\Http\Requests\CreateTodoItemRequest;

class TodosController extends Controller
{
    private $todosService;

    public function __construct(TodoService $todosService)
    {
        $this->todosService = $todosService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return TodoService::getAllTodos();
        } catch(UserNotLoggedInException $e) {
            return $e->getMessage();
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateTodoItemRequest $request)
    {
        return $this->todosService->createTodo($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TodoItem  $todoItem
     * @return \Illuminate\Http\Response
     */
    public function show(TodoItem $todoItem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TodoItem  $todoItem
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTodoItemRequest $request, $todoItem)
    {
        return $this->todosService->editTodo($request->validated(), $todoItem);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TodoItem  $todoItem
     * @return \Illuminate\Http\Response
     */
    public function destroy(TodoItem $todoItem)
    {
        //
    }
}
