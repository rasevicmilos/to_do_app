<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTodoItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // return TodoItem::findOrFail(request()->path('id'))->user_id === auth()->user()->id;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'sometimes|required|string',
            'description' => 'sometimes|required|string',
            'priority' => 'sometimes|required|integer',
            'completed' => 'sometimes|required|boolean'
        ];
    }
}
