import BaseApiService from './BaseApiService';

const ENDPOINTS = {
    TODOS: '/todos',
    TODO: '/todos/{id}'
}

class TodosApiService extends BaseApiService {
    getAll(){
        return this.api.get(ENDPOINTS.TODOS);
    }

    createTodo(data) {
        return this.api.post(ENDPOINTS.TODOS, data);
    }

    // updateTodo(todoId, data) {
    //     this.api.put(ENDPOINTS.TODO.replace('{id}', todoId), data);
    // }

    deleteTodo(todoId) {
        console.log(todoId);
        return this.api.delete(ENDPOINTS.TODO.replace('{id}', todoId))
    }
}

const todosApiService = new TodosApiService();

export default todosApiService;
