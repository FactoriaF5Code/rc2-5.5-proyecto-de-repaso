package net.jsrois.bootcampapp.controllers;

import net.jsrois.bootcampapp.persistence.Student;
import net.jsrois.bootcampapp.persistence.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    private final StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @PostMapping("/auth/login")
    public String login() {
        return "Muy bien campeón";
    }

    @PostMapping("/api/students")
    public CreatedStudentResponse createStudent(@RequestBody CreateStudentRequest request) {
        Student student = new Student(
                UUID.fromString(request.getId()),
                request.getName(),
                request.getCourseName());

        studentRepository.save(student);

        return new CreatedStudentResponse(student.getName(), student.getCourseName());
    }
}
