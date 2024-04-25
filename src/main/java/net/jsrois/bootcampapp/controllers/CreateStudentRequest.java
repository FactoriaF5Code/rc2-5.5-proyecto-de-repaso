package net.jsrois.bootcampapp.controllers;

public class CreateStudentRequest {
    private String id;
    private String name;
    private String courseName;

    public CreateStudentRequest(String id, String name, String courseName) {
        this.id = id;
        this.name = name;
        this.courseName = courseName;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }
}
