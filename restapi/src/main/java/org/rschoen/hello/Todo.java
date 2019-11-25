package org.rschoen.hello;

import java.util.Date;

public class Todo {
    private Date dueDate;
    private String contents;

    // TODO: If this becomes unwieldy parameter-wise, a factory or mapper may be needed
    public Todo(Date dueDate, String contents) {
        this.dueDate = dueDate;
        this.contents = contents;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }
}
