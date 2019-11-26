package org.rschoen.hello.dao;

import org.rschoen.hello.Todo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;

@Repository
public class TodoDAO {
    public static ArrayList<Todo> todoList;

    public TodoDAO() {
        // TODO: Hook this up to an actual database
        todoList = new ArrayList<Todo>();
        todoList.add(new Todo(new Date(), "Study Chinese"));
        todoList.add(new Todo(new Date(), "Take out trash"));
        todoList.add(new Todo(new Date(), "Pickup Eggs"));
    }

    public ArrayList<Todo> fetchTodos() {
        return todoList;
    }
}
