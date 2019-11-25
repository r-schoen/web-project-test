package org.rschoen.hello.dao;

import org.rschoen.hello.Todo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;

@Repository
public class TodoDAO {

    public ArrayList<Todo> fetchTodos() {
        // TODO: Hook this up to an actual database
        // to solve the port to port on the same server problem:
        // * https://stackoverflow.com/questions/57969766/not-able-to-set-proxy-port-in-my-vue-js-app
        ArrayList<Todo> schtuff = new ArrayList<>();
        schtuff.add(new Todo(new Date(), "Study Chinese"));
        schtuff.add(new Todo(new Date(), "Take out trash"));
        schtuff.add(new Todo(new Date(), "Pickup Eggs"));
        return schtuff;
    }
}
