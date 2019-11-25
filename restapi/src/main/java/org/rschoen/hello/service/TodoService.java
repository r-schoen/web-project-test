package org.rschoen.hello.service;

import org.rschoen.hello.Todo;
import org.rschoen.hello.dao.TodoDAO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TodoService {

    private final TodoDAO todoDAO;

    public TodoService(TodoDAO todoDAO) {
        this.todoDAO = todoDAO;
    }

    public ArrayList<Todo> FetchTodos() {
        return todoDAO.fetchTodos();
    }
}
