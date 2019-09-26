import BaseApiService from './BaseApiService';

const ENDPOINTS = {
    TODOS: '/todos',
    TODO: '/todos/{id}'
}

class TodosApiService extends BaseApiService {
    getAll(){
        return this.api.get(ENDPOINTS.TODOS);
    }

    // createTodo(data) {
    //     this.api.post(ENDPOINTS.TODOS, data);
    // }

    // updateTodo(todoId, data) {
    //     this.api.put(ENDPOINTS.TODO.replace('{id}', todoId), data);
    // }

    // deleteTodo(todoId) {}

}

const todosApiService = new TodosApiService();

export default todosApiService;
