package net.jsrois.bootcampapp.persistence;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.UUID;

@Entity
@Table(name="students")
public class Student {
    @Id
    private UUID id;
    private String name;
    private String courseName;

    public Student() {}

    public Student(UUID id, String name, String courseName) {
        this.id = id;
        this.name = name;
        this.courseName = courseName;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }
}
