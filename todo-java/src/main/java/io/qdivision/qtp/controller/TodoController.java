package io.qdivision.qtp.controller;

import io.qdivision.qtp.model.Todo;
import io.qdivision.qtp.repository.TodoNotFoundException;
import io.qdivision.qtp.repository.TodoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
public class TodoController {
    TodoRepository repository = new TodoRepository();

    @GetMapping("/todos")
    public List<Todo> getTodos(@RequestParam(value="id", defaultValue = "all") String id){
        List<Todo> todos =
                id.equals("all") ?
                        repository.getTodos() :
                        repository.getTodos().stream()
                                .filter(temp -> temp.getId().equals(id))
                                .collect(Collectors.toList());
        return todos;
    }

    @PostMapping("todos/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Todo addTodo(@RequestBody Todo newTodo){
        return repository.addTodo(newTodo);
    }

    @PutMapping("todos/edit/{todoId}")
    public Todo editTodo(@PathVariable String todoId, @RequestBody Todo newTodo){
        newTodo.setId(todoId);
        return repository.editTodo(todoId, newTodo);
    }

    @DeleteMapping("todos/delete/{todoId}")
    public Todo deleteTodo(@PathVariable String todoId){
        return repository.deleteTodo(todoId);
    }


}
