package io.qdivision.qtp.repository;

import io.qdivision.qtp.model.Todo;
import lombok.Data;

import java.util.*;

@Data
public class TodoRepository {

    Map<String, Todo> todos = new HashMap<>();
    public TodoRepository(){
        String id = UUID.randomUUID().toString();
        Todo newTodo = new Todo(id, "b", false);
        todos.put(id , newTodo);
        String id1 = UUID.randomUUID().toString();
        Todo newTodo1 = new Todo(id1, "a", true);
        todos.put(id1 , newTodo1);
    }

    public List<Todo> getTodos(){
        return new ArrayList<>(todos.values());
    }

    public Todo addTodo(Todo newTodo){
        String id = UUID.randomUUID().toString();
        newTodo.setId(id);
        todos.put(id, newTodo);
        return newTodo;
    }

    public Todo deleteTodo(String todoId){
        Todo todo = todos.get(todoId);
        todo = new Todo(todo.getId(), todo.getDescription(), todo.getCompleted());
        todos.remove(todoId);
        return todo;
    }

    public Todo editTodo(String todoId, Todo newTodo){
        todos.put(todoId, newTodo);
        return newTodo;
    }

}
