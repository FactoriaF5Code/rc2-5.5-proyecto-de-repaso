package net.jsrois.bootcampapp;

import net.jsrois.bootcampapp.persistence.StudentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.utility.DockerImageName;

import java.util.UUID;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@Testcontainers
@AutoConfigureMockMvc
class StudentCreationTest {

    @Container
    @ServiceConnection
    static PostgreSQLContainer<?> postgresContainer = new PostgreSQLContainer<>(DockerImageName.parse("postgres:latest"));


    @Autowired
    private MockMvc api;

    @Autowired
    private StudentRepository studentRepository;


    @Test
    void createStudent() throws Exception {

        api.perform(post("/api/students")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                        {
                                          "id": "caa01091-1626-46f4-8974-48b4bb282a30",
                                          "name": "Pepito",
                                          "courseName": "RuralCamp2"
                                        }
                                        """
                        ))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", equalTo("Pepito")))
                .andExpect(jsonPath("$.courseName", equalTo("RuralCamp2")));

        assertTrue(studentRepository.existsById(UUID.fromString("caa01091-1626-46f4-8974-48b4bb282a30")));
    }

}
