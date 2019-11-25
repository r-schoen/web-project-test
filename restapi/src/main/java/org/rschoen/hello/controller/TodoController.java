package org.rschoen.hello.controller;


import org.rschoen.hello.Todo;
import org.rschoen.hello.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @RequestMapping("/fetch")
    public ArrayList<Todo> fetchTodos() {
        return todoService.FetchTodos();
    }
}
