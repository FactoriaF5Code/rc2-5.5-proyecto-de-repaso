package net.jsrois.bootcampapp;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

@SpringBootTest
class BootcampAppApplicationTests {

    @Test
    void contextLoads() {
        assertThat(2+2, equalTo(5));
    }

}
