package nl.icampagne.study.springboot_angular_app;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class SpringbootAngularAppMain extends SpringBootServletInitializer {

    public static void main(String[] args) {

        SpringApplication.run(SpringbootAngularAppMain.class, args);
        try {
            openHomePage();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void openHomePage() throws IOException {
        Runtime rt = Runtime.getRuntime();
        rt.exec("rundll32 url.dll,FileProtocolHandler " + "http://localhost:8092");
    }
}
